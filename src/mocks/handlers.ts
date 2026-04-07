import { http, HttpResponse } from 'msw';
import { Product, Supplier, Category, User, ApiResponse, PaginatedResponse } from '@/types';

/**
 * Mock suppliers data
 */
const mockSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'Global Equipment Ltd.',
    email: 'contact@globalequip.com',
    phone: '+91-9876543210',
    address: {
      street: '123 Industrial Area',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      country: 'India',
    },
    verified: true,
    rating: 4.8,
    totalProducts: 45,
    responseRate: 95,
    establishedYear: 2010,
  },
  {
    id: '2',
    name: 'Precision Tools Corp.',
    email: 'info@precisiontools.com',
    phone: '+91-9876543211',
    address: {
      street: '456 Tech Park',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560001',
      country: 'India',
    },
    verified: true,
    rating: 4.5,
    totalProducts: 32,
    responseRate: 88,
    establishedYear: 2015,
  },
];

/**
 * Mock categories data
 */
const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Industrial Machinery',
    slug: 'industrial-machinery',
    description: 'Heavy machinery and equipment for industrial applications',
    productCount: 156,
  },
  {
    id: '2',
    name: 'Solar Energy',
    slug: 'solar-energy',
    description: 'Solar panels and renewable energy solutions',
    productCount: 89,
  },
  {
    id: '3',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Electronic components and devices',
    productCount: 234,
  },
];

/**
 * Enhanced mock products data matching new types
 */
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Industrial Concrete Mixer',
    description: 'High-performance concrete mixer for large-scale construction projects.',
    price: 45000,
    category: 'Industrial Machinery',
    images: ['/images/products/mixer.jpg'],
    supplier: mockSuppliers[0],
    specifications: {
      capacity: '500L',
      power: '15HP',
      dimensions: '1200x800x1000mm',
      weight: '450kg',
    },
    moq: 1,
    leadTime: 7,
    rating: 4.8,
    reviews: 124,
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-03-20T14:22:00Z',
  },
  {
    id: '2',
    name: 'CNC Milling Machine - Pro',
    description: 'Precision CNC milling machine with dual-axis control and 12-tool changer.',
    price: 125000,
    category: 'Industrial Machinery',
    images: ['/images/products/cnc.jpg'],
    supplier: mockSuppliers[1],
    specifications: {
      workingArea: '600x400x200mm',
      spindleSpeed: '8000 RPM',
      power: '5.5kW',
      accuracy: '±0.01mm',
    },
    moq: 1,
    leadTime: 14,
    rating: 4.5,
    reviews: 45,
    createdAt: '2024-02-10T09:15:00Z',
    updatedAt: '2024-03-18T16:45:00Z',
  },
  {
    id: '3',
    name: 'Solar Panel System - 5KW',
    description: 'Complete solar system for residential or small business power needs.',
    price: 85000,
    category: 'Solar Energy',
    images: ['/images/products/solar.jpg'],
    supplier: mockSuppliers[0],
    specifications: {
      capacity: '5KW',
      panels: '20 x 250W',
      inverter: '5KW On-Grid',
      warranty: '25 years',
    },
    moq: 1,
    leadTime: 10,
    rating: 4.2,
    reviews: 88,
    createdAt: '2024-01-20T11:00:00Z',
    updatedAt: '2024-03-15T13:30:00Z',
  },
];

/**
 * MSW Handlers for intercepting API requests.
 */
export const handlers = [
  // Handler for GET /api/products (with pagination and filtering)
  http.get('*/api/products', ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const category = url.searchParams.get('category');
    const search = url.searchParams.get('search');
    
    let filteredProducts = [...mockProducts];
    
    // Filter by category
    if (category) {
      filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    
    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    const response: PaginatedResponse<Product> = {
      data: paginatedProducts,
      pagination: {
        page,
        limit,
        total: filteredProducts.length,
        totalPages: Math.ceil(filteredProducts.length / limit),
        hasNext: endIndex < filteredProducts.length,
        hasPrev: page > 1,
      },
    };

    return HttpResponse.json(response);
  }),

  // Handler for GET /api/products/:id
  http.get('*/api/products/:id', ({ params }) => {
    const { id } = params;
    const product = mockProducts.find(p => p.id === id);

    if (!product) {
      return HttpResponse.json(
        { success: false, message: 'Product not found' },
        { status: 404 }
      );
    }

    const response: ApiResponse<Product> = {
      success: true,
      data: product,
    };

    return HttpResponse.json(response);
  }),

  // Handler for GET /api/categories
  http.get('*/api/categories', () => {
    const response: ApiResponse<Category[]> = {
      success: true,
      data: mockCategories,
    };
    return HttpResponse.json(response);
  }),

  // Handler for GET /api/suppliers
  http.get('*/api/suppliers', () => {
    const response: ApiResponse<Supplier[]> = {
      success: true,
      data: mockSuppliers,
    };
    return HttpResponse.json(response);
  }),

  // Handler for POST /api/auth/login
  http.post('*/api/auth/login', async ({ request }) => {
    const { email, password } = await request.json() as any;
    
    // Mock authentication logic
    if (email === 'test@example.com' && password === 'password') {
      const mockUser: User = {
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
        phone: '+91-9876543210',
        role: 'buyer',
        verified: true,
        createdAt: '2024-01-01T00:00:00Z',
      };

      const response: ApiResponse = {
        success: true,
        data: {
          user: mockUser,
          token: 'mock-jwt-token',
          refreshToken: 'mock-refresh-token',
        },
      };
      
      return HttpResponse.json(response);
    }

    return HttpResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  }),

  // Handler for POST /api/auth/register
  http.post('*/api/auth/register', async ({ request }) => {
    const userData = await request.json() as any;
    
    const mockUser: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      role: userData.role,
      verified: false,
      createdAt: new Date().toISOString(),
    };

    const response: ApiResponse = {
      success: true,
      data: {
        user: mockUser,
        token: 'mock-jwt-token',
        refreshToken: 'mock-refresh-token',
      },
    };
    
    return HttpResponse.json(response);
  }),
];
