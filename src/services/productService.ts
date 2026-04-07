import apiClient from './apiClient';
import { Product, ApiResponse, PaginatedResponse, PaginationParams } from '@/types';

/**
 * Service for fetching product listings and details.
 */
export const productService = {
  /**
   * Fetches products with pagination and filtering.
   * @param params - Pagination and filter parameters
   * @returns Paginated response with products
   */
  async getProducts(params?: PaginationParams & { category?: string; search?: string }): Promise<PaginatedResponse<Product>> {
    const { data } = await apiClient.get<PaginatedResponse<Product>>('/products', { params });
    return data;
  },

  /**
   * Fetches a single product by ID.
   * @param id - The unique ID of the product
   * @returns Product object or null if not found
   */
  async getProductById(id: string): Promise<Product | null> {
    try {
      const response = await apiClient.get<ApiResponse<Product>>(`/products/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(`Failed to fetch product with ID ${id}`, error);
      return null;
    }
  },

  /**
   * Search products by query
   * @param query - Search query string
   * @param params - Additional pagination parameters
   * @returns Paginated response with search results
   */
  async searchProducts(query: string, params?: PaginationParams): Promise<PaginatedResponse<Product>> {
    return this.getProducts({ ...params, search: query });
  },

  /**
   * Get products by category
   * @param category - Category name or slug
   * @param params - Additional pagination parameters
   * @returns Paginated response with category products
   */
  async getProductsByCategory(category: string, params?: PaginationParams): Promise<PaginatedResponse<Product>> {
    return this.getProducts({ ...params, category });
  },
};
