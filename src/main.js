import { createApp } from 'vue';
import App from './App.vue';

//导入路由
import router from "@/route";

//导入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

//实例化
createApp(App).use(router).use(ElementPlus).mount('#app');
