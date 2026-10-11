/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'lenis'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/contacto',
        destination: '/contato',
        permanent: true,
      },
      {
        source: '/maca-1',
        destination: '/maca-modelo-1',
        permanent: true,
      },
      {
        source: '/maca-2',
        destination: '/maca-modelo-2',
        permanent: true,
      },
      {
        source: '/maca-royale',
        destination: '/maca-modelo-2',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
