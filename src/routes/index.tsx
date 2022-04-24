import React from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'

import HomeLayout from '@/component/layout/homeLayout'
import MdLayout from '@/component/layout/mdLayout'
import MdxRouters from '@/component/mdx-menus'
import NotFound from '@/component/status/404'
import Home from '@/page/home'

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
  // md文件
  {
    path: '/front',
    element: <MdLayout type="front" />,
    children: MdxRouters('front')
  },
  {
    path: '/end',
    element: <MdLayout type="end" />,
    children: MdxRouters('end')
  },
  {
    path: '*',
    element: <NotFound />
  }
]

const Router = () => {
  const appRouter = useRoutes(routeConfig)
  return appRouter
}

export default Router
