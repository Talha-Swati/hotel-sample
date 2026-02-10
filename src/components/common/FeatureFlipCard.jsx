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
              : 'border-[rgba(20,52,30,0.45)] bg-linear-to-br from-[#153522] via-[#1F3A2A] to-[#2F5D3A] hover:border-[rgba(20,52,30,0.7)] hover:shadow-[0_26px_34px_-20px_rgba(20,52,30,0.4)]'
          }`}
        >
          <div className={`absolute inset-x-6 top-6 h-px ${
            isDarkMode ? 'bg-linear-to-r from-transparent via-[rgba(201,163,106,0.5)] to-transparent' : 'bg-linear-to-r from-transparent via-[rgba(47,93,58,0.35)] to-transparent'
          }`} />
          {icon && <div className="text-5xl mb-4">{icon}</div>}
          <p className={`text-xs font-semibold uppercase tracking-widest ${
            isDarkMode ? 'text-[#C9A36A]' : 'text-[#EAF3EA]'
          }`}>Signature</p>
          <h3 className={`text-2xl font-semibold mt-2 ${
            isDarkMode ? 'text-[#F2EEE7]' : 'text-[#F7FBF7]'
          }`}>{title}</h3>
          <p className={`text-xs mt-3 uppercase tracking-wider ${
            isDarkMode ? 'text-[#A79C8C]' : 'text-[#CFE3CF]'
          }`}>Tap to view details</p>
          <div className={`absolute inset-x-6 bottom-6 h-px ${
            isDarkMode ? 'bg-linear-to-r from-transparent via-[rgba(201,163,106,0.35)] to-transparent' : 'bg-linear-to-r from-transparent via-[rgba(234,243,234,0.4)] to-transparent'
          }`} />
        </div>

        {/* Back */}
        <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden border p-8 flex flex-col items-center justify-center text-center shadow-xl ${
          isDarkMode
            ? 'border-[rgba(201,163,106,0.4)] bg-linear-to-br from-[#2B2017] via-[#17120D] to-[#0F0D0A]'
            : 'border-[rgba(47,93,58,0.3)] bg-linear-to-br from-[#F7FBF7] via-[#EEF6EE] to-[#E4F1E4]'
        }`}>
          {icon && <div className="text-4xl mb-4">{icon}</div>}
          <p className={`text-xs font-semibold uppercase tracking-widest ${
            isDarkMode ? 'text-[#E7CFA2]' : 'text-[#2F5D3A]'
          }`}>Why it matters</p>
          <h3 className={`text-xl font-semibold mt-2 mb-3 ${
            isDarkMode ? 'text-white' : 'text-[#1B2A1B]'
          }`}>{title}</h3>
          <p className={`text-sm leading-relaxed ${
            isDarkMode ? 'text-white/90' : 'text-[#3E4F3E]'
          }`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureFlipCard;
