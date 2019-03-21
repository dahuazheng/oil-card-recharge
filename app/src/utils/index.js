export function spliceUrlParams(params) {
    let result = ''

    Object.keys(params).map(param => {
        result += param + '=' + params[param] + '&'
    })

    //去掉最后一个&字符
    result = result.substr(0, result.length - 1);

    //如果存在转义字符，那么去掉转义
    result = result.replace(/[\'\"\\\/\b\f\n\r\t]/g, '')
    return result
}
