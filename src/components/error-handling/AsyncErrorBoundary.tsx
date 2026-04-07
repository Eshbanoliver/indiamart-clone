import { ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Alert, Button } from '@/components/ui';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

interface AsyncErrorBoundaryProps {
  children: ReactNode;
  fallback?: (error: Error, reset: () => void) => ReactNode;
}

export function AsyncErrorBoundary({ children, fallback }: AsyncErrorBoundaryProps) {
  const { reset } = useQueryErrorResetBoundary();

  if (fallback) {
    return <>{children}</>;
  }

  return <>{children}</>;
}

export function DefaultAsyncErrorFallback({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-6">
      <Alert variant="error" className="mb-4">
        <AlertTriangle className="h-5 w-5" />
        <div>
          <h3 className="font-semibold mb-2">Failed to load data</h3>
          <p className="text-sm mb-3">
            {process.env.NODE_ENV === 'development' 
              ? error.message 
              : 'Unable to load the requested data. Please try again.'
            }
          </p>
          <Button onClick={reset} variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </div>
      </Alert>
    </div>
  );
}
