import { compact, map, filter } from 'lodash'

const mdxs = import.meta.globEager('../page/md/**/*.mdx')

interface RouterPops {
  parentPath: string
  path: string
  name: string
  date: string
  element: any
  index?: boolean
}
// 解析md文件夹下的markdown文件，生成路由
export const genMdxRouters = (): RouterPops[] => {
  // md下所有markdown文件
  return compact(
    map(mdxs, (mdx, key) => {
      // 根据匹配路径获取文件名，用来当path
      const reg = new RegExp('../page/md/(.*)/(.*).mdx')
      const parttern: string = key.replace(reg, function (regexp, r1, r2) {
        return r1 + '@' + r2
      })
      const arrParttern = parttern.split('@')
      const group = arrParttern[0] || ''
      const date = arrParttern[1] || ''
      const name = arrParttern[2] || ''
      return {
        parentPath: group,
        path: `/${group}/${date}`,
        name,
        date,
        element: mdx.default
      }
    })
  )
}

export const MdxRouters = (type) => {
  const mdxs = filter(genMdxRouters(), (mdx) => mdx.parentPath === type)
  return map(mdxs, (mdx, n) => {
    if (n === 0) {
      mdx.index = true
      mdx.path = ''
    }
    return {
      ...mdx
    }
  })
}
