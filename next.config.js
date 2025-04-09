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
  // Removed the webpackDevMiddleware option that Next.js doesn't recognize
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/vibeverse' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vibeverse/' : '',
};

module.exports = nextConfig;