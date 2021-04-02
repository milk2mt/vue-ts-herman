<!--
 * @Description: 
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-03-30 10:17:20
 * @LastEditors: herman
 * @LastEditTime: 2021-04-01 09:22:07
 * @FilePath: /vue-js-herman/src/App.vue
-->
<template>
    <div id="nav">
        <template v-for="(r, i) in routers" :key="i">
            <router-link :to="r.path">{{r.name}}</router-link> | 
        </template>        
    </div>
    <router-view />
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import routes from '@/router'

    export default defineComponent({
        setup() {
            let routers = routes.options.routes
            return { routers }
        },
    })
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
