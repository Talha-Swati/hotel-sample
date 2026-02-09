import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import FlipCard from '../common/FlipCard';

const FeaturedTours = ({ isDarkMode }) => {
  // Memoize tours data to prevent recreation on every render
  const tours = useMemo(() => [
    {
      frontImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80",
      title: "Cedar Ridge Cabin",
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
      link: "/destinations/cedar-ridge"
    },
    {
      frontImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      title: "Riverstone Retreat",
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
      link: "/destinations/riverstone-retreat"
    },
    {
      frontImage: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=900&q=80",
      title: "Mesa Loft",
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
      link: "/destinations/mesa-loft"
    }
  ], []); // No dependencies needed now

  return (
    <section className={`relative py-32 overflow-hidden transition-colors duration-500 ${
      isDarkMode
        ? 'bg-linear-to-b from-[#0F0D0A] via-[#171310] to-[#0F0D0A]'
        : 'bg-linear-to-b from-white via-[#F8FAFB] to-white'
    }`}>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 mb-6 rounded-full border backdrop-blur-sm px-6 py-3 transition-colors duration-500 ${
            isDarkMode
              ? 'border-[rgba(201,163,106,0.35)] bg-[rgba(26,22,18,0.7)] shadow-[0_0_30px_rgba(201,163,106,0.18)]'
              : 'border-[rgba(59,130,246,0.3)] bg-[rgba(255,255,255,0.6)] shadow-[0_0_30px_rgba(71,85,105,0.15)]'
          }`}>
            <div className={`h-2 w-2 rounded-full animate-pulse ${
              isDarkMode ? 'bg-[#C9A36A]' : 'bg-[#3B82F6]'
            }`} />
            <span className={`text-sm font-bold uppercase tracking-wider transition-colors duration-500 ${
              isDarkMode ? 'text-[#C9A36A]' : 'text-[#3B82F6]'
            }`}>Signature Stays</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <Link to="/tours" className={`group inline-block transition-colors ${
              isDarkMode ? 'hover:text-[#C9A36A]' : 'hover:text-[#3B82F6]'
            }`}>
              <span className={`transition-colors duration-500 ${
                isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'
              }`}>Featured </span>
              <span className={`bg-clip-text text-transparent transition-colors duration-500 ${
                isDarkMode
                  ? 'bg-linear-to-r from-[#C9A36A] via-[#E7CFA2] to-[#C9A36A]'
                  : 'bg-linear-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6]'
              }`}>
                Stays
              </span>
              <div className={`h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full mt-2 ${
                isDarkMode
                  ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2]'
                  : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
              }`} />
            </Link>
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
            isDarkMode ? 'text-[#A79C8C]' : 'text-[#4A5568]'
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
                : 'border-[#E2E8F0] bg-[rgba(255,255,255,0.9)] text-[#0F172A] hover:border-[#2563EB] hover:bg-[rgba(37,99,235,0.08)]'
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
