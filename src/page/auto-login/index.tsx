import React from 'react'

import { URLQueryParserUtils } from '@yaolx/utils'

import { getToken } from '@/api/auth-api'

// 第三方登录回调地址
export default function () {
  const githubAuth = async () => {
    const query = URLQueryParserUtils.resolveQuery()
    const { code } = query
    if (code) {
      // 用code 换取token
      const result = await getToken(code)
      console.log('###', result)
    }
  }
  React.useEffect(() => {
    githubAuth()
  }, [])

  return <></>
}
