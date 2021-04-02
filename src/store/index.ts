/*
 * @Description: store 管理
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-03-30 10:17:20
 * @LastEditors: herman
 * @LastEditTime: 2021-03-31 11:38:20
 * @FilePath: /vue-js-herman/src/store/index.ts
 */
import { createStore } from 'vuex'
import getters from './getters'

export default createStore({
    state: {
        loading: false,
    },
    mutations: {
        Loading: (state, loading: boolean) => (state.loading = loading),
    },
    actions: {
        setLoading: (ctx, loading: boolean) => ctx.commit('Loading', loading),
    },
    modules: {},
    getters,
})
