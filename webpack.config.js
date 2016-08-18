const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let dev = {
  entry: [
    'webpack-dev-server/client?http://localhost:9001',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src'
  ],
  output: {
    publicPath: '/'
  },
  devServer: {
    proxy: {
      '/api*': {
        target: 'http://lunchapi_back_1:8080'
      }
    },
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    port: 9001
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Lunch',
      template: 'src/template.ejs'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.join(__dirname, 'src/styles')
      }
    ]
  }
};

/////////////////////////////////////

let prod = {
  entry: {
    app: './src',
    vendor: ['react', 'react-dom', 'react-router', 'redux']
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:"vendor", 
      filename:"vendor.js"
    }),
    new HtmlWebpackPlugin({
      title: 'Lunch',
      template: 'src/template.ejs'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin('styles.css')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
        include: path.join(__dirname, 'src/styles')
      }
    ]
  }
};

module.exports = (process.env.npm_lifecycle_event == "front/build-dist" ? prod : dev);
