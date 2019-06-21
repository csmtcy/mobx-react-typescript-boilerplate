var path = require('path');
require("@babel/polyfill");

module.exports = {
  // entry: {
  //   main: './src/index',
  //   // vendor: "./src/vendor.js"
  // },
  entry: ["@babel/polyfill", "./src/index"],
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
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
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  },
};
