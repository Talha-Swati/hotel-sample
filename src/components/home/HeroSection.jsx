import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ isDarkMode, videoSrc }) => {
  const staysPath = '/tours';
  const requestPath = '/book-now';
  const [videoReady, setVideoReady] = useState(false);

  const handleLoadedMetadata = (event) => {
    const videoElement = event.currentTarget;
    try {
      if (videoElement.currentTime < 0.25) {
        videoElement.currentTime = 0.25;
      }
    } catch {
      return;
    }
  };

  return (
    <section className="relative min-h-[calc(100svh-72px)] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          className={`absolute inset-0 h-full w-full object-cover object-[58%_center] scale-[1.22] sm:scale-[1.12] md:scale-100 transition-opacity duration-500 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          onCanPlay={() => setVideoReady(true)}
          onPlaying={() => setVideoReady(true)}
        />
      </div>

      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDarkMode
            ? 'bg-linear-to-b from-[rgba(0,0,0,0.62)] via-[rgba(0,0,0,0.42)] to-[rgba(0,0,0,0.72)]'
            : 'bg-linear-to-b from-[rgba(0,0,0,0.52)] via-[rgba(0,0,0,0.34)] to-[rgba(0,0,0,0.6)]'
        }`}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 md:py-32 text-center reveal">

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
            Welcome to The Tiny Escape
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="mb-6 text-3xl font-bold tracking-normal sm:text-4xl md:text-6xl lg:text-7xl text-white reveal-delay-2"
          style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.02em' }}
        >
          The{' '}
          <span className="text-[#A8E6A3]">Tiny</span>
          <br />
          Escape
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mb-10 sm:mb-12 max-w-2xl text-base sm:text-lg md:text-2xl font-medium text-white/85 reveal-delay-3"
        >
          Unplug. Unwind. Reconnect. Nestled in nature and thoughtfully designed for modern comfort, our tiny homes are made for weekend retreats, romantic escapes, and digital detox stays.
        </p>

        {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center reveal-delay-4">
                <Link
            to={staysPath}
            className={`group flex items-center gap-3 rounded-2xl bg-linear-to-r px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 hover:scale-105 ${
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
            to={requestPath}
            className={`flex items-center gap-3 rounded-2xl border-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? 'border-[#C9A36A] bg-[rgba(26,22,18,0.7)] text-[#C9A36A] hover:bg-[rgba(201,163,106,0.12)]'
                : 'border-[#1F3A2A] bg-[rgba(250,247,240,0.85)] text-[#1F3A2A] hover:bg-[rgba(31,58,42,0.12)]'
            }`}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Check Availability
          </Link>
        </div>

    
      </div>
    </section>
  );
};

export default memo(HeroSection);
