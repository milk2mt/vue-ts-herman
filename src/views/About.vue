<!--
 * @Description: 
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-03-30 10:17:20
 * @LastEditors: herman
 * @LastEditTime: 2021-03-31 13:06:48
 * @FilePath: /vue-js-herman/src/views/About.vue
-->
<template>
    <div>
        {{token}}
        <el-button type="primary" @click="onRemove">清除token</el-button>
    </div>
</template>

<script lang="ts">
    import { ref, reactive } from 'vue'
    import { useRouter } from 'vue-router'
    import { getToken, delToken } from '@/utils/auth'
    export default {
        setup() {
        },
        components: {},
    }
</script>

<style scoped></style>
