<template>
    <el-form
            ref="LoginForm"
            label-width="100px"
            class="loginForm sign-in-form"
            :model="loginUser"
            :rules="rules"
    >
        <h2>登录</h2>
        <el-form-item label="账号" prop="email">
            <el-input v-model="loginUser.user_id"
                      placeholder="请输入登录账号..."
            ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input
                    type="password" v-model="loginUser.password"
                    placeholder="请输入账号对应的密码..."
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="login('LoginForm')" type="primary" class="submit-btn">提交</el-button>
        </el-form-item>
        <!-- 找回密码 -->
        <div class="tiparea">
            <p>忘记密码？ <a>立即找回</a></p>
        </div>
    </el-form>
</template>

<script setup>
    import { defineProps,getCurrentInstance,ref } from 'vue'

    // // 触发登录方法
    // const login = ()=>{
    //     console.log(ctx)
    // };
    // const loginUser = ref({
    //     user_id:'',
    //     password: ''
    // })
    const props = defineProps({
        loginUser:{
                type: Object,
                required: true
            },
            // rules:{
            //     type: Object,
            //     required: true
            // }
        });
</script>

<style>
    .submit-btn {
        width: 100%;
    }
    .tiparea {
        text-align: right;
        font-size: 12px;
        color: #333;
    }
    .tiparea p a {
        color: #409eff;
    }
</style>