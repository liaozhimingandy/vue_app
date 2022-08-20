<template>
  <el-form
    ref="zhuceUserRef"
    label-width="120px"
    class="SignupForm sign-up-form"
    :model="user"
    :rules="rules"
  >
    <h2>注册</h2>
    <el-form-item label="用户名" prop="name">
      <el-input placeholder="请输入用户名" v-model="user.user_id"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        placeholder="请输入 Email..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        placeholder="请输入密码"
        v-model="user.password"
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input
        type="password"
        placeholder="请输入密码"
        v-model="user.password2"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        >注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
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
</script>

<style>
</style>