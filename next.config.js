/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production';

// module.exports = {
//   assetPrefix: isProd ? '/TrioTechMinds.github.io/' : '',
//   images: {
//     unoptimized: true, // Disable Next.js' image optimization
//   },
//   basePath: isProd ? '/TrioTechMinds.github.io' : '',
//   trailingSlash: true,
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.(png|jpg|jpeg|gif|svg)$/i,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             name: '[path][name].[ext]',
//             publicPath: '/_next/static/images/',
//             outputPath: 'static/images/',
//             esModule: false,
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };




const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/TrioTechMinds.github.io/' : '',
  images: {
    unoptimized: true, // Disable Next.js' image optimization
  },
  distDir: '.next',
  basePath: isProd ? '/TrioTechMinds.github.io' : '',
  trailingSlash: true,
  future: {
    webpack5: true, // Enable Webpack 5
  },
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
