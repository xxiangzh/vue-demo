// 引入 Vite 核心配置函数和 Vue2 插件
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // 1. 配置插件：核心是引入 Vue2 插件
  plugins: [
    createVuePlugin({
      // 可选配置：支持 Vue2 的 JSX（如果不需要可以删掉）
      jsx: false
    })
  ],

  // 2. 路径别名配置（可选，但推荐，方便项目中引入文件）
  resolve: {
    // 设置路径别名，@ 指向 src 目录
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    // 补充扩展名，导入时可省略 .vue/.js 等
    extensions: ['.mjs', '.js', '.jsx', '.json', '.vue']
  },

  // 3. 开发服务器配置（可选）
  server: {
    // 开发服务器端口，默认 5173
    port: 8080,
    // 自动打开浏览器
    open: true,
    // 允许跨域（如需对接后端接口可开启）
    cors: true
  },

  // 4. 构建配置（可选）
  build: {
    // 打包输出目录，默认 dist
    outDir: 'dist',
    // 静态资源目录，默认 assets
    assetsDir: 'assets',
    // 启用/禁用代码压缩
    minify: 'terser'
  }
})