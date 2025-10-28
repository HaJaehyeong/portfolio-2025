import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@components': './_components',
      '@lib': './lib',
      '@hooks': './hooks',
      '@types': './types',
      '@ui': './ui',
    },
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
};

export default nextConfig;
