const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: '',
    asstesPunlicDir: '',
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    devTool: 'cheap-module-eval-source-map',
    cssSourceMap: true,
    host: 'localhost',
    port: '8080',
    autoOpenBrowser: false,
    proxyTable: {
      '/api': {
        target: 'http://192.168.0.3:8080/EMSP_CMS',//设置你调用的接口域名 别忘了加http
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  prod: {
    index: path.resolve(__dirname, '../../www/index.html'),
    assetsRoot: path.resolve(__dirname, '../../www'),
    assetsSubDirectory: '',
    assetsPublicPath: '',
    productionSourceMap: true,
    devtool: 'source-map',
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
