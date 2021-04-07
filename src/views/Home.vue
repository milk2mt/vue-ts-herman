<!--
 * @Description: 
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-03-30 10:17:20
 * @LastEditors: herman
 * @LastEditTime: 2021-04-06 16:53:29
 * @FilePath: /vue-js-herman/src/views/Home.vue
-->
<template>
    <!-- <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div> -->
    
    <div id="nav">
        <template v-for="(r, i) in routers" :key="i">
            <router-link :to="r.path">{{r.name}}</router-link> | 
        </template>        
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import routes from '@/router'
    import { getToken } from '@/utils/auth'
    import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

    export default defineComponent({
        name: 'Home',
        components: {
            HelloWorld,
        },
        setup(){
            let routers = routes.options.routes
            return { routers }
        },
        mounted() {
            console.log(getToken())
        },
    })
</script>
