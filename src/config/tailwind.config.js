// Tailwind 配置文件
/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',  // 暗黑模式配置，默认跟随系统
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 主题颜色
        'primary': 'var(--q-primary)',
        'primary-default': 'var(--q-primary-default)',

        // 文字颜色
        'title': 'var(--title-color)',
        'default': 'var(--default-color)',
        'default-black': 'var(--default-black-color)',
        'second': 'var(--second-color)',
        'third': 'var(--third-color)',

        // 背景颜色
        'body-bg': 'var(--body-bg-color)',
        'panel-bg': 'var(--panel-bg-color)',

        // 标题栏颜色
        'header': 'var(--header-color)',
        'header-bg': 'var(--header-bg-color)',
        'header-active': 'var(--header-active-color)',

        // 菜单栏颜色
        'menu-active': 'var(--menu-active-color)',
        'menu-active-bg': 'var(--menu-active-bg-color)',
        'menu-active-border': 'var(--menu-active-border-color)',

        // 表格颜色
        'table-title': 'var(--table-title-color)',
        'table-title-bg': 'var(--table-title-bg-color)',
        'table-even-bg': 'var(--table-even-bg-color)',
        'table-hover-bg': 'var(--table-hover-bg-color)',

        // 线条颜色
        'line': 'var(--line-color)',

        // 辅助颜色
        'accent': 'var(--accent-color)',
        'secondary': 'var(--secondary-color)',
        'positive': 'var(--positive-color)',
        'negative': 'var(--negative-color)',
        'info': 'var(--info-color)',
        'warning': 'var(--warning-color)',
      },
    },
  },
  plugins: [],
}

