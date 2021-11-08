// scripts/webpack.base.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { srcPath, distPath } = require("./paths");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  // 入口文件，这里之后会着重强调
  entry: {
    index: path.join(srcPath, "index.tsx"),
  },
  output: {
    // filename: 'bundle.[contenthash:8].js',  // 打包代码时，加上 hash 戳
    filename: "js/[name].[contenthash:8].js", // name 即多入口时 entry 的 key
    path: distPath,
    // publicPath: 'http://cdn.abc.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到
    publicPath: "/",
  },

  resolve: {
    // alias: {
    //   '@src': path.resolve(__dirname, '../src'),
    //   '@packages': path.resolve(__dirname, '../src/packages'),
    //   '@containers': path.resolve(__dirname, '../src/containers'),
    //   '@layout': path.resolve(__dirname, '../src/layout'),
    //   '@utils': path.resolve(__dirname, '../src/utils'),
    //   '@styles': path.resolve(__dirname, '../src/styles'),
    // },
    // mainFiles: ['index', 'main'],
    extensions: [".ts", ".tsx", ".scss", "json", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader",
        include: srcPath,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "../public/index.html"),
      filename: "index.html",
    }),
    new CleanWebpackPlugin({}),
  ],
};
