import React from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'

import { MDXProvider } from '@mdx-js/react'
import { groupBy, map, cloneDeep } from 'lodash'

import Layout from '@/component/layout/index'
import NotFound from '@/component/status/404'
import Home from '@/page/home'
import { mdxFiles } from '@/service/mdx-service'
import { CodeBlock } from '@/ui-component'

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
  {
    path: '*',
    element: <NotFound />
  }
]

const components = {
  CodeBlock
}
// 动态生成md文件路由
const mdxRouters = () => {
  const groupRouters = groupBy(cloneDeep(mdxFiles), 'parentPath')
  return map(groupRouters, (mdxs, key) => {
    return {
      path: `/${key}`,
      element: <Layout type={key} />,
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
              <MDXProvider components={components}>
                <MdxComponent />
              </MDXProvider>
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
