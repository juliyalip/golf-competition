/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/golf-competition',
  assetPrefix: '/golf-competition/',
   experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
