/*
 * @Description: 权限管理, 当路由发生改变时判断是否有权限使用当前路由
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-04-01 09:28:22
 * @LastEditors: herman
 * @LastEditTime: 2021-04-01 13:04:29
 * @FilePath: /vue-js-herman/src/utils/permission.ts
 */
import router from '@/router'
import NProgress from 'nprogress'
import { getToken } from '@/utils/auth'
import tsHelper from '@/utils/tsHelper'

NProgress.configure({showSpinner: false})

// 白名单
const WHITELIST = ['/login', '/map', '/401', '/404']

// 路由跳转前
router.beforeEach((to, from, next) => {
    // 进程开始
    NProgress.start()
    // 判断是否已登录, 并且返回token
    if (getToken()) {
        tsHelper.console('包含token')
        tsHelper.console(to.path)
        // 路由指向登录页, 跳转到首页
        if (to.path === '/login') {
            next({path: '/'})
        } else {
            next()
        }
    } 
    else {
        // 没有token, 指向的路由是否在白名单中
        tsHelper.console('不包含token')
        tsHelper.console(to.path)
        let isWhite = false
        // 遍历白名单
        for (let i = 0; i < WHITELIST.length; i++) {
            if (to.path.indexOf(WHITELIST[i]) !== -1) {
                isWhite = true
                break
            }
        }
        // 在白名单中 继续
        if (isWhite) next()
        // 不在白名单中跳转登录
        else next({path: '/login'})
    }
    // 进程继续
    NProgress.done()
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})