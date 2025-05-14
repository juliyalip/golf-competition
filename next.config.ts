const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/golf-competition' : '',
  assetPrefix: isProd ? '/golf-competition/' : '',
};

module.exports = nextConfig;