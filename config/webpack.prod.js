const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  webpackManifest = require('webpack-manifest-plugin'),
  webpackPreload = require('preload-webpack-plugin');

const webpackConfig = require('./webpack.config.js');

module.exports = webpackMerge(webpackConfig, {
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'env': JSON.stringify("production")
    }),
    new webpackManifest({
      fileName: 'webpack-manifest.json',
      basePath: '/'
    }),
    new webpackPreload({
      rel: 'preload',
      as: 'script',
      include: [ 'manifest', 'vendor', 'app' ],
      fileBlacklist: [ /\.map/, /\.css/ ]
    }),
  ]
});