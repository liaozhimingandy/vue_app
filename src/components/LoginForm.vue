<template>
    <el-form
            ref="loginUserRef"
            label-width="100px"
            class="loginForm sign-in-form"
    >
        <h2>登录</h2>
        <el-form-item label="账号" prop="email">
            <el-input v-model="user"
                      placeholder="请输入登录账号..."
            ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input
                    type="password" v-model="password"
                    placeholder="请输入账号对应的密码..."
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="submit-btn">提交</el-button>
        </el-form-item>
        <!-- 找回密码 -->
        <div class="tiparea">
            <p>忘记密码？ <a>立即找回</a></p>
        </div>
    </el-form>
</template>

<script setup>
    import {ref} from 'vue'

    const user = ref('')
    const password = ref('')
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