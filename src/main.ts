/*
 * @Description: 主入口文件
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-03-30 10:17:20
 * @LastEditors: herman
 * @LastEditTime: 2021-04-07 10:31:41
 * @FilePath: /vue-js-herman/src/main.ts
 */
import { createApp } from 'vue' // 创建vue实例
import App from '@/App.vue' // 主入口vue文件
import router from '@/router' // 路由
import store from '@/store' // store vuex
import '@/utils/permission' // 路由权限控制
import { setApp } from '@/utils/setup' // 设置全局app
import i18n from '@/utils/i18n' // 设置i18n
import { regGlobComp } from '@/utils/registerGlobComp' // 注册全局组件

// 第三方
// element
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// font awesome 
import '@fortawesome/fontawesome-free/css/all.css'

// 自定义样式
import '@/assets/css/index.css'

const app = createApp(App)
// 使用i18n国际化
app.use(i18n)
// vuex.store, 路由, element组件
app.use(store).use(router).use(ElementPlus)

router.isReady().then(() => app.mount('#app'))
// 暂时放在这里注册全局组件
regGlobComp()

setApp(app)