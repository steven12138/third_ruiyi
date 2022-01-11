module.exports = {
  publicPath:"./",
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api": {
        target: "https://bdfzres.lexuewang.cn:5002",
        changeOrigin: true,
        secure: true,
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
