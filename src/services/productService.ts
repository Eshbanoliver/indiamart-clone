import apiClient from './apiClient';
import { Product } from '@/types/product';

/**
 * Service for fetching product listings and details.
 */
export const productService = {
  /**
   * Fetches the products from the marketplace.
   * @param category (optional) - The category to filter by
   * @returns Array of Product objects
   */
  async getProducts(category?: string): Promise<Product[]> {
    const params = category ? { category } : {};
    const { data } = await apiClient.get<Product[]>('/products', { params });
    return data;
  },

  /**
   * Fetches a single product by ID.
   * @param id - The unique ID of the product
   * @returns Product object or null if not found
   */
  async getProductById(id: string): Promise<Product | null> {
    try {
      const { data } = await apiClient.get<Product>(`/products/${id}`);
      return data;
    } catch (error) {
      console.error(`Failed to fetch product with ID ${id}`, error);
      return null;
    }
  },
};
