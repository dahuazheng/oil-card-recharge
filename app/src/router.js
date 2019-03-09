import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import OilRecharge from './pages/OilRecharge'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: '首页'
            }
        }, {
            path: '/oil-recharge',
            name: 'oilRecharge',
            component: OilRecharge,
            meta: {
                title: '油卡充值'
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router