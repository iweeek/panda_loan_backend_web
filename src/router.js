import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './views/HomePage.vue'
import HelpCenterPage from './views/HelpCenterPage.vue'
import About from './views/about.vue'
import NotFound from './views/404.vue'

let routes = [
    {
        path:'/about',
        component: About,
        name: '熊猫贷款',
    },
    {
        path: '/',
        redirect: { path: '/about' }
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.name) {
        document.title = to.name;
    }
    next();
})

export default router;
