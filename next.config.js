/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/TrioTechMinds.github.io/' : '',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/TrioTechMinds.github.io' : '',
  trailingSlash: true,
};
