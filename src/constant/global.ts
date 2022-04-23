export const isMobile = navigator.userAgent.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
)
  ? 'h5'
  : 'pc'
// 设备参数集合，用策略模式，方便以后取值，维护
export const deviceParams = {
  h5: {
    sliderWidth: 150
  },
  pc: {
    sliderWidth: 200
  }
}

export const sliderWidth = deviceParams[isMobile].sliderWidth
