import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    unoptimized: true,
  },
// Removes invalid keys from root config
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
