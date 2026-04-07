import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { authService } from '@/services';
import { LoginCredentials, RegisterData, AuthResponse } from '@/types';

/**
 * Hook for user login mutation
 */
export function useLogin(options?: UseMutationOptions<AuthResponse, Error, LoginCredentials>) {
  return useMutation({
    mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
    onSuccess: (data) => {
      // Store tokens in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('auth_token', data.token);
        localStorage.setItem('refresh_token', data.refreshToken);
      }
    },
    ...options,
  });
}

/**
 * Hook for user registration mutation
 */
export function useRegister(options?: UseMutationOptions<AuthResponse, Error, RegisterData>) {
  return useMutation({
    mutationFn: (userData: RegisterData) => authService.register(userData),
    onSuccess: (data) => {
      // Store tokens in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('auth_token', data.token);
        localStorage.setItem('refresh_token', data.refreshToken);
      }
    },
    ...options,
  });
}

/**
 * Hook for user logout mutation
 */
export function useLogout(options?: UseMutationOptions<void, Error, void>) {
  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      // Clear any cached queries
      window.location.href = '/login';
    },
    ...options,
  });
}
