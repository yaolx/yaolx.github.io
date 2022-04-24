import React from 'react'
import { RouteObject } from 'react-router-dom'

import { map, compact } from 'lodash'

type routersProps = RouteObject & {
  name: string
  date: string
}
const mdxs = import.meta.globEager('../../page/md/**/*.mdx')
// 解析md文件夹下的markdown文件，生成路由
const genMdxRouters = (type): routersProps[] => {
  // md下所有markdown文件
  return compact(
    map(mdxs, (mdx, key) => {
      // 根据匹配路径获取文件名，用来当path
      const reg = new RegExp('../../page/md/(.*)/(.*).mdx')
      const parttern: string = key.replace(reg, function (regexp, r1, r2) {
        return r1 + '@' + r2
      })
      const arrParttern = parttern.split('@')
      const mdType = arrParttern[0] || ''
      const date = arrParttern[1] || ''
      const name = arrParttern[2] || ''
      if (mdType !== type) {
        return undefined
      }
      const MdxComponent = mdx.default
      return {
        path: `/${type}/${date}`,
        name,
        date,
        element: (
          <div className="markdown-body">
            <MdxComponent />
          </div>
        )
      }
    })
  )
}

const MdxRouters = (type) => {
  return map(genMdxRouters(type), (mdx, index) => {
    if (index === 0) {
      mdx.index = true
      mdx.path = ''
    }
    return mdx
  })
}
export default MdxRouters
