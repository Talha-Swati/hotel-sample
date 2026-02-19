const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || 'http://localhost:5000';

const normalizePath = (path) => {
  if (!path) return '';
  return path.startsWith('/') ? path : `/${path}`;
};

export const apiClient = async (path, options = {}) => {
  const url = `${API_BASE_URL}/api${normalizePath(path)}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch (_error) {
    payload = null;
  }

  if (!response.ok) {
    const message = payload?.message || `Request failed with status ${response.status}`;
    const error = new Error(message);
    error.status = response.status;
    error.payload = payload;
    throw error;
  }

  return payload;
};

export const getApiBaseUrl = () => API_BASE_URL;
