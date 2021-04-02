/*
 * @Description: 主入口文件
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-03-30 10:17:20
 * @LastEditors: herman
 * @LastEditTime: 2021-04-01 11:42:37
 * @FilePath: /vue-js-herman/src/main.ts
 */
import { createApp } from 'vue' // 创建vue实例
import App from './App.vue' // 主入口vue文件
import router from './router' // 路由
import store from './store' // store vuex
import '@/utils/permission' // 路由权限控制
import reg from '@/utils/componentsReg' // 注册全局组件
// 第三方
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

var app = createApp(App)

reg(app)

app.use(store).use(router).use(ElementPlus).mount('#app')

