const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  webpackDashboard = require('webpack-dashboard/plugin');

const webpackConfig = require('./webpack.config.js');

module.exports = webpackMerge(webpackConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'env': JSON.stringify("development")
    })
  ],
  devtool: '#cheap-module-eval-source'
});