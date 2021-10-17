import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import eslint from '@rollup/plugin-eslint'
import typescript from '@rollup/plugin-typescript'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {...eslint({
      include: 'src/**/*.+(js|jsx|ts|tsx)' 
    }), enforce: 'pre'}, 
    reactRefresh(),
    typescript()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
