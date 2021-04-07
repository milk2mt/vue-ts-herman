<!--
 * @Description: 
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-04-06 10:43:50
 * @LastEditors: herman
 * @LastEditTime: 2021-04-07 11:04:14
 * @FilePath: /vue-js-herman/src/components/layout/index.vue
-->
<template>
    <el-container direction="vertical">
        <nav-header></nav-header>
        <el-container>
            <nav-aside></nav-aside>
            <nav-body></nav-body>
        </el-container>
    </el-container>
</template>

<script>
    import { defineComponent, ref, reactive } from 'vue'
    import NavAside from './nav-aside.vue'
    import NavBody from './nav-body.vue'
    import NavHeader from './nav-header.vue'

    export default defineComponent({
        components: {
            NavHeader,
            NavAside,
            NavBody,
        },
        setup() {
            let width = ref('230px')
            return {
                width
            }
        },
    })
</script>

<style scoped>
</style>
