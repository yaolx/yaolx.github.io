import { RouteObject } from 'react-router-dom'

import { makeAutoObservable } from 'mobx'

import { genMdxRouters, genMdxMenus } from '@/service/mdx-service'

type routersProps = RouteObject & {
  name: string
  date: string
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

  mdxRouters: routersProps[] = []

  mdxMenus: any

  initMdx = () => {
    this.mdxRouters = genMdxRouters()
    this.mdxMenus = homeMenu.concat(genMdxMenus()).concat(fixedMenus)
  }
}

export default new GlobalStore()
