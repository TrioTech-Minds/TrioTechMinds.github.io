/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// module.exports = {
//   assetPrefix: isProd ? '/TrioTechMinds.github.io/' : '',
//   images: {
//     unoptimized: true,
//   },
//   basePath: isProd ? '/TrioTechMinds.github.io' : '',
//   trailingSlash: true,
// };


module.exports = {
  assetPrefix: isProd ? '/TrioTechMinds.github.io/' : '',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/TrioTechMinds.github.io' : '',
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};




