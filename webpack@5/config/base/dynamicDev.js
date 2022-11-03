const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // development
  entry: {
    index: path.resolve(__dirname, '../../src/base/dynamic.js'),
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../../base'),
    clean: true, // 清理输出文件夹
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.(le|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader, // 提取css样式
        // 'style-loader', // 内联样式
        'css-loader',
        'less-loader',
      ]
    }, {
      test: /\.(png|svg|jpg|gif|webp)$/,
      use: {
        loader: 'url-loader',
        options: {
          fallback: 'file-loader',
          quality: 85,
          limit: 10240,
          name: 'assets/[name].[contenthash].[ext]',
          esModule: false,
        },
      },
      type: 'javascript/auto', // 防止一张图片生成两张 其中一张图片打不开 并且css引入的是打不开的图片地址
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      title: '管理输出'
    })
  ],
  devServer: {
    static: '../../base',
    open: false,
    port: '9000'
  },
}