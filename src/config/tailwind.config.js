// Tailwindcss 配置文件
/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',  // 暗黑模式配置，默认跟随操作系统
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // 主题颜色
        'primary': 'var(--color-primary)',

        // 文字颜色
        'default': 'var(--color-text)',
        'title': 'var(--color-text-title)',
        'second': 'var(--color-text-second)',
        'third': 'var(--color-text-third)',

        // 背景颜色
        'body-bg': 'var(--color-body-bg)',
        'panel-bg': 'var(--color-panel-bg)',

        // 标题栏颜色
        'header': 'var(--color-header-text)',
        'header-bg': 'var(--color-header-bg)',
        'header-bg2': 'var(--color-header-bg2)',
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
        'line': 'var(--color-line)',

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

