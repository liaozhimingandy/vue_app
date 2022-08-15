<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">侧边菜单</el-aside>
      <el-container>
        <el-header>首页</el-header>
        <el-main><router-link to="/about">点击到达关于页面</router-link></el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>