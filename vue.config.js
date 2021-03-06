module.exports = {
  devServer: {
    host: "localhost",
    port: 8081,
    proxy: {
      "/api": {
        target: "http://localhost:8080/api/",
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  publicPath: "./",
  productionSourceMap: false,
};
