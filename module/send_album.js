// 私信专辑
const getCheckToken = require('../util/check-token')

module.exports = async (query, request) => {
  query.cookie.os = 'ios'
  query.cookie.appver = '8.20.21'

  const ct = await getCheckToken()
  if (!ct) {
    return
  }
  console.log('获取到checkToken', ct)

  const data = {
    checkToken: ct,
    id: query.id,
    msg: query.msg || '',
    type: 'album',
    userIds: '[' + query.user_ids + ']',
  }
  return request('POST', `https://music.163.com/api/msg/private/send`, data, {
    crypto: 'api',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
