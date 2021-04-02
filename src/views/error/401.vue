<!--
 * @Description: 401无访问权限
 * @Version: v1.0
 * @Author: herman
 * @Date: 2020-05-14 13:22:25
 * @LastEditors: herman
 * @LastEditTime: 2021-03-31 11:25:39
 * @FilePath: /vue-js-herman/src/views/error/401.vue
--> 

<template>
	<div style="height: 95vh;display: flex;align-items: center;justify-content: center;">
        <div style="text-align: center; color:#999; font-size: 30px;">
            <img src="../../assets/img/401_images/401.gif" />
            <p>对不起，您无访问权限!</p>
            <router-link :to="{path: '/about'}">
                <el-button type="text"><span style="font-size:20px">重新登录</span></el-button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>
</style>
