const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/main.js",
  },
  output: {
    filename: "js/[name].js",
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // loader: 'babel-loader',
        include: path.resolve(__dirname, "src"),
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["es2015"],
          },
        }, ],
        // query: {
        //   presets: [
        //     ['env', {
        //       targets: {
        //         node: '8.11.1'
        //       }
        //     }]
        //   ]
        // }
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "../src"),
    },
  },
  plugins: [new VueLoaderPlugin()],
  externals: {
    // jquery: "jQuery",
    // echarts: "echarts",
    // vue: "Vue",
    // "element-ui": "ELEMENT",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2,
        },
      },
    },
  },
};