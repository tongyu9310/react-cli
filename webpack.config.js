const merge = require('webpack-merge');
const { join, resolve } = require('path');
//获取命令行中的参数
// console.log(process.argv.slice(2));
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _modeFlag = _mode === 'production';
console.log('_mode', argv);
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let cssLoaders = [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1, //@import('./xxx.scss)
    },
  },
  {
    loader: 'postcss-loader',
  },
];
// 公共配置
const webpackBaseConfig = {
  entry: {
    app: resolve('src/index.tsx'),
  },
  output: {
    path: join(__dirname, './dist/assets'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        include: [resolve('src')], //解析指定路径下的文件
        exclude: /node_modules/, //排除的文件
        loader: 'babel-loader', //babeljs.cn
      },
      {
        test: /\.(.css|scss)$/,
        use: cssLoaders,
      },
      {
        test: /\.(png|jpeg|gif|eot|woff|woff2|ttf|svg|otf|webp)$/,
        type: 'asset',
      },
    ],
  },
  external: {
    //不进行打包
    // react: 'react',//放到cdn
  },
  resolve: {
    alias: {
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components'),
      '@models': resolve('src/models'),
      '@routes': resolve('src/routes'),
      '@pages': resolve('src/pages'),
      '@utils': resolve('src/utils'),
      '@recoil': resolve('src/recoil'),
      '@hooks': resolve('src/hooks'),
      '@api': resolve('src/api'),
    },
    //不需要每次写.js .ts...
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: _modeFlag ? 'styles/[name].[contenthash:5].css' : 'styles/[name].css',
      chunkFilename: _modeFlag ? 'styles/[id].[contenthash:5].css' : 'styles/[id].css',
      ignoreOrder: true,
    }),
  ],
};
module.exports = merge.default(webpackBaseConfig, _mergeConfig);
