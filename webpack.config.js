// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  debug: true,
  devtool: '#eval-source-map',
  context: path.join(__dirname, 'app', 'js'),

  // entry: [
  //   'webpack/hot/dev-server',
  //   'webpack-hot-middleware/client',
  //   './AgencyDashboard/main'
  // ],

  entry: {
    agencyDashboard: ['webpack/hot/dev-server', 'webpack-hot-middleware/client', './AgencyDashboard/main'],
    todo: ['webpack/hot/dev-server', 'webpack-hot-middleware/client', './Todo/main']
  },

  output: {
    path: path.join(__dirname, 'app', 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("bundle.css", {
      allChunks: true
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
    ]
  }
};
