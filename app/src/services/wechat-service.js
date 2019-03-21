import {spliceUrlParams} from '../utils/index'

class WechatService {
    constructor() {
        this.config = {
            appid: 'wx74e9c2468360d8d2',
            authUrl: 'https://open.weixin.qq.com/connect/oauth2/authorize',
            urlEnd: '#wechat_redirect'
        }
    }

    getAuthorizeUrl(redirectUri) {
        const {appid, authUrl, urlEnd} = this.config

        const params = {
            appid,
            redirect_uri: redirectUri, // 'http://m.oilcard.vip'
            response_type: 'code',
            scope: 'snsapi_userinfo',
            state: '1'
        }

        const paramStr = spliceUrlParams(params)
        return authUrl + '?' + paramStr + urlEnd
    }

    authorization(redirectUri) {
        const url = this.getAuthorizeUrl(redirectUri)
        console.log(url)
    }
}

export default WechatService
