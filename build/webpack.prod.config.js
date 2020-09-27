const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config')
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const env = require('../config/prod.env.js')
const info = require('./info.js')
module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '',
    filename: 'js/[name].[hash:7].' + info.version + '.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]', // 将图片都放入 images 文件夹下，[hash:7]防缓存
            outputPath: 'images',
            publicPath: 'images'
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]', // 将字体放入 fonts 文件夹下
            outputPath: 'fonts',
            publicPath: 'fonts'
          }
        }]
      }
    ]
  },
  // devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[hash:7].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.tpl.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      }
    }),
  ],
  // optimization: {
  //   minimizer: [
  //     new OptimizeCss(),
  //     new UglifyJsPlugin({
  //       cache: true,
  //       parallel: true,
  //       sourceMap: true
  //     })
  //   ]
  // }
})