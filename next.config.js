/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PORT: '4000'
  },
  experimental: {
    optimizeCss: true
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Enable hot reloading
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }

    // Handle Three.js
    config.resolve.alias = {
      ...config.resolve.alias,
      three: require.resolve('three'),
    };

    return config;
  },
  // Removed GitHub Pages specific configuration
};

module.exports = nextConfig;