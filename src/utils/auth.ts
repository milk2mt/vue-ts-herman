/*
 * @Description: token 管理
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-03-30 10:59:23
 * @LastEditors: herman
 * @LastEditTime: 2021-03-30 15:54:48
 * @FilePath: /vue-js-herman/src/utils/auth.ts
 */
import Cookies from 'ts-cookies'

const TOKEN = 'herman'

export const getToken = (): string => Cookies.get(TOKEN)

export const setToken = (token: string): void => Cookies.set(TOKEN, token)

export const delToken = (): void => Cookies.remove(TOKEN)