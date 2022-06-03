const { join, resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'production',
  output: {
    assetModuleFilename: 'images/[name].[contenthash:5].bundle.[ext]',
    filename: 'scripts/[name].[contenthash:5].bundle.js',
    publicPath: '/assets', //http://xxx.com
  },
  optimization: {
    minimize: true, //zip yasuo
    runtimeChunk: { name: 'runtime' }, //公共代码提取
    splitChunks: {
      chunks: 'async', //initial all 函数 （异步加载的代码）
      minChunks: 1, //最小引应用次数
      maxAsyncRequests: 5, //最大并行请求次数 默认为6
      maxInitialRequests: 3, //
      name: false, //使用之前的
      cacheGroups: {
        //优先级高
        commons: {
          chunks: 'initial', //tongbude
          minChunks: 2, //至少引用两次
          name: 'commons', //起名为commons
        },
      },
      minSize: {
        javascript: 100000,
        style: 100000, //字节
      },
      // maxSize: {},
    },
  },
  /**
   * 生产环境不适用
 * devServer: {
    historyApiFallback: true, //报错回调到首页
    contentBase: join(__dirname, '../dist'), //当前目录
    // host: '0.0.0.0', //默认
    // inline: true, //iframe
    port: 8082,
    watchContentBase: true,
    // node-notifier
    // quiet: true, //配合friendly-error-webpack-plugin
  },
  devtool: 'source-map',
 */
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'yideng',
      template: resolve(__dirname, '../src/index-prod.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true, //属性的引号
      },
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      },
    }),
  ],
};
