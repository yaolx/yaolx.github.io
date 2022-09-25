import { compact, map, filter, keyBy, isEmpty } from 'lodash'

const mdxs = import.meta.glob('../page/md/**/*.mdx')

export let mdxFiles: RouterPops[] = []
// 解析md文件夹下的markdown文件，生成路由
export const genMdxRouters = (): RouterPops[] => {
  let cacheParentPath = ''
  // md下所有markdown文件
  if (isEmpty(mdxFiles)) {
    mdxFiles = compact(
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
        const params: RouterPops = {
          parentPath,
          parentTitle,
          path: `/${parentPath}/${date}`,
          key: `/${parentPath}/${date}`,
          name,
          date,
          element: mdx
        }
        if (parentPath !== cacheParentPath) {
          cacheParentPath = parentPath
          params.path = `/${parentPath}`
        }
        return params
      })
    )
  }
  return mdxFiles
}

// 获取二级菜单
export const genSubMdxRouters = (type) => {
  return filter(mdxFiles, (mdx) => mdx.parentPath === type)
}
//  生成一级菜单
export const genMdxMenus = () => {
  const mainRoutes = keyBy(mdxFiles, 'parentPath')
  const rs = map(mainRoutes, (c, key) => {
    return {
      key,
      title: c.parentTitle
    }
  })
  return rs
}
