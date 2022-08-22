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
                            <span>导航一</span>
                        </template>
                    </el-sub-menu>
                    <el-menu-item index="2">
                        <router-link to="/login"><el-icon>
                                <Fold/>
                            </el-icon>
                             </router-link>
                        <span> <router-link to="/login">导航条</router-link></span>

                    </el-menu-item>
                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon>
                                <Setting/>
                            </el-icon>
                            <span>系统设置</span>
                        </template>
                        <el-menu-item-group title="用户">
                            <el-menu-item index="/login">个人中心</el-menu-item>
                            <el-menu-item index="1-2">角色管理</el-menu-item>
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

                <TopBar />
                <el-main style="background-color: #ffffff" class="el-main">
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

    const is_collapse = ref(true)

    const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))

    computed(()=>{
        console.info(is_collapse)
    })

    const list_menu = computed(()=>{
        return store
    });



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

    .el-main{
        position: absolute;
  left: 100px;
  right: 0;
  top: 95px;
  bottom: 0;
  overflow-y: scroll;
    }
</style>