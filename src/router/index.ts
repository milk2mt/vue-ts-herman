/*
 * @Description: 路由配置文件
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-03-30 10:17:20
 * @LastEditors: herman
 * @LastEditTime: 2021-04-06 16:23:09
 * @FilePath: /vue-js-herman/src/router/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw, _RouteRecordBase } from 'vue-router'
import Home from '../views/Home.vue'
import layout from '@/components/layout/index.vue'

const routes = [
    {
        path: '/404',
        name: '404',
        component: () => import(`@/views/error/404.vue`),
        hidden: true,
        children: [],
        meta: {
            title: '404',
        },
    },
    {
        path: '/401',
        name: '401',
        component: () => import('@/views/error/401.vue'),
        hidden: true,
        children: [],
        meta: {
            title: '401',
        },
    },
    {
        path: '/map',
        name: 'map',
        component: () => import('@/views/error/map.vue'),
        hidden: true,
        children: [],
        meta: {
            title: 'map',
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        hidden: true,
        children: [],
        meta: {
            title: '登录',
        },
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: layout,
        children: [{
            path: 'about',
            name: 'ziji',
            component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        }
        ]
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router

