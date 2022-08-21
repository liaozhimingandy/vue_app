<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="auto">
                <el-menu default-active="2" class="el-menu-vertical"  :collapse="is_collapse">
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
                        <span>系统管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container style="width: auto">
                <!-- 头部 -->
                <el-header style="height: 50px; background-color: #ffffff;" >
                    <el-row :gutter="0" style="height: 100%;  align-items: center;">
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
                        >
                            <el-button text bg @click="is_collapse = !is_collapse">
                                <el-icon size="30px">
                                    <Expand v-if="is_collapse"/>
                                    <Fold v-else />
                                </el-icon>
                            </el-button>

                        </el-col>
                        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
                        >
                        </el-col>
                        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
                        >
                        </el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
                        >
                            <div class="grid-content ep-bg-purple-light"
                            >
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
                        </el-col>
                    </el-row>
                </el-header>

                <TopBar />
                <el-main style="background-color: #ffffff">Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
    //组件script
    import {Fold, Setting, Expand} from "@element-plus/icons";
    import TopBar from "@/components/TopBar";
    import config from "@/config";
    import {ref} from 'vue';


    import useStore from 'vuex';
    import { computed } from 'vue';

    const is_collapse = ref(true)

    computed(()=>{
        console.info(is_collapse)
    })





</script>

<style lang="less" scoped>

    /* 设置导航栏高度为页面高度 */
    .el-menu-vertical {
        height: 100vh;
    }
    .el-menu-vertical:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }

    .common-layout {
        background-color: #E9EBEE;
    }
</style>