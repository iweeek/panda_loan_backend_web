import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './views/HomePage.vue'
import HelpCenterPage from './views/HelpCenterPage.vue'

import About from './views/About.vue'
import NotFound from './views/404.vue'
import Identity from './views/Identity.vue'
import Agreement from './views/Agreement.vue'
import Landing from './views/Landing.vue'
import WeidaiAgreement from './views/WeidaiAgreement.vue'

let routes = [
    {
        path:'/about',
        component: About,
        name: '关于'
    },
    {
        path:'/landing/:Uid',
        component: Landing,
        name: '微贷'
    },
    {
        path: '/homepage',
        component: HomePage,
        // redirect: { path: '/index.html' },
        hidden: true
    },
    {
        path: '/identity',
        component: Identity,
        hidden: true
    },
    {
        path: '/agreement',
        component: Agreement,
        hidden: true
    },
    {
        path: '/weidaiAgreement',
        component: WeidaiAgreement,
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
