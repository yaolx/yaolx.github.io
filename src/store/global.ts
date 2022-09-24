import { RouteObject } from 'react-router-dom'

import { filter, first, groupBy, map, take, toPairsIn } from 'lodash'
import { makeAutoObservable } from 'mobx'

import { mdxFiles, genMdxMenus } from '@/service/mdx-service'

type RoutersProps = RouteObject & {
  name: string
  date: string
  parentPath: string
  parentTitle: string
}
const homeMenu = [
  {
    key: '',
    title: '首页'
  }
]

const fixedMenus = [
  {
    key: 'github',
    title: 'github',
    url: 'https://github.com/yaolx/yaolx.github.io'
  },
  {
    key: 'md/about',
    title: '关于'
  },
  {
    key: 'md/log',
    title: '更新日志'
  }
]
class GlobalStore {
  constructor() {
    makeAutoObservable(this)
  }
  // mdx文件
  mdxFiles: RoutersProps[] = []
  // mdx菜单
  mdxMenus: any
  // 初始化mdx数据
  initMdx = async () => {
    this.mdxFiles = mdxFiles
    this.mdxMenus = homeMenu.concat(genMdxMenus()).concat(fixedMenus)
  }
  /**
   * 全局搜索文章
   * @param keyword
   * @returns
   */
  search = (keyword) => {
    const filterMdx = filter(this.mdxFiles, (mdx) => {
      return mdx.name.includes(keyword)
    })
    return filterMdx
  }
  /**
   * 获取分类的第一条文章
   */
  getMdxByGroup = () => {
    const groupMdx = map(toPairsIn(groupBy(this.mdxFiles, 'parentPath')), ([name, value]) => {
      const firstMdx = first(value)
      const files = take(value, 3)
      return {
        category: firstMdx?.parentTitle,
        files
      }
    })
    return groupMdx
  }
}

export default new GlobalStore()
