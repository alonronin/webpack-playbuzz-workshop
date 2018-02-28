const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');

let src = resolve(__dirname, 'src');

module.exports = {
  entry: {
    app: ['./'],
  },

  context: src,

  output: {
    path: resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: src,
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      title: 'Playbuzz Webpack',
    }),
  ],
};
