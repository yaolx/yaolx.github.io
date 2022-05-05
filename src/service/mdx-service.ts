import { compact, map, filter, keyBy } from 'lodash'

const mdxs = import.meta.globEager('../page/md/**/*.mdx')

interface RouterPops {
  parentPath: string
  path: string
  name: string
  date: string
  element: any
  parentTitle: string
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
      const parentPath = group.split('_')[0]
      const parentTitle = group.split('_')[1]
      return {
        parentPath,
        parentTitle,
        path: `/${parentPath}/${date}`,
        name,
        date,
        element: mdx.default
      }
    })
  )
}

export const mdxFiles = genMdxRouters()
// 生成路由
export const MdxRouters = (type) => {
  const mdxs = filter(mdxFiles, (mdx) => mdx.parentPath === type)
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
//  生成一级菜单
export const genMdxMenus = () => {
  const mainRoutes = keyBy(genMdxRouters(), 'parentPath')
  const rs = map(mainRoutes, (c, key) => {
    return {
      key,
      title: c.parentTitle
    }
  })
  return rs
}
