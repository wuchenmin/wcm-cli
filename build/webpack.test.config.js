const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const webpack = require('webpack')

const info = require('./info.js')
console.log(info.host)
module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.styl$/,
        use: [
          'vue-style-loader',
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
            name: 'static/images/[name].[hash:7].[ext]' // 将图片都放入 images 文件夹下，[hash:7]防缓存
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/fonts/[name].[hash:7].[ext]' // 将字体放入 fonts 文件夹下
          }
        }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: false,
    inline: false,
    // port: info.TEST.port,
    progress: true,
    proxy: {
      // "/api": {
      //     target: 'https://zhongyue.picp.vip',
      //     pathRewrite: {'^/api' : ''},
      //     changeOrigin: true
      //   },
      '/api': {
        target: info.TEST.API,
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    },
    host: info.host
  },
  devtool: 'cheap-module-eval-source-map',
  // NODE_ENV: '"development"',
  // API_ROOT: '"http://192.168.1.223:8504"',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env.js')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.tpl.html'
    })
  ]
})