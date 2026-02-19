import { apiClient } from './apiClient';

export const getHouses = async () => apiClient('/houses');

export const getHouseBySlug = async (slug) => apiClient(`/houses/${slug}`);

export const getHousePackagesBySlug = async (slug) => apiClient(`/houses/${slug}/packages`);

export const getUnavailableDatesBySlug = async (slug) => apiClient(`/houses/${slug}/unavailable-dates`);

export default {
  getHouses,
  getHouseBySlug,
  getHousePackagesBySlug,
  getUnavailableDatesBySlug,
};
