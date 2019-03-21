import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'
// import {Toast} from '../$common/idea-ui'

const defaults = {
    baseURL: 'http://api.oilcard.vip/api',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    timeout: 100000
}

// 添加请求拦截器
axios.interceptors.request
    .use(config => {
        // 默认请求配置
        Object.assign(config, defaults)

        // token lang data
        config.headers.token = config.headers.token || Cookies('OIL.token') || ''
        // config.headers.lang = config.headers.lang || Cookies('OIL.lang') || ''
        config.data = qs.stringify(config.data)

        return config
    }, error => {
        return Promise.reject(error);
    })

// 添加响应拦截器
axios.interceptors.response
    .use(res => {
        const {headers, data} = res

        // 处理登录过期
        if (Number(data.status) === -2 && !window.location.href.includes('/login')) {
            const redirectURL = encodeURIComponent(window.location.href)
            window.location.href = `/login?redirect_url=${redirectURL}`
        }

        // 把 headers 的内容写进响应里
        res.data.headers = {...headers}

        return res
    })


export default axios
