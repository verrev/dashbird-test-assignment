/* eslint-disable */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DefinePlugin = require("webpack").DefinePlugin;
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.jsx$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.svg$/i,
        loader: "svg-inline-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/assets/index.html",
      favicon: "./src/assets/images/favicon.ico"
    }),
    new DefinePlugin({
      API_BASE_URL: JSON.stringify("http://localhost:7777/api/v1")
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: [".js", ".jsx", ".json"]
  },
  output: {
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  }
};
