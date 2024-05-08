const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  module: {
    rules: [
      {
        test: /.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
