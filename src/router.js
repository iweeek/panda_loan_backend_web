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
const MyCoupon = resolve => require.ensure([], () => resolve(require('./views/MyCoupon.vue')), 'MyCoupon')
const Feedback = resolve => require.ensure([], () => resolve(require('./views/Feedback.vue')), 'Feedback')
const BindingBankcard = resolve => require.ensure([], () => resolve(require('./views/BindingBankcard.vue')), 'BindingBankcard')
const AboutUs = resolve => require.ensure([], () => resolve(require('./views/AboutUs.vue')), 'AboutUs')

const MSSDHelpCenter = resolve => require.ensure([], () => resolve(require('./views/mashangsudai/HelpCenter.vue')), 'MSSDHelpCenter')
const MSSDCoupon = resolve => require.ensure([], () => resolve(require('./views/mashangsudai/Coupon.vue')), 'MSSDCoupon')
const MSSDCouponRule = resolve => require.ensure([], () => resolve(require('./views/mashangsudai/CouponRule.vue')), 'MSSDCouponRule')
const MSSDFeedback = resolve => require.ensure([], () => resolve(require('./views/mashangsudai/Feedback.vue')), 'MSSDFeedback')
const MSSDBindingBankcard = resolve => require.ensure([], () => resolve(require('./views/mashangsudai/BindingBankcard.vue')), 'MSSDBindingBankcard')
const MSSDAboutUs = resolve => require.ensure([], () => resolve(require('./views/mashangsudai/AboutUs.vue')), 'MSSDAboutUs')
const MSSDFeeDeductionAgreement = resolve => require.ensure([], () => resolve(require('./views/mashangsudai/FeeDeductionAgreement.vue')), 'MSSDFeeDeductionAgreement')

const PAKDHelpCenter = resolve => require.ensure([], () => resolve(require('./views/pingankuaidai/HelpCenter.vue')), 'PAKDHelpCenter')
const PAKDCoupon = resolve => require.ensure([], () => resolve(require('./views/pingankuaidai/Coupon.vue')), 'PAKDCoupon')
const PAKDCouponRule = resolve => require.ensure([], () => resolve(require('./views/pingankuaidai/CouponRule.vue')), 'PAKDCouponRule')
const PAKDFeedback = resolve => require.ensure([], () => resolve(require('./views/pingankuaidai/Feedback.vue')), 'PAKDFeedback')
const PAKDBindingBankcard = resolve => require.ensure([], () => resolve(require('./views/pingankuaidai/BindingBankcard.vue')), 'PAKDBindingBankcard')
const PAKDAboutUs = resolve => require.ensure([], () => resolve(require('./views/pingankuaidai/AboutUs.vue')), 'PAKDAboutUs')
const PAKDFeeDeductionAgreement = resolve => require.ensure([], () => resolve(require('./views/pingankuaidai/FeeDeductionAgreement.vue')), 'PAKDFeeDeductionAgreement')

const YRJKHelpCenter = resolve => require.ensure([], () => resolve(require('./views/yirenjiekuan/HelpCenter.vue')), 'YRJKHelpCenter')
const YRJKCoupon = resolve => require.ensure([], () => resolve(require('./views/yirenjiekuan/Coupon.vue')), 'YRJKCoupon')
const YRJKCouponRule = resolve => require.ensure([], () => resolve(require('./views/yirenjiekuan/CouponRule.vue')), 'YRJKCouponRule')
const YRJKFeedback = resolve => require.ensure([], () => resolve(require('./views/yirenjiekuan/Feedback.vue')), 'YRJKFeedback')
const YRJKBindingBankcard = resolve => require.ensure([], () => resolve(require('./views/yirenjiekuan/BindingBankcard.vue')), 'YRJKBindingBankcard')
const YRJKAboutUs = resolve => require.ensure([], () => resolve(require('./views/yirenjiekuan/AboutUs.vue')), 'YRJKAboutUs')
const YRJKFeeDeductionAgreement = resolve => require.ensure([], () => resolve(require('./views/yirenjiekuan/FeeDeductionAgreement.vue')), 'YRJKFeeDeductionAgreement')

let routes = [
    {
        path: '/MSSDfeedback',
        component: MSSDFeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/MSSDbindingBankcard',
        component: MSSDBindingBankcard,
        name: '绑定银行卡',
        hidden: true
    },
    {
        path: '/MSSDcouponRule',
        component: MSSDCouponRule,
        name: '优惠券规则',
        hidden: true
    },
    {
        path: '/MSSDaboutUs',
        component: MSSDAboutUs,
        name: '关于我们',
        hidden: true
    },
    {
        path:'/MSSDcoupon',
        component: MSSDCoupon,
        name: '我的优惠券',
        hidden: true
    },
    {
        path:'/MSSDhelpCenter',
        component: MSSDHelpCenter,
        name: '帮助中心',
        hidden: true
    },
    {
        path:'/mssdfeeDeductionAgreement',
        component: MSSDFeeDeductionAgreement,
        name: '自动划扣协议',
        hidden: true
    },

    {
        path: '/pakdfeedback',
        component: PAKDFeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/pakdbindingBankcard',
        component: PAKDBindingBankcard,
        name: '绑定银行卡',
        hidden: true
    },
    {
        path: '/pakdcouponRule',
        component: PAKDCouponRule,
        name: '优惠券规则',
        hidden: true
    },
    {
        path: '/pakdaboutUs',
        component: PAKDAboutUs,
        name: '关于我们',
        hidden: true
    },
    {
        path:'/pakdcoupon',
        component: PAKDCoupon,
        name: '我的优惠券',
        hidden: true
    },
    {
        path:'/pakdhelpCenter',
        component: PAKDHelpCenter,
        name: '帮助中心',
        hidden: true
    },
    {
        path:'/pakdfeeDeductionAgreement',
        component: PAKDFeeDeductionAgreement,
        name: '自动划扣协议',
        hidden: true
    },
    
    
    {
        path: '/yrjkfeedback',
        component: YRJKFeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/yrjkbindingBankcard',
        component: YRJKBindingBankcard,
        name: '绑定银行卡',
        hidden: true
    },
    {
        path: '/yrjkcouponRule',
        component: YRJKCouponRule,
        name: '优惠券规则',
        hidden: true
    },
    {
        path: '/yrjkaboutUs',
        component: YRJKAboutUs,
        name: '关于我们',
        hidden: true
    },
    {
        path:'/yrjkcoupon',
        component: YRJKCoupon,
        name: '我的优惠券',
        hidden: true
    },
    {
        path:'/yrjkhelpCenter',
        component: YRJKHelpCenter,
        name: '帮助中心',
        hidden: true
    },
    {
        path:'/yrjkfeeDeductionAgreement',
        component: YRJKFeeDeductionAgreement,
        name: '自动划扣协议',
        hidden: true
    },

    {
        path: '/feedBack',
        component: Feedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/bindingBankcard',
        component: BindingBankcard,
        name: '绑定银行卡',
        hidden: true
    },
    {
        path: '/myCoupon',
        component: MyCoupon,
        name: '优惠券规则',
        hidden: true
    },
    {
        path: '/aboutUs',
        component: AboutUs,
        name: '关于我们',
        hidden: true
    },
    {
        path:'/coupon',
        component: Coupon,
        name: '我的优惠券',
        hidden: true
    },
    {
        path:'/helpCenter',
        component: HelpCenter,
        name: '帮助中心',
        hidden: true
	},
    {
        path: '/',
        component: Product,
        name: '产品列表'
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
