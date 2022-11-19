import { DefaultTheme, defineConfig } from 'vitepress'

// 导航栏
const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: '笔记', link: '/notes/' },
  // 顶部导航下拉菜单按如下方式：
  /*
  {
    text: 'Dropdown Menu',
    items: [
      { text: 'Item A', link: '/item-1' },
      { text: 'Item B', link: '/item-2' },
      { text: 'Item C', link: '/item-3' }
    ]
  }
   */
]

// 侧边栏
const sidebar: DefaultTheme.Sidebar = {
  '/notes': [
    {
      text: 'Vue笔记',
      items: [
        { text: 'Vue2', link: '/vue/vue' },
        { text: 'Vue3', link: '/vue3/vue3' },
      ],
    },
    {
      text: '通用业务组件',
      items: [
        { text: '通用组件 1', link: '/components/common-component1' },
        { text: '通用组件 2', link: '/components/common-component2' },
      ],
    },
    {
      text: '高级业务组件',
      items: [
        { text: '高级组件 1', link: '/components/pro-component1' },
        { text: '高级组件 2', link: '/components/pro-component2' },
      ],
    },
  ],
}

// 配置
export default defineConfig({
  title: '我的笔记',
  description: '屿东的Web前端笔记',
  lang: 'cn-ZH',
  base: '/',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    siteTitle: '屿东的Web前端笔记',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    nav,
    sidebar,
  },
})
