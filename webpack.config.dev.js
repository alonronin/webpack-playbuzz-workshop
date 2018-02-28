const { resolve } = require('path');
const merge = require('webpack-merge');

const config = require('./webpack.config');

let src = resolve(__dirname, 'src');

module.exports = merge(config, {
  output: {
    filename: '[name].js',
  },

  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.s?css$/,
        loaders: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }
        ],

        include: src,
      },
    ],
  },
});
