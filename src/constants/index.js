/**
 * Centralized Constants for Tiny Escape
 * Single source of truth for shared data across the application
 */

// Navigation Links
export const QUICK_LINKS = [
  { name: 'Stays', path: '/tours' },
  { name: 'Experiences', path: '/destinations' },
  { name: 'Special Offers', path: '/offers' },
  { name: 'Contact', path: '/contact' }
];

// Popular Destinations
export const POPULAR_DESTINATIONS = [
  { name: 'Apple 1: Razoo Creek', slug: 'apple-1-razoo-creek' },
  { name: 'Apple 2: Kona Meadows', slug: 'apple-2-kona-meadows' },
  { name: 'Triangle 1: Catalina Ridge', slug: 'triangle-1-catalina-ridge' },
  { name: 'Triangle 2: Rani Ridge', slug: 'triangle-2-rani-ridge' }
];

// Contact Information
export const CONTACT_INFO = {
  email: 'hello@tinyescape.com',
  phone: '+1 (512) 555-0189',
  location: 'Texas Hill Country'
};

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/tinyescape',
  instagram: 'https://instagram.com/tinyescape',
  twitter: 'https://twitter.com/tinyescape',
  whatsapp: '+15125550189'
};

// Company Information
export const COMPANY_INFO = {
  name: 'The Tiny Escape',
  tagline: 'Design-forward tiny homes with wide open skies',
  description: 'A calm, curated collection of tiny stays designed for rest and reset.',
  website: 'https://tinyescape.com',
  copyright: '© 2026 The Tiny Escape. All rights reserved.',
  poweredBy: {
    name: 'Zentredge',
    url: 'https://zentredge.com'
  }
};

// Legal Links
export const LEGAL_LINKS = [
  { name: 'Terms & Conditions', path: '/terms-conditions' },
  { name: 'Privacy Policy', path: '/privacy-policy' }
];

// Tour Categories
export const TOUR_CATEGORIES = [
  {
    id: 'family',
    name: 'Family Packages',
    path: '/trip/family',
    description: 'Perfect adventures for families with children'
  },
  {
    id: 'romantic',
    name: 'Romantic Stays',
    path: '/trip/romantic',
    description: 'Romantic escapes designed for slow mornings'
  },
  {
    id: 'adventure',
    name: 'Adventure Tours',
    path: '/trip/adventure',
    description: 'Thrilling experiences for adrenaline seekers'
  },
  {
    id: 'corporate',
    name: 'Corporate Tours',
    path: '/trip/corporate',
    description: 'Team building and corporate retreats'
  },
  {
    id: 'budget',
    name: 'Budget Tours',
    path: '/trip/budget',
    description: 'Affordable adventures without compromising quality'
  }
];

// Service Categories
export const SERVICE_CATEGORIES = [
  { id: 'hotels', name: 'Hotel Booking', path: '/services/hotels' },
  { id: 'transport', name: 'Transport Services', path: '/services/transport' },
  { id: 'insurance', name: 'Travel Insurance', path: '/services/insurance' },
  { id: 'photography', name: 'Photography Services', path: '/services/photography' }
];

// Theme Configuration
export const THEME_CONFIG = {
  dark: {
    bg: 'bg-gradient-to-b from-[#0B0C0E] to-[#15110D]',
    text: 'text-[#F2E6D3]',
    primary: 'text-[#C9A36A]',
    secondary: 'text-[#BFAE95]',
    border: 'border-[rgba(201,163,106,0.25)]'
  },
  light: {
    bg: 'bg-gradient-to-b from-[#FFF9F1] to-[#F7F0E6]',
    text: 'text-[#2E2117]',
    primary: 'text-[#8A6B45]',
    secondary: 'text-[#6B5B4B]',
    border: 'border-[rgba(201,163,106,0.25)]'
  }
};

// API Endpoints (if needed in future)
export const API_ENDPOINTS = {
  tours: '/api/tours',
  destinations: '/api/destinations',
  bookings: '/api/bookings',
  contact: '/api/contact'
};

// Default export for convenience
export default {
  QUICK_LINKS,
  POPULAR_DESTINATIONS,
  CONTACT_INFO,
  SOCIAL_LINKS,
  COMPANY_INFO,
  LEGAL_LINKS,
  TOUR_CATEGORIES,
  SERVICE_CATEGORIES,
  THEME_CONFIG,
  API_ENDPOINTS
};
