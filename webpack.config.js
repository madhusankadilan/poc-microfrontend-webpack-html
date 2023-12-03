// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
   entry: {
      index: "./src/index.js",
   },
   output: {
      filename: "[name].bundle.js",
      path: path.join(__dirname, "/dist"),
      publicPath: '/',
   },
   resolve: {
      extensions: ['.js'],
   },
   devServer: {
      static: {
         directory: path.join(__dirname, '/dist'),
      },
      port: 82,
      open: true,
      hot: true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html',
         filename: 'index.html',
      }),
      new CopyWebpackPlugin({
         patterns: [
            {
               from: path.join(__dirname, '/src/modules'),
               to: path.join(__dirname, '/dist', '/modules'),
            },
         ],
      }),
   ],
};
