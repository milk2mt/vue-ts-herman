<!--
 * @Description: 
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-03-30 10:17:20
 * @LastEditors: herman
 * @LastEditTime: 2021-03-31 11:21:22
 * @FilePath: /vue-js-herman/src/views/Home.vue
-->
<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { getToken } from '@/utils/auth'
    import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

    export default defineComponent({
        name: 'Home',
        components: {
            HelloWorld,
        },
        mounted() {
            console.log(getToken())
        },
    })
</script>
