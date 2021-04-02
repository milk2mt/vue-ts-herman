/*
 * @Description: 配置文件
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-03-30 10:59:23
 * @LastEditors: herman
 * @LastEditTime: 2021-03-30 14:08:16
 */

const path = require('path')
const webpack = require('webpack')
const resolve = dir => path.join(__dirname, dir)

const port = process.env.port || 8686
const host = process.env.host || 'localhost'
const projectName = process.env.name

const isDevelopment = process.env.NODE_ENV === 'development'
module.exports = {
    publicPath: isDevelopment ? '/' : projectName,
    outputDir: 'dist',
    lintOnSave: isDevelopment,
    runtimeCompiler: true,
    devServer: {
        port, host,
        open: true,
        overlay: {
            warnings: false,
            errors: true,
        },
        disableHostCheck: true
    },
    configureWebpack: {
        name: projectName,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery'
            })
        ]
    },
    chainWebpack(config) {
        config.plugins.delete('preload') // TODO: need test
        config.plugins.delete('prefetch') // TODO: need test

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()

        // set preserveWhitespace
        // config.module
        //     .rule('vue')
        //     .use('vue-loader')
        //     .loader('vue-loader')
        //     .tap(options => {
        //         options.compilerOptions.preserveWhitespace = true
        //         return options
        //     })
        //     .end()

        config
            // https://webpack.js.org/configuration/devtool/#development
            .when(isDevelopment, config => config.devtool('cheap-source-map'))

        config
            .when(!isDevelopment,
                config => {
                    config
                        .plugin('ScriptExtHtmlWebpackPlugin')
                        .after('html')
                        .use('script-ext-html-webpack-plugin', [{
                            // `runtime` must same as runtimeChunk name. default is `runtime`
                            inline: /runtime\..*\.ts$/
                        }])
                        .end()
                    config
                        .optimization.splitChunks({
                            chunks: 'all',
                            cacheGroups: {
                                libs: {
                                    name: 'chunk-libs',
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: 'initial' // only package third parties that are initially dependent
                                },
                                elementUI: {
                                    name: 'chunk-elementUI', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                                },
                                commons: {
                                    name: 'chunk-commons',
                                    test: resolve('src/components'), // can customize your rules
                                    minChunks: 3, //  minimum common number
                                    priority: 5,
                                    reuseExistingChunk: true
                                }
                            }
                        })
                    config.optimization.runtimeChunk('single')
                }
            )
    }

}