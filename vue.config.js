module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      'heros': {
        target: "http://pvp.qq.com/",
        changeOrigin: true,
        pathRewrite: {
          '^/heros': "http://pvp.qq.com/"
        }
      },
    }
  }
};