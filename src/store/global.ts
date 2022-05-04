import { RouteObject } from 'react-router-dom'

import { makeAutoObservable } from 'mobx'

// import { mdxRouters } from '@/service/mdx-service'

type routersProps = RouteObject & {
  name: string
  date: string
}

class GlobalStore {
  constructor() {
    makeAutoObservable(this)
  }

  mdxRouters: routersProps[] = []

  initMdx = () => {
    // this.mdxRouters = mdxRouters()
  }
}

export default new GlobalStore()
