import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import OilRecharge from './pages/OilRecharge'
import OilApply from './pages/OilApply'
import OilNotes from './pages/OilNotes'
import OilCardList from './pages/OilCardList'
import OilCardAdd from './pages/OilCardAdd'

import AgentRebate from './pages/AgentRebate'

import UserCenter from './pages/UserCenter'
import UserWithdraw from './pages/UserWithdraw'
import UserPopularize from './pages/UserPopularize'
import UserBonus from './pages/UserBonus'
import UserRecord from './pages/UserRecord'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    base: './',
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
            path: '/oil-apply',
            name: 'oilApply',
            component: OilApply,
            meta: {
                title: '油卡申请'
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
        }, {
            path: '/oil-card-add',
            name: 'oilCardAdd',
            component: OilCardAdd,
            meta: {
                title: '添加油卡'
            }
        }, {
            path: '/agent-rebate',
            name: 'agentRebate',
            component: AgentRebate,
            meta: {
                title: '代理返佣'
            }
        }, {
            path: '/user-center',
            name: 'userCenter',
            component: UserCenter,
            meta: {
                title: '个人中心'
            }
        }, {
            path: '/user-withdraw',
            name: 'userWithdraw',
            component: UserWithdraw,
            meta: {
                title: '提现'
            }
        }, {
            path: '/user-popularize',
            name: 'userPopularize',
            component: UserPopularize,
            meta: {
                title: '推广链接'
            }
        }, {
            path: '/user-bonus',
            name: 'userBonus',
            component: UserBonus,
            meta: {
                title: '奖金明细'
            }
        }, {
            path: '/user-record',
            name: 'userRecord',
            component: UserRecord,
            meta: {
                title: '提现记录'
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
