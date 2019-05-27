import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/login'
import Home from '../views/home'
import Error from '../views/error/error'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login',
        meta: {
            title: 'login',
        },
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: 'login',
        },
    },{
        path: '/home',
        component: Home,
        meta: {
            title: 'home',
        },
    },
    {
        path:'/error',
        component:Error
    }

]

export default new VueRouter({
    routes
})