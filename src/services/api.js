/**
 * API Service Layer
 * Central place for all API calls - ready for backend integration
 * 
 * When you connect to backend:
 * 1. Replace BASE_URL with your actual API endpoint
 * 2. Remove mock data returns
 * 3. Implement actual fetch/axios calls
 */

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Generic API request handler
export const apiRequest = async (endpoint, options = {}) => {
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
  getAll: async () => {
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

// Houses API (backend-integrated)
export const housesAPI = {
  getAll: async () => apiRequest('/houses', { method: 'GET' }),

  getBySlug: async (slug) => apiRequest(`/houses/${slug}`, { method: 'GET' }),

  getPackagesBySlug: async (slug) => apiRequest(`/houses/${slug}/packages`, { method: 'GET' }),

  getUnavailableDates: async (slug) => apiRequest(`/houses/${slug}/unavailable-dates`, { method: 'GET' }),
};

// Gallery API
export const galleryAPI = {
  // Get all photos
  getAll: async () => {
    // TODO: Replace with actual API call
    const { galleryData } = await import('../data/galleryData');
    return Promise.resolve(galleryData);
  },
};

// Reviews API
export const reviewsAPI = {
  // Get all reviews
  getAll: async () => {
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
  checkAvailability: async (payload) =>
    apiRequest('/bookings/check-availability', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  // Create new booking
  create: async (bookingData) => {
    return apiRequest('/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
  },

  // Get booking by ID
  getById: async (bookingId) => apiRequest(`/bookings/${bookingId}`, { method: 'GET' }),
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

// Custom Stay Request API
export const customTourAPI = {
  // Submit custom stay request
  submit: async (tourData) => {
    // TODO: Replace with actual API call
    // return apiRequest('/custom-stays', { method: 'POST', body: JSON.stringify(tourData) });
    console.log('Custom stay request:', tourData);
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
  houses: housesAPI,
  gallery: galleryAPI,
  reviews: reviewsAPI,
  bookings: bookingsAPI,
  contact: contactAPI,
  customTour: customTourAPI,
};
