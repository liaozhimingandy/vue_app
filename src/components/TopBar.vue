<template>
    <el-scrollbar class="process-wrap">
        <div class="scrollbar-flex-content">
            <p v-for="e in 50" :key="e" class="scrollbar-item">
                <el-tag size="large" closable type="success">首页{{e}}</el-tag>
            </p>

        </div>
    </el-scrollbar>
</template>

<script>
    export default {
        name: "TopBar"
    }
</script>

<style scoped>
.process-wrap {
    display: flex;
    height: auto;
    position: relative;
    padding: 0 10px;
    margin: 0px;
}
.scrollbar-flex-content {
  display: flex;
}

.scrollbar-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
</style>