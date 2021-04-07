<!--
 * @Description: 
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-04-06 14:08:29
 * @LastEditors: herman
 * @LastEditTime: 2021-04-07 10:55:02
 * @FilePath: /vue-js-herman/src/components/layout/nav-header.vue
-->
<template>
    <el-header height="100px" class="nav-header">
        <img src="../../assets/img/hb.png"/>
    </el-header>
</template>

<script>

import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
    name: 'nav-header',
    setup() {
        let src = ref('../../assets/img/logo1.png')
        return {
            src
        }
    }
})
</script>

<style scoped>
</style>
