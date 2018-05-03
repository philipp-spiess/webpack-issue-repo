process.env.NODE_ENV = 'production'
process.env.BABEL_ENV = 'production'

module.exports = {
  output: {
    filename: 'app.[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].chunk.js',
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app')],
        }
      },
    ],
  },
}
