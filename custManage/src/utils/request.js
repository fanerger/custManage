import toast from './toast'
// 请求数据拼接
const paramType = data => {
  let paramArr = []
  let paramStr = ''
  for (let attr in data) {
    paramArr.push(attr + '=' + data[attr])
  }
  paramStr = paramArr.join('&')
  return paramStr
}
const baseURL = 'http://192.168.10.157'
// ProUrl: 'https://phone.xxjr.com',
// DevUrl: 'http://192.168.10.182'
// 公共请求方法
const request = (obj) => {
  let data = obj['data'] || {}
  if (global.signId) data['signId'] = global.signId
  console.log(data)
  fetch(`${baseURL}${obj['url']}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: paramType(data)
  })
  .then((response) => {
    let signId = response.headers.map.signid
    if (signId) {
      if (signId === 'needLogin') {
        toast('登录过期，请重新登录')
      } else {
        storage.setItem('signId', signId)
        global.signId = signId
      }
    }
    return response.json()
  })
  .then((res) => { // 上面的转好的json
    if (res.success) {
      if (obj.hasOwnProperty('success')) obj.success(res)
    } else {
      toast(res.message || '连接超时')
      if (obj.hasOwnProperty('fail')) {
        obj.fail(res)
      }
    }
  })
  .catch((error)=> {
    toast('error')
  })
}
export default request
