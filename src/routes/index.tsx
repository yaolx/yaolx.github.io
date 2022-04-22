import React from 'react'
import Home from '@/page/home'
import Header from '@/component/layout/Header'
import Md from '../page/md/index.mdx'
import NotFound from '@/component/status/404'
import { useRoutes, RouteObject } from 'react-router-dom'

const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <Header />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/md',
        element: <Md />
      }
    ]
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
