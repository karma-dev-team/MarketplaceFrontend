const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
  })
);