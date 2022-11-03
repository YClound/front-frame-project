const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // print:  path.resolve(__dirname, '../../src/base/print.js'),
    // index: {
    //   import: path.resolve(__dirname, '../../src/base/index.js'),
    //   dependOn: 'shared',
    // },
    // another: {
    //   import: path.resolve(__dirname, '../../src/base/another-module.js'),
    //   dependOn: 'shared',
    // },
    // shared: 'lodash',
    index: path.resolve(__dirname, '../../src/base/index.js'),
    another: path.resolve(__dirname, '../../src/base/another-module.js'),
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
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
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
  optimization: {
    moduleIds: 'deterministic', // https://webpack.docschina.org/guides/caching/
    runtimeChunk: 'single',
    splitChunks: {
      // chunks: 'all'
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  }
}