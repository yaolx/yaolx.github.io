import Home from '@/page/home'
import Demo from '@/page/demo'
import Demo2 from '@/page/demo2'
import { RouteConfig } from 'react-router-config'
const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/demo',
    component: Demo
  },
  {
    path: '/demo2',
    component: Demo2
  }
]

export default routesConfig
