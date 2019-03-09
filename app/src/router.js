import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import OilRecharge from './pages/OilRecharge'
import OilNotes from './pages/OilNotes'
import OilCardList from './pages/OilCardList'
import OilCardAdd from './pages/OilCardAdd'
import OilCustomPrice from './pages/OilCustomPrice'

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
        }, {
            path: '/oil-notes',
            name: 'oilNotes',
            component: OilNotes,
            meta: {
                title: '注意事项'
            }
        }, /*{
            path: '/oil-card-list',
            name: 'oilCardList',
            component: OilCardList,
            meta: {
                title: '油卡列表'
            }
        },*/ {
            path: '/oil-card-list/:cardId',
            name: 'oilCardList',
            component: OilCardList,
            meta: {
                title: '油卡列表'
            }
        },{
            path: '/oil-card-add',
            name: 'oilCardAdd',
            component: OilCardAdd,
            meta: {
                title: '添加油卡'
            }
        },{
            path: '/oil-custom-price',
            name: 'oilCustomPrice',
            component: OilCustomPrice,
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