import router from '@/router/index'
// 设置白名单
let WHITELIST = [
    '/login',
    '/home'
]
router.beforeEach((to, from, next) => {
    // 错误导航
    if(!to.matched.length) {
        next(`/error`);
    } else if(WHITELIST.indexOf(to.path) > -1) {
        next();
    } else{
        next(`/login?redirect=${to.path}`);
    }
})

