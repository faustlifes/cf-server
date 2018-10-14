const webpackBase = require('./webpack.conf');

const packageJson = require('../package.json');

module.exports = {
  ...webpackBase,
  entry: {
    index: [
      './index.js',
    ]
  },
  output: {
    filename: '[name].js',
  },
  mode: 'development',
};
