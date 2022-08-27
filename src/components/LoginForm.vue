<template>
    <el-form
            ref="LoginForm"
            label-width="100px"
            class="LoginForm sign-in-form"
            :model="user"
            :rules="rules"
    >
        <h2>登录</h2>
        <el-form-item label="账号" prop="user_id">
            <el-input v-model="user.user_id"
                      placeholder="请输入登录账号..."
            ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input
                    type="password" v-model="user.password"
                    placeholder="请输入账号对应的密码..."
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="login('LoginForm')" type="primary" class="submit-btn">提交</el-button>
        </el-form-item>
        <!-- todo: 找回密码; -->
<!--        <div class="tiparea">-->
<!--            <p>忘记密码？ <a>立即找回</a></p>-->
<!--        </div>-->
    </el-form>
</template>

<script setup>
import {
  ref,
  unref,
    getCurrentInstance
} from 'vue'
import {useRouter} from 'vue-router'
    // @ts-ignore
    const { proxy } = getCurrentInstance();
    const router = useRouter()
    //引用表单
    const LoginForm = ref(null);
    const props = defineProps({
        user:{
                type: Object,
                required: true
            },
        rules:{
                type: Object,
                required: true
            }
        });

    // 触按钮点击事件
    const login = ()=>{
        const form = unref(LoginForm);
        if (!form) return
        form.validate((valid) => {
            if (valid) {
                //请求网络
                 proxy.$axios.get("http://127.0.0.1:4523/mock/513265/pet/2", props.user).then((res)=>{
                    if(res.data.code == 0){
                      console.log("登录成功");
                      // 登录成功，存储token到本地存储
                      // const {token} = res.data;
                      localStorage.setItem("token", res.data.code)
                      // 登录成功跳转至首页
                       router.push('/')
                }
                }).catch((e)=> {
                     // alert("失败!");
                     console.info('联网失败,登录失败')
                });
            }
        })

    }
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