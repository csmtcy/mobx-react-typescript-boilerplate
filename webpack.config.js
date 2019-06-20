var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   loader: "awesome-typescript-loader",
      //   include: path.join(__dirname, 'src')
      // },
      {
        test: /\.tsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
    ]
  },
  stats: {
    colors: true
  },
};
