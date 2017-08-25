const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  webpackManifest = require('webpack-manifest-plugin'),
  webpackExtract = require('extract-text-webpack-plugin'),
  webpackPreload = require('preload-webpack-plugin');

const webpackConfig = require('./webpack.config.js'),
  webpackBuild = require('./webpack.build.js');

module.exports = webpackMerge(webpackConfig, {
  output: {
    filename: 'js/[name].bundle.[chunkhash:6].js',
    chunkFilename: 'js/[name].chunk.[chunkhash:6].js',
  },
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
    new webpackExtract({
      filename: 'css/[name].bundle.[chunkhash:6].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      filename: 'js/[name].bundle.[chunkhash:6].js',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
  ],
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
});