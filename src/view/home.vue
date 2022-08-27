<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="auto">
                <el-menu default-active="2" class="el-menu-vertical" :collapse="is_collapse" router>
                    <el-menu-item>
                        <span>{{ config.title }}</span></el-menu-item>
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <Fold/>
                            </el-icon>
                            <span>首页</span>
                        </template>
                    </el-sub-menu>
                      <el-sub-menu index="2">
                         <template #title>
                            <el-icon>
                                <Setting/>
                            </el-icon>
                            <span>监控中心</span>
                        </template>
                        <el-menu-item index="/menu1">控制台</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon>
                                <Setting/>
                            </el-icon>
                            <span>设置中心</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/login">个人中心</el-menu-item>
                            <el-menu-item index="1-2">系统设置</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-container style="width: auto">
                <!-- 头部 -->
                <el-header style="height: 50px; background-color: #ffffff;">
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
                                            <el-dropdown-item command="userInfo"><route-link>个人中心</route-link></el-dropdown-item>
                                            <el-dropdown-item command="logout">退出</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </div>
                        </el-col>
                    </el-row>
                </el-header>

<!--                <TopBar />-->
                <el-main style="background-color: #ffffff;height:0;flex-grow:1;" class="el-main">
                     <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
    //组件script
    import {Fold, Setting, Expand} from "@element-plus/icons";
    import TopBar from "@/components/TopBar";
    import config from "@/config";
    import { useStore } from 'vuex';
    import {ref} from 'vue';

    import { computed } from 'vue';

    // 左侧菜单是否展开
    const is_collapse = ref(false)

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
     height: 100vh;//添加此属性

    }

    .common-layout {
        background-color: #E9EBEE;
    }

</style>