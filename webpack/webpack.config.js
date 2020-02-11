// // // const HtmlWebpackPlugin = require('html-webpack-plugin');
// // // const ExtractTextPlugin = require('extract-text-webpack-plugin');
// // const webpack = require('webpack');
// // const path = require('path');
// // module.exports = {
// //     entry: './src/js/main.js',
// //     output: {
// //       filename: '[name].min.js',
// //       library: 'myApp'
// //     },
    
// // };
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
  mode: 'development',
  entry: {
    main: "./src/main.js",
    styles: "./src/styles.css"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].min.js",
  },
  module: {
    rules: [
      {test: /\.css$/,
       use: [MiniCssExtractPlugin.loader,"css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html"}),
    new MiniCssExtractPlugin({filename: "[name].min.css"}),
    new FixStyleOnlyEntriesPlugin(),
  ]
}