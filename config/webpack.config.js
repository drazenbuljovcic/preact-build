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
    filename: 'js/[name].bundle.[chunkhash:6].js',
    chunkFilename: 'js/[name].chunk.[chunkhash:6].js',
    publicPath: '/'
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [ '.js', '.sass', '.html' ],
    modules: [ 'node_modules' ],
    alias: {
      '@': path.resolve(ROOT_DIR, 'app')
    }    
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      { 
        test: /\.(scss|sass)/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: '[name].[hash:6].[ext]',
              outputPath: 'images/'
            },
          },
          { loader: 'image-webpack-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpackHtml({
      template: path.resolve(ROOT_DIR, 'app', 'index.html'),
    })
  ]
}