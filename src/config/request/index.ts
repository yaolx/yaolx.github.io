import axios from 'axios'
import { message } from 'antd'

const pendingMap = new Map()

let loadingCount = 0

function request(axiosConfig, customOptions) {
  const service = axios.create({
    baseURL: 'http://edu-base-gaokao-product.k8s.101.com', // 设置统一的请求前缀
    timeout: 10000 // 设置统一的超时时长
  })

  // 自定义配置
  const options = Object.assign(
    {
      repeatRequestCancel: true, // 是否开启取消重复请求, 默认为 true
      loading: false, // 是否开启loading层效果, 默认为false
      reductDataFormat: true, // 是否开启简洁的数据结构响应, 默认为true
      errorMessageShow: true, // 是否开启接口错误信息展示,默认为true
      codeMessageShow: false // 是否开启code不为0时的信息提示, 默认为false
    },
    customOptions
  )

  // 请求拦截
  service.interceptors.request.use(
    (config) => {
      removePending(config)
      options.repeatRequestCancel && addPending(config)
      // 创建loading实例
      if (options.loading) {
        loadingCount++
        if (loadingCount === 1) {
          message.loading('加载中...', 0)
        }
      }
      // 自动携带token
      if (config.auth && config.headers) {
        config.headers.Authorization = ''
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // 响应拦截
  service.interceptors.response.use(
    (response: any) => {
      removePending(response.config)
      options.loading && closeLoading(options) // 关闭loading
      if (options.codeMessageShow && response.data && response.data.code !== 0) {
        message.error(response.data.message)
        return Promise.reject(response.data) // code不等于0, 页面具体逻辑就不执行了
      }

      return options.reductDataFormat ? response.data : response
    },
    (error) => {
      error.config && removePending(error.config)
      options.loading && closeLoading(options) // 关闭loading
      options.errorMessageShow && httpErrorStatusHandle(error) // 处理错误状态码
      return Promise.reject(error) // 错误继续返回给到具体页面
    }
  )

  return service(axiosConfig)
}

export default request

/**
 * 处理异常
 * @param {*} error
 */
function httpErrorStatusHandle(error) {
  // 处理被取消的请求
  if (axios.isCancel(error)) return console.error('请求的重复请求：' + error.message)
  let messageText = ''
  if (error && error.response) {
    switch (error.response.status) {
      case 302:
        messageText = '接口重定向了！'
        break
      case 400:
        messageText = '参数不正确！'
        break
      case 401:
        messageText = '您未登录，或者登录已经超时，请先登录！'
        break
      case 403:
        messageText = '您没有权限操作！'
        break
      case 404:
        messageText = `请求地址出错: ${error.response.config.url}`
        break // 在正确域名下
      case 408:
        messageText = '请求超时！'
        break
      case 409:
        messageText = '系统已存在相同数据！'
        break
      case 500:
        messageText = '服务器内部错误！'
        break
      case 501:
        messageText = '服务未实现！'
        break
      case 502:
        messageText = '网关错误！'
        break
      case 503:
        messageText = '服务不可用！'
        break
      case 504:
        messageText = '服务暂时无法访问，请稍后再试！'
        break
      case 505:
        messageText = 'HTTP版本不受支持！'
        break
      default:
        messageText = '异常问题，请联系管理员！'
        break
    }
  }
  if (error.message.includes('timeout')) messageText = '网络请求超时！'
  if (error.message.includes('Network')) messageText = window.navigator.onLine ? '服务端异常！' : '您断网了！'
  message.error(messageText)
}

/**
 * 关闭Loading层实例
 * @param {*} _options
 */
function closeLoading(_options) {
  if (_options.loading && loadingCount > 0) loadingCount--
  if (loadingCount === 0) {
    message.destroy()
  }
}

/**
 * 储存每个请求的唯一cancel回调, 以此为标识
 * @param {*} config
 */
function addPending(config) {
  const pendingKey = getPendingKey(config)
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap.has(pendingKey)) {
        pendingMap.set(pendingKey, cancel)
      }
    })
}

/**
 * 删除重复的请求
 * @param {*} config
 */
function removePending(config) {
  const pendingKey = getPendingKey(config)
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey)
    // cancelToken()这里传递的pendingKey可以给到上面异常处理传递一个提示信息，查看控制台能打印取消的接口情况。
    // if(axios.isCancel(error)) return console.error('请求的重复请求：' + error.message);
    cancelToken(pendingKey)
    pendingMap.delete(pendingKey)
  }
}

/**
 * 生成唯一的每个请求的唯一key
 * @param {*} config
 * @returns
 */
function getPendingKey(config) {
  let { data } = config
  // response里面返回的config.data是个字符串对象
  if (typeof data === 'string') data = JSON.parse(data)
  return [config.url, config.method, JSON.stringify(config.params), JSON.stringify(data)].join('&')
}
