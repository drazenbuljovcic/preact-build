const webpack = require('webpack'),
  webpackMerge = require('webpack-merge'),
  webpackDashboard = require('webpack-dashboard/plugin');
  
const webpackConfig = require('./webpack.config.js');

module.exports = webpackMerge(webpackConfig, {
  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'env': JSON.stringify("development")
    }),
    new webpack.optimize.CommonsChunkPlugin({
      filename: 'js/[name].bundle.js',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
  ],
  devtool: '#cheap-module-eval-source',
});