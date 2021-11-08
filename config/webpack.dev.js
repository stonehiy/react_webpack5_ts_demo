// webpack.dev.js
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');
const { srcPath, distPath } = require('./paths')
const vConsolePlugin = require('vconsole-webpack-plugin') // 页面打印


const devConfig = {
  
  mode: 'development',
  devtool: "inline-source-map",
  target: "web",
  entry: {
    index: path.join(srcPath, 'index.js')
  },
  devServer: {
  
    historyApiFallback:true,
    
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    // 默认为true
    hot: true,
    // 是否开启代码压缩
    compress: true,
    // 启动的端口
    port: 9000,

  },
  plugins: [
    new vConsolePlugin({
        enable: true
    })
],

};

module.exports = merge(devConfig, baseConfig);
