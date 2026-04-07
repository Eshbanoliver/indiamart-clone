import { UseQueryOptions, UseMutationOptions, useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '@/services/productService';
import { Product, PaginatedResponse, PaginationParams } from '@/types';

// Query keys for React Query
export const queryKeys = {
  products: ['products'] as const,
  product: (id: string) => ['products', id] as const,
  searchProducts: (query: string) => ['products', 'search', query] as const,
  categoryProducts: (category: string) => ['products', 'category', category] as const,
};

/**
 * Hook for fetching products with pagination and filtering
 */
export function useProducts(params?: PaginationParams & { category?: string; search?: string }, options?: UseQueryOptions<PaginatedResponse<Product>>) {
  return useQuery({
    queryKey: [...queryKeys.products, params],
    queryFn: () => productService.getProducts(params),
    staleTime: 60 * 1000, // 1 minute
    ...options,
  });
}

/**
 * Hook for fetching a single product by ID
 */
export function useProduct(id: string, options?: UseQueryOptions<Product | null>) {
  return useQuery({
    queryKey: queryKeys.product(id),
    queryFn: () => productService.getProductById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options,
  });
}

/**
 * Hook for searching products
 */
export function useSearchProducts(query: string, params?: PaginationParams, options?: UseQueryOptions<PaginatedResponse<Product>>) {
  return useQuery({
    queryKey: [...queryKeys.searchProducts(query), params],
    queryFn: () => productService.searchProducts(query, params),
    enabled: !!query && query.length >= 2,
    staleTime: 30 * 1000, // 30 seconds
    ...options,
  });
}

/**
 * Hook for fetching products by category
 */
export function useCategoryProducts(category: string, params?: PaginationParams, options?: UseQueryOptions<PaginatedResponse<Product>>) {
  return useQuery({
    queryKey: [...queryKeys.categoryProducts(category), params],
    queryFn: () => productService.getProductsByCategory(category, params),
    enabled: !!category,
    staleTime: 60 * 1000, // 1 minute
    ...options,
  });
}

/**
 * Hook for invalidating product queries (useful after mutations)
 */
export function useInvalidateProducts() {
  const queryClient = useQueryClient();
  
  return {
    invalidateAll: () => queryClient.invalidateQueries({ queryKey: queryKeys.products }),
    invalidateProduct: (id: string) => queryClient.invalidateQueries({ queryKey: queryKeys.product(id) }),
    invalidateSearch: (query: string) => queryClient.invalidateQueries({ queryKey: queryKeys.searchProducts(query) }),
    invalidateCategory: (category: string) => queryClient.invalidateQueries({ queryKey: queryKeys.categoryProducts(category) }),
  };
}
