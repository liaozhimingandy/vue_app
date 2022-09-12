<template>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
</template>

<script>
    export default {
        name: 'App',
    }
</script>
<style>
/*去除默认的边距*/
    html, body{
        margin: 0px;
        padding: 0px;
    }
    #app {
        font-family: -apple-system-font, BlinkMacSystemFont, Microsoft YaHei, Microsoft YaHei UI, Helvetica Neue, PingFang SC, Hiragino Sans GB, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }
</style>
