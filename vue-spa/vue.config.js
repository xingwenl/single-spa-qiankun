const { name } = require("./package");
const port = 9001;
module.exports = {
  lintOnSave: false,
  filenameHashing: true,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-page`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`
    },
  },
};
