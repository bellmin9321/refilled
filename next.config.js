/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    dirs: ['pages', 'components', 'lib', 'types'],
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
