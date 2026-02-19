import { apiClient } from './apiClient';

export const checkBookingAvailability = async (payload) =>
  apiClient('/bookings/check-availability', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

export const createBookingRequest = async (payload) =>
  apiClient('/bookings', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

export const getBookingById = async (bookingId) => apiClient(`/bookings/${bookingId}`);

export default {
  checkBookingAvailability,
  createBookingRequest,
  getBookingById,
};
