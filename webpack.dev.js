var path = require('path');
const merge = require("webpack-merge");
var common = require("./webpack.common");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3000,
    hot: true,
    liveReload: true,
    publicPath: '/',
    historyApiFallback: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
 
  module: {
    rules: [

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader", // inject css into DOM
          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
});
