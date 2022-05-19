import { filter, first, groupBy, map, take, toPairsIn, find } from 'lodash'
import { makeAutoObservable } from 'mobx'

import { getIssues } from '@/api/issue-api'
import { mdxFiles, genMdxMenus } from '@/service/mdx-service'

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
  mdxFiles: RouterPops[] = []
  // mdx菜单
  mdxMenus: any
  // 当前页的mdx
  curMdx: Partial<RouterPops> = {}
  // 初始化mdx数据
  initMdx = async () => {
    this.mdxMenus = homeMenu.concat(genMdxMenus()).concat(fixedMenus)
    const issues = await getIssues()
    this.mdxFiles = map(mdxFiles, (file) => {
      const issue = find(issues, {
        title: file.name
      })
      return {
        ...file,
        comments: issue?.comments || 0,
        reactions: issue?.reactions?.total_count || 0,
        id: issue?.number
      }
    })
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

  setCurMdx = (key) => {
    this.curMdx =
      find(this.mdxFiles, {
        key
      }) || {}
  }
}

export default new GlobalStore()
