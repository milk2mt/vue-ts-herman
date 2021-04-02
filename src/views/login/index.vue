<!--
 * @Description: 登录页
 * @Version: v1.0
 * @Author: herman
 * @Date: 2021-03-30 12:04:14
 * @LastEditors: herman
 * @LastEditTime: 2021-04-01 09:25:30
 * @FilePath: /vue-js-herman/src/views/login/index.vue
-->

<template>
    <div v-loading="loading">
        <div class="loginPanel">
            <h3>用户登录</h3>
            <el-form class="loginForm" ref="loginRef" :model="loginForm" :rules="loginRules">
                <el-form-item prop="username">
                    <el-input size="medium" ref="username" v-model="loginForm.username" placeholder="请输入账号..." tabindex="1">
                        <template v-slot:prepend>
                            <i class="fa fa-id-card"></i>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input ref="password" v-model="loginForm.password" :type="passwordType" tabindex="2">
                        <template v-slot:prepend style="width: 15px">
                            <i class="fa fa-key"></i>
                        </template>
                        <template v-slot:append>
                            <el-button @click="showPassword" :icon="passwordType === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye'"></el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button size="medium" type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts">
    // 登陆api
    import { onLogin } from '@/api/login'
    // 设置token
    import { setToken, delToken } from '@/utils/auth'
    import { defineComponent, ref, reactive, unref } from 'vue'
    import { useRouter } from 'vue-router'
    import Store from '@/store'

    export default defineComponent({
        setup() {
            const loginRef = ref<any>(null)
            const router = useRouter()
            let loginForm = reactive({
                username: process.env.NODE_ENV === 'development' ? 'admin' : '',
                password: process.env.NODE_ENV === 'development' ? '2' : '',
            })
            let loginRules = reactive({
                username: {
                    required: true,
                    message: '账号不能为空',
                    target: 'blur',
                },
                password: {
                    required: true,
                    message: '密码不能为空',
                    target: 'blur',
                },
            })
            let passwordType = ref('password')
            const showPassword = () => {
                if (passwordType.value === 'password') {
                    passwordType.value = ''
                } else {
                    passwordType.value = 'password'
                }
            }
            const onSubmit = () => {
                loginRef.value.validate((ok: boolean) => {
                    if (ok) {
                        // 调用登陆api
                        onLogin(loginForm).then((data: any) => {
                            console.log("🚀 ~ file: index.vue ~ line 82 ~ onLogin ~ data", data)
                            setToken(data.access_token)
                            // 成功
                            //if (data && data.access_token && data.name) {}
                            router.push({ path: '/' })
                        })
                    }
                })
            }
            return { loginRef, loginForm, loginRules, passwordType, showPassword, onSubmit }
        },
        computed: {
            loading() {
                console.log(Store.state.loading)
                return Store.state.loading
            },
                
        },
        created() {
            // 页面的回车事件
            var vm = this
            document.onkeydown = function(e) {
                if ((<any>window).event.keyCode == 13) {
                    vm.onSubmit()
                }
            }
            document.title = this.$route.meta.title as string
        },
    })
</script>

<style scoped></style>
