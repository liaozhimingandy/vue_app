<template>
  <el-form
    ref="zhuceUserRef"
    label-width="120px"
    class="registerForm sign-up-form"
  >
    <h2>注册</h2>
    <el-form-item label="用户名" prop="name">
      <el-input  placeholder="请输入用户名"></el-input>
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
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input
        type="password"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>

    <el-form-item label="选择身份">
      <el-select  placeholder="请选择身份">
        <el-option label="管理员" value="admin"></el-option>
        <el-option label="用户" value="user"></el-option>
        <el-option label="游客" value="visitor"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        >注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>

</script>

<style>
</style>