'use client';

import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Loading Component: Renders a smooth, animated loading indicator.
 * Can be used full-screen, inline, or within page layouts.
 */
export const Loading = ({ 
  fullScreen = false, 
  size = 40, 
  message = "Loading the latest listings..." 
}) => {
  const LoadingIcon = (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <Loader2 size={size} className="text-primary-600 dark:text-primary-400" />
    </motion.div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        {LoadingIcon}
        <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-300 animate-pulse">
          {message}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {LoadingIcon}
      <p className="mt-3 text-xs text-gray-500">{message}</p>
    </div>
  );
};
