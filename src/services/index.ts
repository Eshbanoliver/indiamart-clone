import apiClient from './apiClient';
import { ApiResponse, Category, Supplier, User, LoginCredentials, RegisterData, AuthResponse } from '@/types';

/**
 * Service for authentication operations
 */
export const authService = {
  /**
   * Login user with credentials
   * @param credentials - Login credentials
   * @returns Auth response with user and tokens
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/login', credentials);
    return response.data.data;
  },

  /**
   * Register new user
   * @param userData - User registration data
   * @returns Auth response with user and tokens
   */
  async register(userData: RegisterData): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/register', userData);
    return response.data.data;
  },

  /**
   * Logout user (clear tokens)
   */
  async logout(): Promise<void> {
    // In a real app, you might call a logout endpoint
    // For now, just clear local storage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('refresh_token');
    }
  },

  /**
   * Get current user from token
   * @returns User object or null
   */
  async getCurrentUser(): Promise<User | null> {
    try {
      const response = await apiClient.get<ApiResponse<User>>('/auth/me');
      return response.data.data;
    } catch {
      return null;
    }
  },
};

/**
 * Service for category operations
 */
export const categoryService = {
  /**
   * Get all categories
   * @returns Array of categories
   */
  async getCategories(): Promise<Category[]> {
    const response = await apiClient.get<ApiResponse<Category[]>>('/categories');
    return response.data.data;
  },

  /**
   * Get category by slug or ID
   * @param slugOrId - Category slug or ID
   * @returns Category object or null
   */
  async getCategory(slugOrId: string): Promise<Category | null> {
    try {
      const response = await apiClient.get<ApiResponse<Category>>(`/categories/${slugOrId}`);
      return response.data.data;
    } catch {
      return null;
    }
  },
};

/**
 * Service for supplier operations
 */
export const supplierService = {
  /**
   * Get all suppliers
   * @returns Array of suppliers
   */
  async getSuppliers(): Promise<Supplier[]> {
    const response = await apiClient.get<ApiResponse<Supplier[]>>('/suppliers');
    return response.data.data;
  },

  /**
   * Get supplier by ID
   * @param id - Supplier ID
   * @returns Supplier object or null
   */
  async getSupplierById(id: string): Promise<Supplier | null> {
    try {
      const response = await apiClient.get<ApiResponse<Supplier>>(`/suppliers/${id}`);
      return response.data.data;
    } catch {
      return null;
    }
  },
};
