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
};

export default nextConfig;
