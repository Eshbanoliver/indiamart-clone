import axios from 'axios';
import { env } from '@/lib/env';

/**
 * Standard API Client for the application.
 * Handles base URL, common headers, and auth interceptors.
 */
const apiClient = axios.create({
  baseURL: env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Request Interceptor: Attach token if available
apiClient.interceptors.request.use(
  (config) => {
    // In a real app, you might get this from a cookie or localStorage
    const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle global errors (e.g. 401 Unauthorized)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle logout or refresh token logic here
      console.error('Session expired. Please login again.');
      // Clear tokens
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('refresh_token');
        // Redirect to login page
        window.location.href = '/login';
      }
    }
    
    // Log errors in development
    if (env.IS_DEVELOPMENT) {
      console.error('API Error:', error.response?.data || error.message);
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
