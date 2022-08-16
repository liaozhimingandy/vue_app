<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <h5 class="mb-2">标准样式</h5>
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        active-text-color="#ffd04b"
                        background-color="#545c64"
                >
                    菜单区域

                </el-menu>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang="less" scoped>
  .common-layout {
    height: 100%;
  }

</style>