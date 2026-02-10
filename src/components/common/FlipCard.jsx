import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';

const FlipCard = ({ frontImage, title, subtitle, price, description, highlights, link, isDarkMode }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 h-125"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className={`absolute inset-0 backface-hidden rounded-3xl overflow-hidden border shadow-2xl ${
          isDarkMode ? 'border-[rgba(201,163,106,0.25)]' : 'border-[#DDE8DD]'
        }`}>
          <img src={frontImage} alt={title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${
            isDarkMode
              ? 'bg-linear-to-t from-[rgba(14,11,9,0.96)] via-[rgba(14,11,9,0.5)] to-transparent'
              : 'bg-linear-to-t from-[rgba(17,24,18,0.9)] via-[rgba(17,24,18,0.35)] to-transparent'
          }`} />

          <div className="absolute top-24 left-6">
            <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${
              isDarkMode
                ? 'border-[rgba(201,163,106,0.45)] bg-[rgba(26,22,18,0.78)] text-[#E7CFA2]'
                : 'border-[rgba(47,93,58,0.4)] bg-[rgba(243,247,242,0.9)] text-[#2F5D3A]'
            }`}>
              {subtitle}
            </span>
          </div>

          <div className="absolute top-5 left-5 right-5">
            <div className={`rounded-2xl border px-5 py-3 backdrop-blur-md shadow-lg ${
              isDarkMode
                ? 'border-[rgba(201,163,106,0.35)] bg-[rgba(16,13,11,0.82)] text-white'
                : 'border-[rgba(47,93,58,0.3)] bg-[rgba(243,247,242,0.92)] text-[#1F2A1F]'
            }`}>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</h3>
            </div>
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
            <span className={`rounded-full px-4 py-2 text-lg font-bold shadow-lg ${
              isDarkMode
                ? 'bg-[rgba(201,163,106,0.9)] text-[#1A120A]'
                : 'bg-[#EAF3EA] text-[#1F2A1F]'
            }`}>
              {price}
            </span>
            <span className={`text-xs uppercase tracking-widest ${
              isDarkMode ? 'text-[#E7CFA2]' : 'text-white/85'
            }`}>
              per night
            </span>
          </div>
        </div>

        {/* Back */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden shadow-2xl border ${
          isDarkMode
            ? 'bg-linear-to-br from-[#0F0D0A] via-[#16120F] to-[#1A140F] border-[rgba(201,163,106,0.3)]'
            : 'bg-linear-to-br from-[#F3F7F2] via-[#EAF3EA] to-[#DDE8DD] border-[rgba(47,93,58,0.35)]'
        }`}>
          <div className="p-6 h-full flex flex-col">
            <div>
              <h3 className={`text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-[#1F2A1F]'}`}>{title}</h3>
              <p className={`text-sm mb-5 leading-relaxed ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#4B5F4B]'}`}>{description}</p>
              <div className="space-y-2">
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                  isDarkMode ? 'text-[#E7CFA2]' : 'text-[#2F5D3A]'
                }`}>Highlights</p>
                {highlights.map((highlight, i) => (
                  <div key={i} className={`flex items-start gap-2 text-sm ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#2F3A2F]'}`}>
                    <span className={`mt-0.5 ${isDarkMode ? 'text-[#E7CFA2]' : 'text-[#2F5D3A]'}`}>✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link to={link} className="mt-auto">
              <button className={`w-full rounded-xl px-6 py-3 text-sm font-semibold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2] text-[#1A120A] shadow-[0_0_20px_rgba(201,163,106,0.3)] hover:shadow-[0_0_30px_rgba(231,207,162,0.45)]'
                  : 'bg-linear-to-r from-[#2F5D3A] to-[#7BAF7C] text-[#0F1A12] shadow-[0_0_20px_rgba(47,93,58,0.3)] hover:shadow-[0_0_30px_rgba(123,175,124,0.45)]'
              }`}>
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FlipCard);
