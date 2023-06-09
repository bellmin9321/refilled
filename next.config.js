/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    dirs: ['pages', 'components', 'lib', 'types'],
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/items",
        destination: "https://file.refilled.co.kr/assignment/product.json",
      },
    ];
   },
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
   }
};

module.exports = nextConfig;
