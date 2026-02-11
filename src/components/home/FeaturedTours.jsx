import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import FlipCard from '../common/FlipCard';
import tinyHouse1 from '../../assets/tiny house1.webp';
import tinyEscape2 from '../../assets/tiny escape 2.jpg';
import tinyEscape3 from '../../assets/tiny escape 3.jpg';
import tinyEscape4 from '../../assets/tiny escape 4.jpg';

const FeaturedTours = ({ isDarkMode }) => {
  // Memoize tours data to prevent recreation on every render
  const tours = useMemo(() => [
    {
      frontImage: tinyEscape2,
      title: "Razoo Creek",
      subtitle: "Sleeps 2 • Private deck",
      price: "$189/night",
      description: "A quiet couples cabin with hill country views, firepit seating, and a full kitchen for slow mornings.",
      highlights: [
        "Panoramic sunset view",
        "Private firepit",
        "King bed + loft",
        "Outdoor shower",
        "Self check-in"
      ],
      link: "/destinations/apple-1-razoo-creek"
    },
    {
      frontImage: tinyEscape3,
      title: "Kona Meadows",
      subtitle: "Sleeps 4 • Riverside",
      price: "$239/night",
      description: "Steps from the water with trail access, hammock space, and an open-plan living area for family stays.",
      highlights: [
        "Creek access",
        "Covered porch",
        "Two queen beds",
        "Outdoor grill",
        "Pet friendly"
      ],
      link: "/destinations/apple-2-kona-meadows"
    },
    {
      frontImage: tinyEscape4,
      title: "Catalina Ridge",
      subtitle: "Sleeps 2-3 • Design-forward",
      price: "$169/night",
      description: "Minimalist tiny home with vaulted ceilings, indoor-outdoor living, and a dedicated workspace.",
      highlights: [
        "Floor-to-ceiling glass",
        "Coffee bar",
        "Fast Wi-Fi",
        "Stargazing deck",
        "EV outlet"
      ],
      link: "/destinations/triangle-1-catalina-ridge"
    }
  ], []); // No dependencies needed now

  return (
    <section className={`relative py-32 overflow-hidden transition-colors duration-500 ${
      isDarkMode
        ? 'bg-linear-to-b from-[#0F0D0A] via-[#171310] to-[#0F0D0A]'
        : 'bg-linear-to-b from-[#FAF7F0] via-[#E9F1E5] to-[#FAF7F0]'
    }`}>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 mb-6 rounded-full border backdrop-blur-sm px-6 py-3 transition-colors duration-500 ${
            isDarkMode
              ? 'border-[rgba(201,163,106,0.35)] bg-[rgba(26,22,18,0.7)] shadow-[0_0_30px_rgba(201,163,106,0.18)]'
              : 'border-[rgba(31,58,42,0.28)] bg-[rgba(250,247,240,0.75)] shadow-[0_0_30px_rgba(31,58,42,0.16)]'
          }`}>
            <div className={`h-2 w-2 rounded-full animate-pulse ${
              isDarkMode ? 'bg-[#C9A36A]' : 'bg-[#1F3A2A]'
            }`} />
            <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-500 ${
              isDarkMode ? 'text-[#C9A36A]' : 'text-[#1F3A2A]'
            }`}>Signature Stays</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <Link to="/tours" className={`group inline-block transition-colors ${
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
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
            isDarkMode ? 'text-[#A79C8C]' : 'text-[#3E4F3E]'
          }`}>
            Handpicked tiny homes for quiet mornings, nature views, and effortless escapes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <FlipCard
              key={index}
              isDarkMode={isDarkMode}
              {...tour}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/tours">
            <button className={`group rounded-xl border-2 backdrop-blur-sm px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
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
