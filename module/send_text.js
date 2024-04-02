const getCheckToken = require('../util/check-token')

// 私信

module.exports = async (query, request) => {
  query.cookie.os = 'pc'

  const ct = await getCheckToken()
  if (!ct) {
    return
  }
  console.log('获取到checkToken', ct)

  const data = {
    checkToken: ct,
    type: 'text',
    msg: query.msg,
    userIds: '[' + query.user_ids + ']',
  }
  return request('POST', `https://music.163.com/weapi/msg/private/send`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
