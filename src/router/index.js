import {createRouter, createWebHistory } from 'vue-router';

//配置路由
import home from "@/view/home";
import about from "@/view/about";

const routes = [
    {path: '/', redirect: '/home', name:'index'},
    {path: '/home', component: home, name:'home'},
    {path: '/about', component: about, name:'about'},
    {path: '/user/:id', component: () => import("../view/user.vue"), name:'user'},
    {path: '/login', component: () => import("../view/login.vue"), name:'login'},
     {path: '/demo', component: () => import("../components/SignupForm.vue"), name:'demo'},
    {path: '/:catchALL(.*)',  component: () => import("../view/404.vue")},
];

//3. 创建路由实例并传递 `routes` 配置。
const router = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式
    history: createWebHistory(),
    routes: routes, // `routes: routes` 的缩写
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
   // 可以用来判断是否登录
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()
    // 在localStorage中获取token
    const token = localStorage.getItem('token');
    // 判断是否登录
    if(!token && to.name !== 'login'){
        //跳转到登录页面
        // router.push('/login');
        next()
    }else if(token && to.name === 'login'){
        //如果是已经登录,则跳转到首页
        console.info('已存在登录记录,正在跳转到首页')
        // router.push('/');
        next()
    }else{
        next();
    }

});

export default router;