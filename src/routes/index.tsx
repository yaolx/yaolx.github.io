import React from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'

import { groupBy, map, cloneDeep } from 'lodash'

import Layout from '@/component/layout/index'
import Mdx from '@/component/mdx'
import NotFound from '@/component/status/404'
// import AutoLogin from '@/page/auto-login'
import Home from '@/page/home'
import { mdxFiles } from '@/service/mdx-service'

import About from '../page/about/index.mdx'
import Log from '../page/log/index.mdx'

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '/md',
    element: <Layout isMd />,
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
  /* {
    path: 'auto-login',
    element: <AutoLogin />
  }, */
  {
    path: '*',
    element: <NotFound />
  }
]

// 动态生成md文件路由
const mdxRouters = () => {
  const groupRouters = groupBy(cloneDeep(mdxFiles), 'parentPath')
  return map(groupRouters, (mdxs, key) => {
    return {
      path: `/${key}`,
      element: <Layout type={key} />,
      children: map(mdxs, (mdx, n) => {
        const Element = mdx.element
        if (n === 0) {
          mdx.index = true
          mdx.path = ''
        }
        return {
          ...mdx,
          element: (
            <div className="markdown-body">
              <Mdx>
                <Element />
              </Mdx>
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
