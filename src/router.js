import Vue from 'vue'
import VueRouter from 'vue-router'

const HomePage = resolve => require.ensure([], () => resolve(require('@/views/HomePage.vue')), 'HomePage')
const HelpCenterPage = resolve => require.ensure([], () => resolve(require('@/views/HelpCenterPage.vue')), 'HelpCenterPage')
const About = resolve => require.ensure([], () => resolve(require('@/views/About.vue')), 'About')
const NotFound = resolve => require.ensure([], () => resolve(require('@/views/404.vue')), '404')
const Identity = resolve => require.ensure([], () => resolve(require('@/views/Identity.vue')), 'Identity')
const Agreement = resolve => require.ensure([], () => resolve(require('@/views/Agreement.vue')), 'Agreement')
const Landing = resolve => require.ensure([], () => resolve(require('@/views/Landing.vue')), 'Landing')
const WeidaiAgreement = resolve => require.ensure([], () => resolve(require('@/views/WeidaiAgreement.vue')), 'WeidaiAgreement')
const LoanRate = resolve => require.ensure([], () => resolve(require('@/views/LoanRate.vue')), 'LoanRate')
const NewYearLanding = resolve => require.ensure([], () => resolve(require('@/views/NewYearLanding.vue')), 'NewYearLanding')
const Product = resolve => require.ensure([], () => resolve(require('@/views/Product.vue')), 'Product')
const HelpCenter = resolve => require.ensure([], () => resolve(require('./views/HelpCenter.vue')), 'HelpCenter')
const Coupon = resolve => require.ensure([], () => resolve(require('./views/Coupon.vue')), 'Coupon')

let routes = [
    {
        path:'/coupon',
        component: Coupon,
        name: '我的优惠券'
    },
    {
        path:'/helpCenter',
        component: HelpCenter,
        name: '帮助中心'
    },
    {
        path:'/',
        component: Product,
        name: '贷款'
    },
    {
        path:'/about',
        component: About,
        name: '关于'
    },
    {
        path:'/landing/:Uid',
        component: Landing,
        name: '熊猫贷款'
    },
    {
        path:'/nyLanding/:Uid',
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
        hidden: true
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
