import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './views/HomePage.vue'
import HelpCenterPage from './views/HelpCenterPage.vue'
// 贷款列表页
import List from './views/List.vue'
// 我的身份页
import Identity from './views/Identity.vue'

let routes = [
    {
        path: '/home',
        component: HomePage,
        name: '验证学籍信息',
        hidden: true
    },
    {
        path: '/help',
        component: HelpCenterPage,
        name: '帮助中心',
        hidden: true
    },
    {
        path: '/',
        component: HomePage,
        // redirect: { path: '/index.html' },
        hidden: true
    },
    {
      path: '/list',
      component: List,
      hidden: true
    },
    {
      path: '/identity',
      component: Identity,
      hidden: true
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
