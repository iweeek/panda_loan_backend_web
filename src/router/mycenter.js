const MyConter = resolve => require.ensure([], () => resolve(require('../views/mycenter/myConter.vue')), 'MyConter') //个人中心页面测试

export default [

    {
        path: '/myConter',
        component: MyConter,
        hidden: true
    },
]