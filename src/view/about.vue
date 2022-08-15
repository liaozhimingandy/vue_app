<template>
    <h1>这是一个关于页面</h1>
    <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary" plain disabled>Primary</el-button>
        <el-button type="success" plain disabled>Success</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="info" :icon="Message" circle/>
        <el-button type="warning" :icon="Star" circle/>
        <el-button type="danger" :icon="Delete" circle/>
    </el-row>
    <router-link to="/">返回到首页</router-link>
</template>

<script>
    import {
        Delete,
        Star,
        Message
    } from '@element-plus/icons-vue';

    export default {
        name: "about",
        data() {
            return {
                Delete,
                Star,
                Message
            }
        }
    }
</script>