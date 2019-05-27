import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/login'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Login,
    },{
        path: '/home',
        component: Home,
    },

]

export default new VueRouter({
    routes
})