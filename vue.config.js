module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === "development") {
      config.output.filename("[name].[hash].js").end();
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/prudLayout/" : "/",
  css: {
    sourceMap: true
  },
  lintOnSave: "error",
  runtimeCompiler: true,
  productionSourceMap: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    port: 6060
  }
};
