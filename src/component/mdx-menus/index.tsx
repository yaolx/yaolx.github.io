import React from 'react'
import { map, random } from 'lodash'
import { RouteObject } from 'react-router-dom'

type mdxRouter = RouteObject & {
  name: string
  date: string
}

// md下所有markdown文件
const mdxs = import.meta.globEager('../../page/md/*.mdx')
// 解析md文件夹下的markdown文件，生成路由
const MdxsRouter: mdxRouter[] = map(mdxs, (mdx, key) => {
  // 根据匹配路径获取文件名，用来当path
  const parttern: string = key.replace(/..\/..\/page\/md\/(.*).mdx/, function (regexp, replacement) {
    return replacement
  })
  const name = parttern.split('-')[0] || ''
  const date = parttern.split('-')[1] || ''
  const path = date + parseInt(Math.random() * 10000 + '1')
  const MdxComponent = mdx.default
  return {
    path: `/md/${path}`,
    name,
    date,
    element: (
      <div className="markdown-body">
        <MdxComponent />
      </div>
    )
  }
})

export default MdxsRouter
