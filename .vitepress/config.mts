import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FEIQs",
  description: "Provide comprehensive interview questions and answer analysis to help job seekers prepare for front-end interviews.",
  titleTemplate: ':title: FE interviews',
  head: [
    ['link', { rel: 'icon', href: '/job-interview-logo.png' },],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search:{
      provider: 'local'
    },
    logo: '/job-interview-logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Question Bank', link: '/html/0001' },
      { text: 'v0.0.1-beta.1', link: 'https://github.com/LQYld/FEIQs/releases' }
    ],
    sidebar: [
      {
        text: 'Html',
        items: [
          {text: '高频前端面试题汇总之HTML篇',link: '/html/0001'},
        ]
      },
      {
        text: 'Css',
        items: [
          {text: '高频前端面试题汇总之CSS篇',link: '/css/0001'},
          {
            text: '【vue3js.cn】Css 系列',
            link: '/css/0002',
          }
        ]
      },
      {
        text: 'Js',
        items: [
          {text: '【vue3js.cn】Js 系列',link: '/js/0001.md'}
        ]
      },
      {
        text: 'Ts',
        items: [
          {text: '【vue3js.cn】Ts 系列',link: '/ts/0001.md'}
        ]
      },
      {
        text: 'Vue',
        items: [
          { text: '2.6W字！Vue面试题源码级详解', link: '/vue/0001' },
          { text: '27 道 Vue 面试题，内含详细讲解', link: '/vue/0002' },
          { text: '【vue3js.cn】Vue2 系列', link: '/vue/0003' },
          { text: '【vue3js.cn】Vue3 系列', link: '/vue/0004' }
        ]
      },
      {
        text: 'Webpack',
        items: [
          { text: '【vue3js.cn】Webpack 系列', link: '/webpack/0001' },
        ]
      },
      {
        text: 'Http',
        items: [
          { text: '【vue3js.cn】Http 系列', link: '/http/0001' },
        ]
      },
      {
        text: 'Design Pattern',
        items: [
          {text: '【vue3js.cn】设计模式/ 系列', link: '/design-pattern/0001'}
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LQYld/FEIQs' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Qingyun119'
    }
  }
})
