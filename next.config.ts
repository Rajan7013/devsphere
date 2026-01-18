/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static Site Generation - Minimal JavaScript
  output: 'export',

  // Performance Optimizations
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Image Optimization
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Minimize JavaScript sent to client
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
