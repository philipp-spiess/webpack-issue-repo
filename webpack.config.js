const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require("webpack");

module.exports = {
  output: {
    filename: "app.js",
    chunkFilename: "[name].[contenthash:8].chunk.js"
  },
  stats: "verbose",
  mode: "production",
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: require.resolve("babel-loader"),
        options: {
          plugins: ["syntax-dynamic-import"]
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  }
};
