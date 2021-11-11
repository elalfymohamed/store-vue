module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        // api call to get products from fake api server (fakestoreapi.com)
        target: "https://fakestoreapi.com",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
