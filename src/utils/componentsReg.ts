/*
 * @Description: 注册全局组件
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-04-01 11:04:46
 * @LastEditors: herman
 * @LastEditTime: 2021-04-01 13:05:59
 * @FilePath: /vue-js-herman/src/utils/componentsReg.ts
 */
/**
 * @description: vue2中可以使用import导入Vue实例,
 *               vue3只能在main.ts中创建Vue实例??, 
 *               改成传参的方式调用app来注册
 * @param {any} app vue实例
 * @return {*}
 * @author: herman
 */
export default (app: any): void => {
    // 读取全局组件目录下的所有vue组件
    const cts = require.context('@/components/common', false, /\.vue$/)
    // 遍历所有组件注册到全局中
    cts.keys().forEach(c => {
        const config = cts(c)
        // 去掉开头的'./' 以及结尾的'.vue' 并将组件名称大写
        const name = c.replaceAll('./', '').replaceAll('.vue', '').toUpperCase()
        app.component(name, config.default || config)
    })
}
