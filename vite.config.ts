import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {visualizer} from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'


export default defineConfig({
  base: '/apps',  // 项目根路径，根据构建的项目要求手动配置

  plugins: [
    vue(),
    visualizer(),  // rollup 打包分析插件，在根目录的 stats.html 中生成分析图
    Components({  // 自动注册 Element 组件，但无法更改 Element 默认颜色
      resolvers: [ElementPlusResolver()],
      dts: 'src/types/components.d.ts',  // 类型文件的路径
    }),
  ],

  // 配置 Tailwindcss
  css: {
    postcss: {
      plugins: [
        tailwindcss('./src/config/tailwind.config.js'),  // 配置文件的路径
        autoprefixer,
      ]
    }
  },

  // 配置路径别名
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
