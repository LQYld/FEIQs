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
        text: 'Vue',
        items: [
          { text: '2.6W字！Vue面试题源码级详解', link: '/vue/0001' },/
          { text: '【vue3js.cn】Vue2 系列', link: '/vue/0003' },
          { text: '【vue3js.cn】Vue3 系列', link: '/vue/0004' }
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
