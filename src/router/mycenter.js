const Xyconter = resolve => require.ensure([], () => resolve(require('../views/mycenter/Xyconter.vue')), 'Xyconter') //小赢白卡个人中心页面
const Mcconter = resolve => require.ensure([], () => resolve(require('../views/mycenter/mcconter.vue')), 'Mcconter') //莫愁周转
const Xhconter = resolve => require.ensure([], () => resolve(require('../views/mycenter/xhconter.vue')), 'Xhconter') //小花白卡

export default [

    {
        path: '/xyconter',
        component: Xyconter,
        hidden: true
    },
    {
        path: '/mcconter',
        component: Mcconter,
        hidden: true
    },
    {
        path: '/xhconter',
        component: Xhconter,
        hidden: true
    },
]