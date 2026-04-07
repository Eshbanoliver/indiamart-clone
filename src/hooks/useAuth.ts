import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { authService, categoryService, supplierService } from '@/services';
import { Category, Supplier, User } from '@/types';

export const authQueryKeys = {
  currentUser: ['auth', 'currentUser'] as const,
};

export const categoryQueryKeys = {
  categories: ['categories'] as const,
  category: (slugOrId: string) => ['categories', slugOrId] as const,
};

export const supplierQueryKeys = {
  suppliers: ['suppliers'] as const,
  supplier: (id: string) => ['suppliers', id] as const,
};

/**
 * Hook for getting current authenticated user
 */
export function useAuth() {
  return useQuery({
    queryKey: authQueryKeys.currentUser,
    queryFn: () => authService.getCurrentUser(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: false,
  });
}

/**
 * Hook for fetching all categories
 */
export function useCategories(options?: UseQueryOptions<Category[]>) {
  return useQuery({
    queryKey: categoryQueryKeys.categories,
    queryFn: () => categoryService.getCategories(),
    staleTime: 10 * 60 * 1000, // 10 minutes
    ...options,
  });
}

/**
 * Hook for fetching a single category
 */
export function useCategory(slugOrId: string, options?: UseQueryOptions<Category | null>) {
  return useQuery({
    queryKey: categoryQueryKeys.category(slugOrId),
    queryFn: () => categoryService.getCategory(slugOrId),
    enabled: !!slugOrId,
    staleTime: 10 * 60 * 1000, // 10 minutes
    ...options,
  });
}

/**
 * Hook for fetching all suppliers
 */
export function useSuppliers(options?: UseQueryOptions<Supplier[]>) {
  return useQuery({
    queryKey: supplierQueryKeys.suppliers,
    queryFn: () => supplierService.getSuppliers(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options,
  });
}

/**
 * Hook for fetching a single supplier
 */
export function useSupplier(id: string, options?: UseQueryOptions<Supplier | null>) {
  return useQuery({
    queryKey: supplierQueryKeys.supplier(id),
    queryFn: () => supplierService.getSupplierById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options,
  });
}
