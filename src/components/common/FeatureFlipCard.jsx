import React, { useState } from 'react';

const FeatureFlipCard = ({ icon, title, description, isDarkMode }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 h-[280px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div
          style={!isDarkMode ? { backgroundColor: 'transparent' } : undefined}
          className={`absolute inset-0 backface-hidden rounded-3xl overflow-hidden border backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center transition-all duration-500 ${
            isDarkMode
              ? 'border-[rgba(201,163,106,0.25)] bg-linear-to-br from-[#14110E] via-[#0F0D0A] to-[#1A140F] shadow-[0_14px_40px_-22px_rgba(0,0,0,0.8)] group-hover:-translate-y-1 group-hover:shadow-[0_24px_50px_-22px_rgba(201,163,106,0.35)]'
              : 'border-[rgba(15,23,42,0.2)] bg-white hover:border-[rgba(37,99,235,0.6)] hover:shadow-[0_22px_26px_-18px_rgba(71,85,105,0.2)]'
          }`}
        >
          <div className={`absolute inset-x-6 top-6 h-px ${
            isDarkMode ? 'bg-linear-to-r from-transparent via-[rgba(201,163,106,0.5)] to-transparent' : 'bg-linear-to-r from-transparent via-[rgba(37,99,235,0.4)] to-transparent'
          }`} />
          {icon && <div className="text-5xl mb-4">{icon}</div>}
          <p className={`text-xs font-semibold uppercase tracking-widest ${
            isDarkMode ? 'text-[#C9A36A]' : 'text-[#3B82F6]'
          }`}>Signature</p>
          <h3 className={`text-2xl font-semibold mt-2 ${
            isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1A202C]'
          }`}>{title}</h3>
          <p className={`text-xs mt-3 uppercase tracking-wider ${
            isDarkMode ? 'text-[#A79C8C]' : 'text-[#64748B]'
          }`}>Tap to view details</p>
          <div className={`absolute inset-x-6 bottom-6 h-px ${
            isDarkMode ? 'bg-linear-to-r from-transparent via-[rgba(201,163,106,0.35)] to-transparent' : 'bg-linear-to-r from-transparent via-[rgba(37,99,235,0.25)] to-transparent'
          }`} />
        </div>

        {/* Back */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden border p-8 flex flex-col items-center justify-center text-center shadow-xl ${
          isDarkMode
            ? 'border-[rgba(201,163,106,0.4)] bg-linear-to-br from-[#2B2017] via-[#17120D] to-[#0F0D0A]'
            : 'border-[rgba(59,130,246,0.5)] bg-linear-to-br from-[#2563EB] to-[#1D4ED8]'
        }`}>
          {icon && <div className="text-4xl mb-4">{icon}</div>}
          <p className={`text-xs font-semibold uppercase tracking-widest ${
            isDarkMode ? 'text-[#E7CFA2]' : 'text-white/80'
          }`}>Why it matters</p>
          <h3 className="text-xl font-semibold text-white mt-2 mb-3">{title}</h3>
          <p className="text-sm text-white/90 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureFlipCard;
