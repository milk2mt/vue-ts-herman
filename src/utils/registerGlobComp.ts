/*
 * @Description: 注册全局组件
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-04-01 11:04:46
 * @LastEditors: herman
 * @LastEditTime: 2021-04-06 14:04:45
 * @FilePath: /vue-js-herman/src/utils/registerGlobComp.ts
 */
import { getApp } from '@/utils/setup'

/**
 * @description: 注册全局组件方法
 * @return {*}
 * @author: herman
 */
 export const regGlobComp = (): void => {
    // 读取全局组件目录下的所有vue组件
    const cts = require.context('@/components/common', false, /\.vue$/)
    // 遍历所有组件注册到全局中
    cts.keys().forEach(c => {
        const config = cts(c)
        // 去掉开头的'./' 以及结尾的'.vue' 并将组件名称大写
        const name = c.replaceAll('./', '').replaceAll('.vue', '').toUpperCase()
        getApp().component(name, config.default || config)
    })
}
