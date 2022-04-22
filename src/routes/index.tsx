import React from 'react'
import MdLayout from '@/component/layout/mdLayout'
import HomeLayout from '@/component/layout/homeLayout'
import NotFound from '@/component/status/404'
import MdxRouters from '@/component/mdx-menus'
import Home from '@/page/home'
import About from '../page/about/index.mdx'
import Log from '../page/log/index.mdx'
import { useRoutes, RouteObject } from 'react-router-dom'

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/log',
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
