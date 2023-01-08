// https://vitejs.dev/config/
import path from 'path'

import { ConfigEnv } from 'vite'

import { PORT } from './config/constant'
import { createVitePlugins } from './config/vite/plugins'
import { createProxy } from './config/vite/proxy'
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  return {
    plugins: createVitePlugins(mode, isBuild),
    envDir: path.resolve(__dirname, 'config/env'),
    resolve: {
      alias: {
        '@/': path.resolve(__dirname, './src')
      }
    },
    // css 配置
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
          // antd 定制主题样式
          modifyVars: {
            '@fill-body': '#fff'
          }
        }
      },
      modules: {
        localsConvention: 'camelCase'
      }
    },
    // 开发环境开启代理
    server: {
      host: true,
      port: PORT,
      open: true,
      proxy: createProxy()
    },
    build: {
      rollupOptions: {
        output: {
          // 手动分包
          manualChunks: {
            react: ['react', 'react-dom'],
            lodash: ['lodash'],
            markmap: ['markmap-lib', 'markmap-view']
          }
        }
      }
    }
  }
}
