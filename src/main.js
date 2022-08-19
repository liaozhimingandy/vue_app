import { createApp } from 'vue';
import App from './App.vue';
import axios from './http.ts';

//导入路由
import router from "@/router";

//导入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
// 全局挂载axios
app.config.globalProperties.$axios = axios;
//实例化
app.use(router).use(ElementPlus).mount('#app');
