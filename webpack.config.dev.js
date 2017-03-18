const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path") // eslint-disable-line no-unused-vars
const webpack = require("webpack")
const prodConfig = require("./webpack.config.prod.js")

module.exports = {
  entry: [
    "webpack-hot-middleware/client?reload=true",
    prodConfig.entry,
  ],
  output: prodConfig.output,
  module: prodConfig.module,
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: "body",
      template: "src/client/index.ejs",
    }),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
