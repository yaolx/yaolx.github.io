// https://vitejs.dev/config/
import { ConfigEnv } from 'vite'
import fs from 'fs'
import dotenv from 'dotenv'
import path from 'path'
import { createVitePlugins } from './config/vite/plugins'
import { createProxy } from './config/vite/proxy'
import { PORT } from './config/constant'
/**
 * 环境初始化
 * @param mode
 */
function envInit(mode) {
  const envFile = `./config/env/.env.${mode}`
  try {
    fs.accessSync(envFile, fs.constants.F_OK)
    const envConfig = dotenv.parse(fs.readFileSync(envFile))
    for (const k in envConfig) {
      if (Object.prototype.hasOwnProperty.call(envConfig, k)) {
        process.env[k] = envConfig[k]
      }
    }
  } catch (error) {
    console.log('配置文件不存在，忽略')
  }
}
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  envInit(mode)
  return {
    plugins: createVitePlugins(mode, isBuild),
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
      proxy: createProxy(),
    }
  }
}
