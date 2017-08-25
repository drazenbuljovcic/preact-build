const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  webpackExtract = require('extract-text-webpack-plugin');

const webpackDevConfig = require('./webpack.dev.js');

module.exports = webpackMerge(webpackDevConfig, {
  module: {
    rules: [
      {
        test: /.(sass|scss)/,
        use: webpackExtract.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new webpackExtract({
      filename: 'css/[name].[hash:6].css',
      allChunks: true
    })
  ]
})