module.exports = {
    lintOnSave: false,
    devServer: {
        hot: true,
        disableHostCheck: true, // 禁用webpack热重载检查 解决热更新失效问题
    }
}
