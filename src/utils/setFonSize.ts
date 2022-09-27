// 设计稿宽度
const DESIGN_WIDTH = 375

// pad尺寸
const MAX_PAD_WIDTH = 1000

export default function setFontSize(designWidth = DESIGN_WIDTH, maxWidth = MAX_PAD_WIDTH) {
  // todo 加入dpr处理
  const docEl = document.documentElement
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  const recalc = function () {
    const { clientWidth } = docEl
    if (!clientWidth) return
    // 设计稿对应的vw
    const vw = (100 / designWidth) * 100
    // 小于等于1000px的ratio = 1
    // 大于1000px的ratio = 设备宽度除以设计稿宽度
    let ratio = 1
    if (clientWidth >= maxWidth) {
      ratio = Math.round(clientWidth / DESIGN_WIDTH)
    }
    docEl.style.fontSize = `${vw / ratio}vw`
  }

  if (document.addEventListener) {
    window.addEventListener(resizeEvt, recalc, false)
    document.addEventListener('DOMContentLoaded', recalc, false)
  }
}

setFontSize()
