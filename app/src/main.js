import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SvgIcon from 'vue-svgicon'
import VueClipboard  from 'vue-clipboard2'
import {Icon,Toast, Area, Popup} from 'vant'


import './assets/styles/common.scss'
import './assets/styles/fixed-vant.scss'
import './assets/icons'

Vue.use(SvgIcon, {tagName: 'icon'})
Vue.use(VueClipboard)

Vue.use(Icon)
Vue.use(Toast)
Vue.use(Area)
Vue.use(Popup)


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
