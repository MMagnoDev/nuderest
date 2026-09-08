/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    unoptimized: true,
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
    ];
  },
};

export default nextConfig;
