export const deviceEnv = navigator.userAgent.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
)
  ? 'h5'
  : 'pc'
// 设备参数集合，用策略模式，方便以后取值，维护
export const deviceParams = {
  h5: {
    mdSiderWidth: 150,
    homeSiderWidth: '100%'
  },
  pc: {
    mdSiderWidth: 200,
    homeSiderWidth: 300
  }
}

export const mdSiderWidth = deviceParams[deviceEnv].mdSiderWidth
export const homeSiderWidth = deviceParams[deviceEnv].homeSiderWidth
