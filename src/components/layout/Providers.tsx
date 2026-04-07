'use client';

import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from '@/components/error-handling';
import { env } from '@/lib/env';

/**
 * Providers: Client-side wrapper for all context providers.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  // Use useMemo or useState to ensure individual renderers get their own client
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        retry: (failureCount, error: any) => {
          // Don't retry on 4xx errors
          if (error?.response?.status >= 400 && error?.response?.status < 500) {
            return false;
          }
          // Retry up to 2 times for other errors
          return failureCount < 2;
        },
        refetchOnWindowFocus: !env.IS_DEVELOPMENT, // Disable in development
      },
      mutations: {
        retry: 1,
      },
    },
  }));

  // Initialize Mock Service Worker if the environment variable is set
  useEffect(() => {
    if (env.USE_MOCK) {
      const initMocks = async () => {
        // Dynamically import MSW to keep it out of production
        const { worker } = await import('@/mocks/browser');
        await worker.start({
          onUnhandledRequest: 'bypass',
        });
      };
      initMocks();
    }
  }, []);

  return (
    <ErrorBoundary>
      <QueryErrorResetBoundary>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster 
            position="bottom-right" 
            richColors 
            closeButton
            toastOptions={{
              duration: 5000,
              style: {
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
              },
            }}
          />
        </QueryClientProvider>
      </QueryErrorResetBoundary>
    </ErrorBoundary>
  );
}
