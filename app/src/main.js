import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SvgIcon from 'vue-svgicon'

import './assets/styles/common.scss'
import './assets/icons'

Vue.use(SvgIcon, {tagName: 'icon'})


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
