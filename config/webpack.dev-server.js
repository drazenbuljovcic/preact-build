const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  webpackDashboard = require('webpack-dashboard/plugin');

const webpackDevConfig = require('./webpack.dev.js');

module.exports = webpackMerge(webpackDevConfig, {
  devServer: {
    port: 3000,
    hot: true,
    inline: true
  },
  plugins: [
    new webpackDashboard(),
  ]
})