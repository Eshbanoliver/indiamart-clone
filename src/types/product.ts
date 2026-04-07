/**
 * Interface representing a product in the Indiamart marketplace.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    category: string;
    imageUrl: string;
    sellerName: string;
    rating: number;
    reviewsCount: number;
    inStock: boolean;
    createdAt?: string;
    updatedAt?: string;
}

/**
 * Filter options for product listings.
 */
export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  sortBy?: 'price-low-to-high' | 'price-high-to-low' | 'newest';
}
