const { join, resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  output: {
    assetModuleFilename: 'images/[name][ext]',
    filename: 'scripts/[name].bundle.js',
  },
  devServer: {
    historyApiFallback: true, //报错回调到首页
    contentBase: join(__dirname, '../dist'), //当前目录
    host: '0.0.0.0', //默认
    inline: true, //iframe
    port: 8082,
    watchContentBase: true,
    // node-notifier
    quiet: true, //配合friendly-error-webpack-plugin
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'yideng',
      template: resolve(__dirname, '../src/index-dev.html'),
    }),
  ],
};
