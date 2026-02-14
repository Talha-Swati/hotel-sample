import React, { memo, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import FlipCard from '../common/FlipCard';
import tinyEscape2 from '../../assets/Pavilion images/tiny escape 2.jpg';
import tinyEscape3 from '../../assets/tiny escape 3.jpg';
import tinyEscape5 from '../../assets/tiny escape 5.jpg';
import tinyEscape7 from '../../assets/tiny escape 7.jpeg';

const FeaturedTours = ({ isDarkMode }) => {
  const toursPath = '/tours';
  const [isMobile, setIsMobile] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const updateMobileState = () => setIsMobile(media.matches);
    updateMobileState();
    media.addEventListener('change', updateMobileState);
    return () => media.removeEventListener('change', updateMobileState);
  }, []);

  // Memoize tours data to prevent recreation on every render
  const tours = useMemo(() => [
    {
      frontImage: tinyEscape3,
      title: "Catalina Ridge",
      subtitle: "A-Frame Cabin • Panoramic windows",
      price: "A-Frame",
      description: "Warm wood interiors, panoramic windows, and a private deck invite you to slow down and soak in the beauty around you.",
      highlights: [
        'Stylish interiors with modern amenities',
        'Kitchenette with essentials',
        'Heating + AC',
        'Outdoor seating with grill',
        'Smart self check-in locks'
      ],
      link: '/destination/triangle-1-catalina-ridge'
    },
    {
      frontImage: tinyEscape5,
      title: "Rani Ridge",
      subtitle: "A-Frame Cabin • Cozy retreat",
      price: "A-Frame",
      description: "A peaceful A-Frame stay designed for couples and small families looking to reset and reconnect.",
      highlights: [
        'Plush bedding and linens',
        'Smart TV and Govee lights',
        'Complimentary coffee + water',
        'Modern private bath',
        'Back patio seating'
      ],
      link: '/destination/triangle-2-rani-ridge'
    },
    {
      frontImage: tinyEscape7,
      title: "Kona Meadow",
      subtitle: "Apple Home • Sleek and sustainable",
      price: "Apple Home",
      description: "Innovative tiny-home design blending eco-conscious living with comfort and style.",
      highlights: [
        'Sleek, sustainable layout',
        'Kitchenette essentials',
        'Smart lock entry',
        'Heating + AC',
        'Outdoor grill and patio'
      ],
      link: '/destination/apple-2-kona-meadows'
    }
  ], []);

  return (
    <section className={`relative py-16 md:py-24 lg:py-32 overflow-hidden transition-colors duration-500 ${
      isDarkMode
        ? 'bg-linear-to-b from-[#0F0D0A] via-[#171310] to-[#0F0D0A]'
        : 'bg-linear-to-b from-[#FAF7F0] via-[#E9F1E5] to-[#FAF7F0]'
    }`}>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-20">
          <div className={`inline-flex items-center gap-2 mb-5 sm:mb-6 rounded-full border backdrop-blur-sm px-4 sm:px-6 py-2.5 sm:py-3 transition-colors duration-500 ${
            isDarkMode
              ? 'border-[rgba(201,163,106,0.35)] bg-[rgba(26,22,18,0.7)] shadow-[0_0_30px_rgba(201,163,106,0.18)]'
              : 'border-[rgba(31,58,42,0.28)] bg-[rgba(250,247,240,0.75)] shadow-[0_0_30px_rgba(31,58,42,0.16)]'
          }`}>
            <div className={`h-2 w-2 rounded-full animate-pulse ${
              isDarkMode ? 'bg-[#C9A36A]' : 'bg-[#1F3A2A]'
            }`} />
            <span className={`text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-500 ${
              isDarkMode ? 'text-[#C9A36A]' : 'text-[#1F3A2A]'
            }`}>Our Stays</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 leading-tight">
            <Link to={toursPath} className={`group inline-block transition-colors ${
              isDarkMode ? 'hover:text-[#C9A36A]' : 'hover:text-[#1F3A2A]'
            }`}>
              <span className={`transition-colors duration-500 ${
                isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1F2A1F]'
              }`}>Featured </span>
              <span className={`bg-clip-text text-transparent transition-colors duration-500 ${
                isDarkMode
                  ? 'bg-linear-to-r from-[#C9A36A] via-[#E7CFA2] to-[#C9A36A]'
                  : 'bg-linear-to-r from-[#1F3A2A] via-[#5F8C6A] to-[#1F3A2A]'
              }`}>
                Stays
              </span>
              <div className={`h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full mt-2 ${
                isDarkMode
                  ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2]'
                  : 'bg-linear-to-r from-[#1F3A2A] to-[#5F8C6A]'
              }`} />
            </Link>
          </h2>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
            isDarkMode ? 'text-[#A79C8C]' : 'text-[#3E4F3E]'
          }`}>
            Tiny in size, big on experience. Explore our A-Frame cabins and Apple Homes designed for comfort, style, and slow living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1px] sm:gap-3 md:gap-6">
          {tours.map((tour, index) => (
            <FlipCard
              key={index}
              isDarkMode={isDarkMode}
              isMobile={isMobile}
              isExpanded={expandedCard === index}
              onToggle={() => setExpandedCard((prev) => (prev === index ? null : index))}
              {...tour}
            />
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link to={toursPath}>
            <button className={`group rounded-xl border-2 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
              isDarkMode
                ? 'border-[rgba(201,163,106,0.45)] bg-[rgba(26,22,18,0.7)] text-[#F2EEE7] hover:border-[#C9A36A] hover:bg-[rgba(201,163,106,0.12)]'
                : 'border-[#D4E2D4] bg-[rgba(255,255,255,0.92)] text-[#1F2A1F] hover:border-[#1F3A2A] hover:bg-[rgba(31,58,42,0.08)]'
            }`}>
              <span className="flex items-center gap-2">
                View All Stays
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturedTours);
