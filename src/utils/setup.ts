/*
 * @Description: 
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-04-06 11:05:34
 * @LastEditors: herman
 * @LastEditTime: 2021-04-06 11:07:54
 * @FilePath: /vue-js-herman/src/utils/setup.ts
 */
import type { App } from 'vue'

let app: App

export const setApp = (_app: App): void => {
    app = _app
}

export const getApp = (): App => {
    return app
}