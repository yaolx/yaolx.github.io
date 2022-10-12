import { URLQueryParserUtils } from '@yaolx/utils'

export function startDebug() {
  // 获取search中的参数
  const { debug } = URLQueryParserUtils.resolveQuery()
  if (debug === '1') {
    window.localStorage.setItem('debug', '1')
  }
  // 本地开发或者url中有带debug=1，则开启vconsole调试
  if (window.localStorage.getItem('debug') === '1') {
    // 动态引入，避免被打包到vendor中
    import('vconsole').then((VConsole) => {
      new VConsole.default()
    })
  }
}
