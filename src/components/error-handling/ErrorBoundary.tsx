import React, { ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Alert } from '@/components/ui/Alert';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // In production, you might want to send this to an error reporting service
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ENABLE_ERROR_REPORTING === 'true') {
      // Example: Sentry.captureException(error);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <Alert variant="error" className="mb-4">
              <AlertTriangle className="h-5 w-5" />
              <div>
                <h3 className="font-semibold mb-2">Something went wrong</h3>
                <p className="text-sm">
                  {process.env.NODE_ENV === 'development' 
                    ? this.state.error?.message 
                    : 'An unexpected error occurred. Please try refreshing the page.'
                  }
                </p>
              </div>
            </Alert>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
