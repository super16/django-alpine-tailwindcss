const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      filename: '../templates/base.html',
      template: 'src/base.html',
      inject: false,
      minify: false,
    }),
    new HtmlWebpackPlugin({
      filename: '../templates/index.html',
      template: 'src/index.html',
      inject: false,
      minify: false,
    }),
     new HtmlWebpackPlugin({
       filename: '../templates/countries.html',
       template: 'src/countries.html',
       inject: false,
       minify: false,
     }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../static'),
  },
};
