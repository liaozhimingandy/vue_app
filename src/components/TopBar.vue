<template>
    <el-scrollbar class="process-wrap">
        <div class="scrollbar-flex-content">
          <h3>{{ name }}</h3>
            <p v-for="e in 50" :key="e" class="scrollbar-item">
                <el-tag size="large" closable type="success">首页{{e}}</el-tag>
            </p>

        </div>
    </el-scrollbar>
</template>

<script setup>
    import {useStore} from 'vuex';
    import {computed} from "vue";

    const store = useStore();
    //使用状态的全局数据
    const name = computed(() =>{
      return store.state.name;
    });
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