import { RouteObject } from 'react-router-dom'

import { filter } from 'lodash'
import { makeAutoObservable } from 'mobx'

import { mdxFiles, genMdxMenus } from '@/service/mdx-service'

type routersProps = RouteObject & {
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
  mdxFiles: routersProps[] = []
  // mdx菜单
  mdxMenus: any
  // 初始化mdx数据
  initMdx = () => {
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
}

export default new GlobalStore()
