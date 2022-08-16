import {createRouter, createWebHistory } from 'vue-router';

//配置路由
import home from "@/view/home";
import about from "@/view/about";

const routes = [
    {path: '/', redirect: '/home', name:'index'},
    {path: '/home', component: home, name:'home'},
    {path: '/about', component: about, name:'about'},
    // {path: '*', component:not_found},
];

//3. 创建路由实例并传递 `routes` 配置。
const router = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式
    history: createWebHistory(),
    routes: routes, // `routes: routes` 的缩写
});

export default router;