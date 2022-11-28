const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: 'http://v.juhe.cn',
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // overlay: {
    //   warning: false,
    //   errors: false
    // }
  },
  lintOnSave: false
})
