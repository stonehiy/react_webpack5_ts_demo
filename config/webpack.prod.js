// webpack.dev.js
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');
const { srcPath, distPath } = require('./paths')



const devConfig = {  
  mode: 'production',

};

module.exports = merge(devConfig, baseConfig);
