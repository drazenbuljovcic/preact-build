const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  webpackDashboard = require('webpack-dashboard/plugin');

const webpackConfig = require('./webpack.config.js');

module.exports = webpackMerge(webpackConfig, {
  devServer: {
    port: 3000,
    hot: true,
    inline: true
  },
  plugins: [
    new webpackDashboard(),
    new webpack.DefinePlugin({
      'env': JSON.stringify("development")
    })
  ]
});