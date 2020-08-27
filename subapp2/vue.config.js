/*
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-08-27 14:49:09
 */
const path = require("path");

module.exports = {
    //配置静态文件host路径
    publicPath: 'http://localhost:8082',
    devServer: {
        // 监听端口
        port: 8082,
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    },
    configureWebpack: {
        output: {
            // 微应用的包名，这里与主应用中注册的微应用名称一致
            library: "vue-app-2",
            // 将你的 library 暴露为所有的模块定义下都可运行的方式
            libraryTarget: "umd",
            // 按需加载相关，设置为 webpackJsonp_vue-project 即可
            jsonpFunction: `webpackJsonp_vue-app-2`,
        },
    },
};