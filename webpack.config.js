var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ["./src/js/app.js", "./src/css/app.css"],

  output: {
    path: "./build",
    filename: "js/app.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css")
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      }
    ],
  },

  plugins: [
    new ExtractTextPlugin("css/app.css")
  ]
};
