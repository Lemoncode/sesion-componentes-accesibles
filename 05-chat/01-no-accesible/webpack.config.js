const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  context: path.resolve(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  entry: {
    app: ['./index.tsx'],
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    host: 'localhost',
    port: 8051,
    // Reference: https://github.com/webpack/webpack-dev-server/issues/283#issuecomment-162163329
    proxy: {
      '/chat/*': {
        target: 'ws://localhost:3001',
        ws: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
  ],
};
