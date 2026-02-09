/**
 * Application Configuration
 * Central place for all environment variables and app settings
 * 
 * To use different environments:
 * 1. Create .env.development, .env.production files
 * 2. Set VITE_API_URL, VITE_SITE_URL, etc.
 */

export const config = {
  // API Configuration
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    timeout: 10000, // 10 seconds
  },

  // Site Configuration
  site: {
    name: 'PakTourZone',
    url: import.meta.env.VITE_SITE_URL || 'https://paktourzone.com',
    tagline: 'Pakistan Tours for Overseas Travelers',
    email: 'info@paktourzone.com',
    phone: '+92 300 1234567',
    whatsapp: '+92 300 1234567',
  },

  // Social Media Links
  social: {
    facebook: 'https://facebook.com/paktourzone',
    instagram: 'https://instagram.com/paktourzone',
    twitter: 'https://twitter.com/paktourzone',
    youtube: 'https://youtube.com/@paktourzone',
  },

  // SEO Defaults
  seo: {
    defaultTitle: 'PakTourZone - Discover Northern Pakistan',
    defaultDescription: 'Plan safe, comfortable Pakistan tours for overseas visitors. Transparent USD pricing, local experts, and curated itineraries across Northern Areas and Kashmir.',
    defaultKeywords: 'Pakistan tourism, Pakistan tours for international travelers, Pakistan tour packages, Northern Areas tours, Hunza Valley, Skardu tours',
    defaultImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
  },

  // Feature Flags (for gradual rollout of new features)
  features: {
    enableOnlineBooking: import.meta.env.VITE_ENABLE_BOOKING === 'true' || false,
    enablePayments: import.meta.env.VITE_ENABLE_PAYMENTS === 'true' || false,
    enableReviews: true,
    enableChat: false,
  },

  // Google Analytics / Tracking
  analytics: {
    googleAnalyticsId: import.meta.env.VITE_GA_ID || '',
    facebookPixelId: import.meta.env.VITE_FB_PIXEL_ID || '',
  },

  // Map Configuration
  maps: {
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY || '',
    defaultCenter: { lat: 35.8819, lng: 74.5246 }, // Gilgit
    defaultZoom: 8,
  },

  // Pricing & Currency
  pricing: {
    currency: 'USD',
    currencySymbol: '$',
    locale: 'en-US',
  },

  // Image CDN (for future optimization)
  cdn: {
    baseUrl: import.meta.env.VITE_CDN_URL || '',
  },
};

export default config;
