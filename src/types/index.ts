// Common API response types
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
  errors?: string[];
}

// Pagination types
export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Product types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  supplier: Supplier;
  specifications: Record<string, any>;
  moq: number; // Minimum Order Quantity
  leadTime: number; // in days
  rating: number;
  reviews: number;
  createdAt: string;
  updatedAt: string;
}

// Supplier types
export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
  verified: boolean;
  rating: number;
  totalProducts: number;
  responseRate: number;
  establishedYear: number;
}

// Address types
export interface Address {
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

// Category types
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  parent?: string;
  children?: Category[];
  productCount: number;
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'buyer' | 'supplier' | 'admin';
  company?: string;
  verified: boolean;
  createdAt: string;
}

// Auth types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: 'buyer' | 'supplier';
  company?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}
