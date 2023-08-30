import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {visualizer} from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'
import {ElementPlusResolver, QuasarResolver} from 'unplugin-vue-components/resolvers'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  base: '/apps',  // 项目根路径，根据构建的项目要求手动配置

  plugins: [
    vue({
      template: {transformAssetUrls}
    }),
    visualizer(),  // rollup 打包分析插件，在根目录的 stats.html 中生成分析图
    Components({  // 自动注册 Element、Quasar 组件
      dirs: ['src/components', 'src/layouts'],
      resolvers: [ElementPlusResolver({
        importStyle: 'sass',
      }), QuasarResolver()],
      dts: 'src/types/components.d.ts',  // 类型文件的路径
    }),
    quasar(),  // Quasar 插件，用于按需加载 Quasar 组件
  ],

  // 配置 Tailwindcss
  css: {
    postcss: {
      plugins: [
        tailwindcss('./src/config/tailwind.config.js'),  // 配置文件的路径
        autoprefixer,
      ]
    },

    // 配置 Element 主题颜色
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: `@use "./src/assets/style/elementTheme.scss" as *;`,
    //   },
    // },
  },

  // 配置路径别名
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
