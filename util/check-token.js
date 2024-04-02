const axios = require('axios')

// 创建一个函数用于获取token
const getToken = async () => {
  try {
    // 使用axios发送GET请求
    const response = await axios.get(
      'http://52.81.109.126:3667/wy_token_private',
    )
    // 检查响应体是否包含token
    if (response.data && response.data.token) {
      console.log('Token:', response.data.token) // 控制台输出token
      return response.data.token // 返回token
    } else {
      console.error('Token未找到')
      return null
    }
  } catch (error) {
    // 错误处理
    console.error('获取Token时发生错误:', error)
    return null
  }
}

// 导出getToken函数，以便在其他文件中使用
module.exports = getToken
