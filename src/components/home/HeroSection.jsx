import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ isDarkMode, videoSrc }) => {
  const [typedIndex, setTypedIndex] = useState(0);
  const fullText = 'The Tiny Escape';
  const words = fullText.split(' ');

  useEffect(() => {
    if (typedIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [typedIndex]);

  const renderText = () => {
    let charCount = 0;
    return words.map((word, wordIndex) => {
      const wordChars = word.split('').map((char, charIndex) => {
        const currentIndex = charCount;
        charCount++;
        const isTyped = currentIndex < typedIndex;
        const isCurrentlyTyping = currentIndex === typedIndex;

        return (
          <span
            key={`${wordIndex}-${charIndex}`}
            className={`inline-block transition-all duration-300 ${
              isTyped
                ? 'opacity-100 blur-0'
                : 'opacity-70 blur-[1px] sm:opacity-30 sm:blur-[2px]'
            }`}
          >
            {char}
            {isCurrentlyTyping && <span className="animate-pulse">|</span>}
          </span>
        );
      });

      charCount++; // for space

     if (wordIndex === 1) {
  return (
    <React.Fragment key={wordIndex}>
      <span className="text-[#A8E6A3]">
        {wordChars}
      </span>
      <br />
    </React.Fragment>
  );
}


      return (
        <React.Fragment key={wordIndex}>
          {wordChars}
          {wordIndex < words.length - 1 && (
            <span className={typedIndex > charCount - 1 ? 'opacity-100' : 'opacity-30'}>
              {' '}
            </span>
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ✅ Video Background (replaces slider) */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
   {/* Primary dark overlay (lighter opacity for better video visibility) */}
<div
  className={`absolute inset-0 transition-colors duration-500 ${
    isDarkMode
      ? 'bg-linear-to-br from-[rgba(10,10,10,0.55)] via-[rgba(20,18,16,0.45)] to-[rgba(8,8,8,0.6)]'
      : 'bg-linear-to-br from-[rgba(0,0,0,0.45)] via-[rgba(0,0,0,0.35)] to-[rgba(0,0,0,0.5)]'
  }`}
/>

{/* Bottom fade for text contrast */}
<div
  className={`absolute inset-0 transition-colors duration-500 ${
    isDarkMode
      ? 'bg-linear-to-t from-[rgba(0,0,0,0.65)] via-transparent to-transparent'
      : 'bg-linear-to-t from-[rgba(0,0,0,0.55)] via-transparent to-transparent'
  }`}
/>


      {/* Orbs (kept same) */}
      <div className="absolute inset-0 mix-blend-screen">
        <div className={`hero-orb hero-orb-1 ${isDarkMode ? 'bg-[#C9A36A]' : 'bg-[#5F8C6A]'}`} />
        <div className={`hero-orb hero-orb-2 ${isDarkMode ? 'bg-[#E7CFA2]' : 'bg-[#BFD8B8]'}`} />
        <div className={`hero-orb hero-orb-3 ${isDarkMode ? 'bg-[#7B5A3A]' : 'bg-[#2F5D3A]'}`} />
      </div>

      {/* ✅ Hero Content stays ON TOP (unchanged) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center reveal">

        {/* Premium Badge */}
                <div className="mb-8 flex justify-center reveal-delay-1">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-colors duration-500 ${
              isDarkMode
                ? 'border-[rgba(201,163,106,0.35)] bg-[rgba(26,22,18,0.7)] text-[#C9A36A]'
                : 'border-[rgba(31,58,42,0.35)] bg-[rgba(250,247,240,0.85)] text-[#1F3A2A]'
            }`}
          >
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Signature Tiny Homes
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="mb-6 text-3xl font-bold tracking-normal sm:text-4xl md:text-6xl lg:text-7xl text-white reveal-delay-2"

          style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.02em' }}
        >
          {renderText()}
        </h1>

        {/* Subtitle */}
        <p
        className="mx-auto mb-12 max-w-2xl text-lg font-medium sm:text-xl md:text-2xl }
        text-white/85 reveal-delay-3"

        >
          Quiet, design-forward tiny homes with wide open skies, private decks, and easy self check-in. Slow down and reset in nature.
        </p>

        {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center reveal-delay-4">
                <Link
            to="/tours"
            className={`group flex items-center gap-3 rounded-2xl bg-linear-to-r px-8 py-4 text-base font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? 'from-[#C9A36A] to-[#E7CFA2] text-[#1A120A] shadow-[0_0_30px_rgba(201,163,106,0.35)] hover:shadow-[0_0_50px_rgba(231,207,162,0.45)]'
                : 'from-[#1F3A2A] to-[#5F8C6A] text-[#F7FBF7] shadow-[0_0_30px_rgba(31,58,42,0.35)] hover:shadow-[0_0_50px_rgba(95,140,106,0.45)]'
            }`}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Explore Stays
          </Link>

          <Link
            to="/gallery"
            className={`flex items-center gap-3 rounded-2xl border-2 px-8 py-4 text-base font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? 'border-[#C9A36A] bg-[rgba(26,22,18,0.7)] text-[#C9A36A] hover:bg-[rgba(201,163,106,0.12)]'
                : 'border-[#1F3A2A] bg-[rgba(250,247,240,0.85)] text-[#1F3A2A] hover:bg-[rgba(31,58,42,0.12)]'
            }`}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            View Gallery
          </Link>
        </div>

    
      </div>
    </section>
  );
};

export default memo(HeroSection);
