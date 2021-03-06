const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let dev = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src'
  ],
  output: {
    publicPath: '/'
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api:8080'
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
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['react', 'es2015'],
          "plugins": ["react-hot-loader/babel"]
        }
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
    vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux']
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
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['react', 'es2015']
        }
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
