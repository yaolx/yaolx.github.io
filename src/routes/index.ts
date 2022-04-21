import Home from '@/page/home'
import Md from '../page/md/index.mdx'
import { RouteConfig } from 'react-router-config'
const routesConfig: RouteConfig[] = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/md',
        component: Md
    }
]

export default routesConfig
