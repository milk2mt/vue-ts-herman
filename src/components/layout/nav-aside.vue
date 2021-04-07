<!--
 * @Description: 
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-04-06 10:55:53
 * @LastEditors: herman
 * @LastEditTime: 2021-04-07 11:18:38
 * @FilePath: /vue-js-herman/src/components/layout/nav-aside.vue
-->
<template>
    <div class="h-100">
        <el-aside :width="isColl.width" style="background-color: #67C23A">
            <el-menu default-active="1-4-1" :collapse="!isColl" :unique-opened="true">
                <el-submenu index="1">
                    <template #title>
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <template #title>分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template #title>选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <template #title>导航二</template>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <template #title>导航三</template>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <template #title>导航四</template>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <!-- <div class="menu-collapse" @click="setIsColl">
            <el-tooltip :content="isColl.tip" placement="left">
                <i :class="isColl.i"></i>
            </el-tooltip>
        </div> -->
    </div>
</template>

<script>
    import { defineComponent, ref, reactive } from 'vue'

    export default defineComponent({
        setup() {
            let isColl = reactive({
                width: '',
                isColl: true,
                i: '',
                tip: '',
            })
            // 设置折叠展开左侧导航
            const setIsColl = () => {
                isColl.isColl = !isColl.isColl
                isColl.i = isColl.isColl ? 'fas fa-angle-right' : 'fas fa-angle-left'
                isColl.tip = isColl.isColl ? '展开' : '收起'
                isColl.width = isColl.isColl ? '65px' : '230px'
            }
            setIsColl()
            return {
                setIsColl,
                isColl,
            }
        },
        components: {},
    })
</script>

<style scoped></style>
