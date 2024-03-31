const { override, addWebpackModuleRule, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackModuleRule({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
  }), 
  addWebpackAlias({
    '@images': path.resolve(__dirname, 'src/Static/Images'),
  }),
);