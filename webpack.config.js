const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', ".json"],
    alias: {
      '@images': path.resolve(__dirname, 'src/Static/Images'),
      '@testdata': path.resolve(__dirname, 'src/TestData'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: [
          { 
            loader: "css-loader",
            options: {
              modules: true, // Раз — и готово
            },
          },
        ],
      },
    ],
  },
};