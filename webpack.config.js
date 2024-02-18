const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config({ path: path.join(__dirname, "./.env") });

module.exports = (webpackEnv) => {
  const modeType = webpackEnv.mode || "development";
  const CLIENT_PORT = process.env.CLIENT_PORT || 4000;

  return {
    entry: path.resolve(__dirname, "./src/index.jsx"),
    mode: modeType,
    devServer: {
      port: CLIENT_PORT,
      liveReload: true,
      historyApiFallback: true,
    },
    resolve: {
      extensions: [".jsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "swc-loader",
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(jpe?g|gif|png|svg)/,
          type: "asset/resource",
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, "./build"),
      filename: "bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./public/index.html"),
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(modeType || "development"),
          CLIENT_PORT: JSON.stringify(CLIENT_PORT || 4000),
          CLIENT_HOST: JSON.stringify(process.env.CLIENT_HOST || "127.0.0.1"),
          CLIENT_PROTOCOL: JSON.stringify(
            process.env.CLIENT_PROTOCOL || "http"
          ),
          GOOGLE_API_KEY: JSON.stringify(process.env.GOOGLE_API_KEY),
        },
      }),
    ],
  };
};
