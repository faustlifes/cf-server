const webpackBase = require('./webpack.conf');

const packageJson = require('../../package.json');

module.exports = {
  ...webpackBase,
  entry: {
    index: [
      './index.js',
    ]
  },
  mode: 'production',
};
