export function startDebug() {
  // 获取search中的参数
  const params = new URLSearchParams(window.location.search)
  const debug = params.get('debug')
  if (debug === '1') {
    window.localStorage.setItem('debug', '1')
  }
  // 本地开发或者url中有带debug=1，则开启eruda调试
  if (window.localStorage.getItem('debug') === '1') {
    const debugTool = params.get('debug_tool') || 'eruda'
    // 动态引入，避免被打包到vendor中
    // === eruda实现
    if (debugTool === 'eruda') {
      import('eruda').then((eruda) => {
        eruda.default.init()
      })
    }
    // === vconsole实现
    if (debugTool === 'vconsole') {
      import('vconsole').then((VConsole) => {
        new VConsole.default()
      })
    }
  }
}
