<!--
 * @Description: 404页面无法找到
 * @Version: 
 * @Author: herman
 * @Date: 2020-05-14 13:22:25
 * @LastEditors: herman
 * @LastEditTime: 2021-04-06 15:53:37
 * @FilePath: /vue-js-herman/src/views/error/404.vue
--> 

<template>
    <div style="height: 95vh;display: flex;align-items: center;justify-content: center;">
        <div style="text-align: center; color:#999; font-size: 30px;">
            <img src="../../assets/img/404_images/404.png" >            
            <p v-text="$t('msg.errMsg404')"></p>
            <router-link :to="{path: '/'}">
                <el-button type="text"><span style="font-size:20px" v-text="$t('btn.btn404')"></span></el-button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>
</style>
