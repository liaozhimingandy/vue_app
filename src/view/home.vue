<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <el-menu default-active="2" class="el-menu-vertical">
                    <el-menu-item>
                        <span>{{ config.title }}</span></el-menu-item>
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <location/>
                            </el-icon>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group title="Group One">
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item one</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="1-4">
                            <template #title>item four</template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="2">
                        <el-icon>
                            <icon-menu/>
                        </el-icon>
                        <span>导航条</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <el-icon>
                            <setting/>
                        </el-icon>
                        <span>导航条</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <!-- 头部 -->
                <el-header style="text-align: right; font-size: 12px; height: 60px">
                    <div>
                    </div>
                     <div>
                    </div>
                     <div>
                    </div>
                     <div>
                    <el-dropdown :hide-on-click="false" trigger="click" @command="onCommand">
                        <span class="el-dropdown-link">
                          <el-avatar src="@/assets/img/log.svg"></el-avatar>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
                                <el-dropdown-item command="logout">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                     </div>
                </el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
    //组件script
    import {Fold, Setting} from "@element-plus/icons";
    import config from "@/config";


</script>

<style lang="less" scoped>

    /* 设置导航栏高度为页面高度 */
    .el-menu-vertical {
        height: 100vh;
    }
</style>