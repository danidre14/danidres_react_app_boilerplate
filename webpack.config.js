const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  //our React entry file
  entry: "./src/index.js",

  /*where you want compiled code to go;
  would be just one bundled javascript file*/
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },

  //specifying loader
  module: {
    rules: [
      {
        //look for js/jsx files that we want babel to compile
        test: /\.js$/,

        exclude: /node_modules/, //so nothing happens to files inside the folder
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  // add a custom index.html as the template
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
