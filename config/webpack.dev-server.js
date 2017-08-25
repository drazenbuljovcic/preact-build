const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  webpackDashboard = require('webpack-dashboard/plugin'),
  webpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;  
const webpackDevConfig = require('./webpack.dev.js');

module.exports = webpackMerge(webpackDevConfig, {
  devServer: {
    port: 3000,
    hot: true,
    inline: true
  },
  plugins: [
    new webpackDashboard(),
    new webpackBundleAnalyzer({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 3001,
      openAnalyzer: false,
      generateStatsFile: false,
    }),
  ]
})