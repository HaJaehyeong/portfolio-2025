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
  // NOTE(hajae): 개발 과정에서 파일 시스템 캐싱을 지원하여 실행 사이에 컴파일러 아티팩트를 디스크에 저장하여 재시작 시 컴파일 시간을 크게 단축
  experimental: {
    turbopackFileSystemCacheForDev: true,
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
