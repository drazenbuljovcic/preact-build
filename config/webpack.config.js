const webpack = require('webpack'),
  path = require('path'),
  webpackHtml = require('html-webpack-plugin');

const ROOT_DIR = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    'app': path.resolve(ROOT_DIR, 'app', 'src', 'app.js')
  },
  output: {
    path: path.resolve(ROOT_DIR, 'public'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: '/'
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [ '.js' ],
    modules: [ 'node_modules' ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
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
    new webpackHtml({
      template: path.resolve(ROOT_DIR, 'app', 'index.html'),
    })
  ]
}