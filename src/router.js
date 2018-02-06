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
import LoanRate from './views/LoanRate.vue'

import Product from './views/Product.vue'
import test from './views/test.vue'

// 熊猫贷款
import NewYearLanding from './views/panda/NewYearLanding.vue'

let routes = [{
        path: '/test',
        component: test,
        name: '贷款'
    },
    {
        path: '/',
        component: Product,
        name: '贷款'
    },
    {
        path: '/about',
        component: About,
        name: '关于'
    },
    {
        path: '/landing/:Uid',
        component: Landing,
        name: '熊猫贷款'
    },
    {
        path: '/nyLanding/:Uid',
        component: NewYearLanding,
        name: ''
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
        hidden: true,
        name: '注册协议'
    },
    {
        path: '/weidaiAgreement',
        component: WeidaiAgreement,
        hidden: true
    },
    {
        path: '/loanRate',
        component: LoanRate,
        name: '2018年贷款利率',
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