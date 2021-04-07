/*
 * @Description: 
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-04-06 11:20:52
 * @LastEditors: herman
 * @LastEditTime: 2021-04-06 15:22:49
 * @FilePath: /vue-js-herman/src/utils/i18n.ts
 */
import { createI18n } from 'vue-i18n'
import messages from '@/locales'
import tsHelper from '@/utils/tsHelper'

let lang = tsHelper.getItem('lang') || 'zh_CN'

const i18n = createI18n({
    locale: lang,
    messages
})

export default i18n