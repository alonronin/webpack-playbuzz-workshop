const { resolve } = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = require('./webpack.config');

let src = resolve(__dirname, 'src');

module.exports = merge(config, {
  output: {
    filename: '[name].[hash].js',
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),

        include: src,
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('[name].[hash].css'),
    new BundleAnalyzerPlugin(),
  ],
});
