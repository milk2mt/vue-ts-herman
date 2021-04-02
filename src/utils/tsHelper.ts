/*
 * @Description: ts帮手
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-04-01 10:27:33
 * @LastEditors: herman
 * @LastEditTime: 2021-04-01 13:04:14
 * @FilePath: /vue-js-herman/src/utils/tsHelper.ts
 */

// 初始化帮手, 定义方法
const tsHelper = {
    /**
     * @description: 设置浏览器缓存
     * @param {*}
     * @return {*}
     * @author: herman
     */
    setItem: (key: string, val: string): void => sessionStorage.setItem(key, val),
    /**
     * @description: 获取浏览器缓存
     * @param {*}
     * @return {*}
     * @author: herman
     */
    getItem: (key: string): string | null => sessionStorage.getItem(key),
    /**
     * @description: 时间戳转换日期时间格式
     * @param {string} str
     * @param {boolean} isTime
     * @return {*}
     * @author: herman
     */
    convertDate: (str: string | number, isTime: boolean): string => {
        if (str) {
            const date = str.toString().length === 10 ? new Date(str as number * 1000) : new Date(str)
            const year = date.getFullYear()
            const month = date.getMonth() + 1 < 10 ? `0${(date.getMonth() + 1)}` : date.getMonth() + 1
            const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
            if (isTime) {
                const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
                const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
                const sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
                return `${year}-${month}-${day} ${hour}:${min}:${sec}`
            }
            else
                return `${year}-${month}-${day}`
        }
        else return ``
    },
    /**
     * @description: 获取地址栏指定key的参数指
     * @param {string} key
     * @return {*}
     * @author: herman
     */
    getUrlParam: (key: string): string => {
        const url = window.location.href
        const reg = new RegExp('(^|&)' + key + '=([^&*])(&|$)')
        const r = url.search.toString().toLowerCase().substr(1).match(reg)
        if (r != null) return unescape(r[2])
        else return ``
    },
    /**
     * @description: 开发模式控制台打印
     * @param {object} obj
     * @return {*}
     * @author: herman
     */
    console: (obj: any): void => {
        if (process.env.NODE_ENV === 'development')
            console.log(`🚀 -->`, obj)
    }
}
// 导出帮手
export default tsHelper