# Frontend Development Guide

## Project Structure

```
src/
  app/                    # Next.js App Router pages
    layout.tsx           # Root layout
    page.tsx             # Home page
    login/               # Login page
    dashboard/           # Dashboard pages
    product/             # Product pages
    category/            # Category pages
    supplier/            # Supplier pages
    
  components/            # React components
    ui/                  # Reusable UI components
      Button.tsx
      Card.tsx
      Input.tsx
      Alert.tsx
      Loading.tsx
      EmptyState.tsx
      index.ts           # Export all UI components
    layout/              # Layout components
      Header.tsx
      Footer.tsx
      Sidebar.tsx
      Providers.tsx      # App providers (React Query, etc.)
    shared/              # Shared business components
      ProductCard.tsx
      SearchBar.tsx
      CategoryGrid.tsx
    error-handling/      # Error boundary components
      ErrorBoundary.tsx
      AsyncErrorBoundary.tsx
      
  hooks/                 # Custom React hooks
    useProducts.ts       # Product-related queries
    useAuth.ts           # Auth-related queries
    useAuthMutations.ts  # Auth mutations
    
  services/              # API service layer
    apiClient.ts         # Axios configuration
    productService.ts    # Product API calls
    index.ts             # All other services
    
  lib/                   # Utility libraries
    env.ts               # Environment variables
    utils.ts             # Utility functions
    
  types/                 # TypeScript type definitions
    index.ts             # All application types
    
  mocks/                 # Mock Service Worker setup
    browser.ts           # MSW browser setup
    handlers.ts          # Mock API handlers
```

## Environment Setup

### Development (Mock APIs)
```bash
# .env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
NEXT_PUBLIC_USE_MOCK=true
```

### Production (Real APIs)
```bash
# .env.local
NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com
NEXT_PUBLIC_USE_MOCK=false
```

## API Integration

### Services Layer
- **apiClient.ts**: Centralized Axios configuration with interceptors
- **productService.ts**: Product-specific API calls
- **authService.ts**: Authentication API calls
- **categoryService.ts**: Category API calls
- **supplierService.ts**: Supplier API calls

### React Query Hooks
- **useProducts.ts**: Product data fetching with caching
- **useAuth.ts**: Authentication state management
- **useAuthMutations.ts**: Login/register mutations

### Mock Data System
- Uses MSW (Mock Service Worker) for API mocking
- Toggle between mock and real APIs via environment variables
- Realistic data structure matching backend expectations

## Component Architecture

### UI Components (`/components/ui`)
- Reusable, presentational components
- No business logic
- Styled with Tailwind CSS
- TypeScript-first approach

### Shared Components (`/components/shared`)
- Business logic components
- Combine UI components
- Domain-specific functionality

### Error Handling
- Error boundaries for synchronous errors
- React Query error boundaries for async errors
- Global error interceptors in API client

## Best Practices

### 1. Code Organization
- Feature-based folder structure
- Clear separation between UI and business logic
- Consistent naming conventions

### 2. State Management
- Server state: React Query
- Client state: React hooks/local state
- Global state: Context providers

### 3. Type Safety
- Comprehensive TypeScript types
- Type-safe API responses
- Environment variable validation

### 4. Performance
- Code splitting by routes
- Image optimization with Next.js
- Efficient caching strategies

### 5. Developer Experience
- Hot reload in development
- Comprehensive error messages
- Easy mock data switching

## Common Mistakes to Avoid

### 1. Direct API Calls in Components
```tsx
// BAD
function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/api/products').then(setProducts);
  }, []);
}

// GOOD
function ProductList() {
  const { data: products, isLoading, error } = useProducts();
}
```

### 2. Hardcoded API URLs
```tsx
// BAD
fetch('http://localhost:3000/api/products')

// GOOD
const response = await productService.getProducts();
```

### 3. Missing Error Handling
```tsx
// BAD
const data = await api.get('/products');

// GOOD
try {
  const data = await api.get('/products');
} catch (error) {
  // Handle error
}
```

### 4. Inline Styles
```tsx
// BAD
<div style={{ color: 'red', padding: '10px' }}>

// GOOD
<div className="text-red-500 p-2">
```

## Git Workflow

### Branch Strategy
- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: Feature development
- `bugfix/*`: Bug fixes
- `hotfix/*`: Critical production fixes

### Commit Convention
```
feat: Add product search functionality
fix: Resolve login redirect issue
docs: Update API documentation
style: Format code with Prettier
refactor: Extract reusable components
test: Add unit tests for services
```

### Pull Request Process
1. Create feature branch from `develop`
2. Implement changes with tests
3. Submit PR with description
4. Code review and approval
5. Merge to `develop`
6. Deploy to staging
7. Merge to `main` for production

## Switching Between Mock and Real APIs

### Development Mode (Mock)
```bash
# Start with mocks
npm run dev
# Uses NEXT_PUBLIC_USE_MOCK=true
```

### Production Mode (Real APIs)
```bash
# Update .env.local
NEXT_PUBLIC_USE_MOCK=false
NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com

# Build and start
npm run build
npm run start
```

The application automatically detects the environment and configures itself accordingly. No code changes required!
