import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DDSP 5.0 整合包文档",
  description: "一个 DDSP 5.0 的非官方整合包文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '全流程教程', link: '/start/index' },
      { text: '常见问题', link: '/faq/index' }
    ],

    sidebar: [
      {
        text: '全流程教程',
        items: [
          { text: '更新日志', link: '/start/changelog' },
          { text: '下载与安装', link: '/start/download' },
          { text: '正式使用', link: '/start/launch' },
        ]
      },
      {
        text: '常见问题',
        items: [
          { text: '常见问题-首页', link: '/faq/index' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huanlinoto' }
    ]
  }
})
