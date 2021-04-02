/*
 * @Description: 登录请求
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-03-30 11:56:52
 * @LastEditors: herman
 * @LastEditTime: 2021-03-30 15:53:54
 * @FilePath: /vue-js-herman/src/api/login/index.ts
 */

import request from '@/utils/request'

export const onLogin = (params: any) => 
    request({ url: `/authentication/form`, method: `post`, params })
