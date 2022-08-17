<template>
    <div id="app">
<!--        <h1>欢迎使用!</h1>-->
<!--        <p>-->
<!--            &lt;!&ndash;使用 router-link 组件进行导航 &ndash;&gt;-->
<!--            &lt;!&ndash;通过传递 `to` 来指定链接 &ndash;&gt;-->
<!--            &lt;!&ndash;`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签&ndash;&gt;-->
<!--            <router-link to="/">Go to Home</router-link>-->
<!--            <router-link :to="{name: 'about'}">Go to About</router-link>-->
<!--            <router-link :to="{name: 'user', params: {id: 110}}">查看用户</router-link>-->
<!--        </p>-->
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
        </div>

</template>

<script>
    export default {
        name: 'App',
    }
</script>
<style>
/*去除默认的边距*/
    body{
        margin: 0px;
        padding: 0px;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
