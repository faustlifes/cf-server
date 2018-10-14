const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin'); // eslint-disable-line
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  externals: {},
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('tslint-loader'),
        include: path.resolve(__dirname, '../'),
        enforce: 'pre',
      },
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../'),
        loader: require.resolve('ts-loader'),
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    mainFiles: ['index'],
    alias: {},
  },
  plugins: [
    new SimpleProgressWebpackPlugin(),
  ],
};
