import React from 'react'
import Home from '@/page/home'
import MdLayout from '@/component/layout/mdLayout'
import HomeLayout from '@/component/layout/homeLayout'
import NotFound from '@/component/status/404'
import MdxsRouter from '@/component/mdx-menus'
import { useRoutes, RouteObject } from 'react-router-dom'
console.log('MdxsRouter', MdxsRouter)
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
  // md文件
  {
    path: '/md',
    element: <MdLayout />,
    children: MdxsRouter
  },
  {
    path: '/md1',
    element: <MdLayout />
  },
  {
    path: '/md2',
    element: <MdLayout />
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
