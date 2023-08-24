import axios from "axios";
//随机ID：时间戳+4位随机数
function getRandomId() {
    return 't-' + new Date().getTime() + '-n-' + getRandomNum(1000, 9999)
}
//随机数生产器
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
//API地址
const api = 'api/gateway'
//请求封装
function gatewayAPI(method, params) {
    let id = getRandomId()
    return axios.post(api, { id, method, params })
}

export { gatewayAPI }
