/**
 * API Service Layer
 * Central place for all API calls - ready for backend integration
 * 
 * When you connect to backend:
 * 1. Replace BASE_URL with your actual API endpoint
 * 2. Remove mock data returns
 * 3. Implement actual fetch/axios calls
 */

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Generic API request handler
const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request Failed:', error);
    throw error;
  }
};

// Tours API
export const toursAPI = {
  // Get all tours
  getAll: async (filters = {}) => {
    // TODO: Replace with actual API call
    // return apiRequest('/tours', { method: 'GET' });
    const { toursData } = await import('../data/toursData');
    return Promise.resolve(toursData);
  },

  // Get single tour by ID
  getById: async (id) => {
    // TODO: Replace with actual API call
    // return apiRequest(`/tours/${id}`);
    const { toursData } = await import('../data/toursData');
    return Promise.resolve(toursData.find(tour => tour.id === id));
  },

  // Get tours by category
  getByCategory: async (category) => {
    // TODO: Replace with actual API call
    // return apiRequest(`/tours/category/${category}`);
    const { toursData } = await import('../data/toursData');
    return Promise.resolve(toursData.filter(tour => tour.category === category));
  },
};

// Stays API
export const staysAPI = {
  // Get all stays
  getAll: async () => {
    // TODO: Replace with actual API call
    const { staysData } = await import('../data/staysData');
    return Promise.resolve(staysData);
  },

  // Get single stay by slug
  getBySlug: async (slug) => {
    // TODO: Replace with actual API call
    const { staysData } = await import('../data/staysData');
    return Promise.resolve(staysData.find(stay => stay.slug === slug));
  },
};

// Gallery API
export const galleryAPI = {
  // Get all photos
  getAll: async (filters = {}) => {
    // TODO: Replace with actual API call
    const { galleryData } = await import('../data/galleryData');
    return Promise.resolve(galleryData);
  },
};

// Reviews API
export const reviewsAPI = {
  // Get all reviews
  getAll: async (filters = {}) => {
    // TODO: Replace with actual API call
    // return apiRequest('/reviews');
    return Promise.resolve([]);
  },

  // Submit new review
  submit: async (reviewData) => {
    // TODO: Replace with actual API call
    // return apiRequest('/reviews', { method: 'POST', body: JSON.stringify(reviewData) });
    console.log('Review submitted:', reviewData);
    return Promise.resolve({ success: true });
  },
};

// Bookings API
export const bookingsAPI = {
  // Create new booking
  create: async (bookingData) => {
    // TODO: Replace with actual API call
    // return apiRequest('/bookings', { method: 'POST', body: JSON.stringify(bookingData) });
    console.log('Booking created:', bookingData);
    return Promise.resolve({ 
      success: true, 
      bookingId: `BK-${Date.now()}`,
      message: 'Booking received! We will contact you shortly.' 
    });
  },

  // Get booking by ID
  getById: async (bookingId) => {
    // TODO: Replace with actual API call
    // return apiRequest(`/bookings/${bookingId}`);
    return Promise.resolve(null);
  },
};

// Contact API
export const contactAPI = {
  // Send contact form
  sendMessage: async (contactData) => {
    // TODO: Replace with actual API call
    // return apiRequest('/contact', { method: 'POST', body: JSON.stringify(contactData) });
    console.log('Contact message sent:', contactData);
    return Promise.resolve({ 
      success: true, 
      message: 'Thank you! We will get back to you soon.' 
    });
  },
};

// Custom Tour Builder API
export const customTourAPI = {
  // Submit custom tour request
  submit: async (tourData) => {
    // TODO: Replace with actual API call
    // return apiRequest('/custom-tours', { method: 'POST', body: JSON.stringify(tourData) });
    console.log('Custom tour request:', tourData);
    return Promise.resolve({ 
      success: true, 
      requestId: `CT-${Date.now()}`,
      estimatedPrice: calculateEstimatedPrice(tourData),
      message: 'Request received! Our team will create a custom itinerary for you.' 
    });
  },
};

// Helper function for price calculation (will be moved to backend)
const calculateEstimatedPrice = (tourData) => {
  let basePrice = 500;
  
  if (tourData.duration) basePrice += parseInt(tourData.duration) * 100;
  if (tourData.groupSize) basePrice += parseInt(tourData.groupSize) * 50;
  if (tourData.accommodation === 'luxury') basePrice += 300;
  if (tourData.accommodation === 'premium') basePrice += 150;
  if (tourData.transportation === 'private') basePrice += 200;
  if (tourData.meals === 'all-inclusive') basePrice += 100;
  
  return basePrice;
};

export default {
  tours: toursAPI,
  stays: staysAPI,
  gallery: galleryAPI,
  reviews: reviewsAPI,
  bookings: bookingsAPI,
  contact: contactAPI,
  customTour: customTourAPI,
};
