import { http, HttpResponse } from 'msw';
import { Product } from '@/types/product';

/**
 * Mock data for products.
 * Represents what the real backend would eventually return.
 */
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Industrial Concrete Mixer',
    description: 'High-performance concrete mixer for large-scale construction projects.',
    price: 45000,
    currency: 'INR',
    category: 'Industrial Machinery',
    imageUrl: '/images/products/mixer.jpg',
    sellerName: 'Global Equipment Ltd.',
    rating: 4.8,
    reviewsCount: 124,
    inStock: true,
  },
  {
    id: '2',
    name: 'CNC Milling Machine - Pro',
    description: 'Precision CNC milling machine with dual-axis control and 12-tool changer.',
    price: 125000,
    currency: 'INR',
    category: 'Industrial Machinery',
    imageUrl: '/images/products/cnc.jpg',
    sellerName: 'Precision Tools Corp.',
    rating: 4.5,
    reviewsCount: 45,
    inStock: true,
  },
  {
    id: '3',
    name: 'Solar Panel System - 5KW',
    description: 'Complete solar system for residential or small business power needs.',
    price: 85000,
    currency: 'INR',
    category: 'Solar Energy',
    imageUrl: '/images/products/solar.jpg',
    sellerName: 'EcoPower Solutions',
    rating: 4.2,
    reviewsCount: 88,
    inStock: false,
  },
];

/**
 * MSW Handlers for intercepting API requests.
 */
export const handlers = [
  // Handler for GET /api/products
  http.get('*/api/products', ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    
    let products = [...mockProducts];
    if (category) {
      products = products.filter(p => p.category === category);
    }

    return HttpResponse.json(products);
  }),

  // Handler for GET /api/products/:id
  http.get('*/api/products/:id', ({ params }) => {
    const { id } = params;
    const product = mockProducts.find(p => p.id === id);

    if (!product) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(product);
  }),
];
