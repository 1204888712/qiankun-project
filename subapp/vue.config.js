/*
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-08-27 14:49:25
 */
const path = require("path");

module.exports = {
    //配置静态文件host路径
    publicPath: 'http://localhost:8081',
    // lintOnSave: false,
    devServer: {
        // 监听端口
        port: 8081,
        // overlay: {
        //     warnings: false,
        //     errors: false
        // },
        // // 关闭主机检查，使微应用可以被 fetch
        // disableHostCheck: true,
        // 配置跨域请求头，解决开发环境的跨域问题
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    },
    configureWebpack: {
        // resolve: {
        //     alias: {
        //         "@": path.resolve(__dirname, "src"),
        //     },
        // },
        output: {
            // 微应用的包名，这里与主应用中注册的微应用名称一致
            library: "vue-app",
            // 将你的 library 暴露为所有的模块定义下都可运行的方式
            libraryTarget: "umd",
            // 按需加载相关，设置为 webpackJsonp_vue-app 即可
            jsonpFunction: `webpackJsonp_vue-app`,
        },
    },
};