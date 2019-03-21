import httpService from '../services/http-service'

class OilApi {
    // 获取充值价格列表
    static getPrices() {
        return httpService.get('/prices')
    }
}

export default OilApi
