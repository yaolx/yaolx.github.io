import React from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'

import { groupBy, map } from 'lodash'

import HomeLayout from '@/component/layout/homeLayout'
import MdLayout from '@/component/layout/mdLayout'
import NotFound from '@/component/status/404'
import Home from '@/page/home'
import { genMdxRouters } from '@/service/mdx-service'

import About from '../page/about/index.mdx'
import Log from '../page/log/index.mdx'

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '/md',
    element: <HomeLayout isMd />,
    children: [
      {
        path: '/md/about',
        element: <About />
      },
      {
        path: '/md/log',
        element: <Log />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]
// 动态生成md文件路由
const mdxRouters = () => {
  const groupRouters = groupBy(genMdxRouters(), 'parentPath')
  return map(groupRouters, (mdxs, key) => {
    return {
      path: `/${key}`,
      element: <MdLayout type={key} />,
      children: map(mdxs, (mdx, n) => {
        const MdxComponent = mdx.element
        if (n === 0) {
          mdx.index = true
          mdx.path = ''
        }
        return {
          ...mdx,
          element: (
            <div className="markdown-body">
              <MdxComponent />
            </div>
          )
        }
      })
    }
  })
}

const Router = () => {
  const appRouter = useRoutes(routeConfig.concat(mdxRouters()))
  return appRouter
}

export default Router
