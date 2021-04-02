/*
 * @Description: 请求类 调用api接口
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-03-30 10:50:47
 * @LastEditors: herman
 * @LastEditTime: 2021-03-30 16:03:07
 * @FilePath: /vue-js-herman/src/utils/request.ts
 */
import axios from 'axios' // axios 请求
import router from '@/router' // 路由
import store from '@/store'
import { getToken } from '@/utils/auth' // 获取token

// 请求头默认的验证, 在第一次请求的时候是获取图片验证码, 此时使用固定的auth
axios.defaults.headers['Authorization'] = 'Basic ' + btoa("lc:lcsecret")
axios.defaults.headers['deviceId'] = 'sxd_web'
axios.defaults.baseURL = process.env.VUE_APP_BASE_API
// 超时时间
axios.defaults.timeout = 60000

// 请求前拦截器
axios.interceptors.request.use(
    config => {
        if (getToken()) {
            config.headers['Authorization'] = 'bearer ' + getToken()
        }
        store.dispatch('setLoading', true)
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    res => {
        store.dispatch('setLoading', false)
        // 状态码
        let code = res.status
        if (code === 200) {
            return Promise.resolve(res.data)
        }
        else {
            return Promise.reject(res.data)
        }
    },
    error => {
        store.dispatch('setLoading', false)
        let { response } = error
        console.log("🚀 ~ file: request.ts ~ line 53 ~ error", error)
        if (response) {
            switch (response.status) {
                case 401: router.push({path: '/401'})
                    break;
                case 404: router.push({path: '/404'})
                    break;
                default: 
                    console.log('error2: ', error.message)
                    break;
            }
        }
        return Promise.reject(error)
    }
)

export default axios