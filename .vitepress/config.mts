import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FEIQs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Question Bank', link: '/vue/0001' }
    ],
    sidebar: [
      // {
      //   text: 'Html',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      // {
      //   text: 'Css',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      // {
      //   text: 'Js',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      // {
      //   text: 'Ts',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      {
        text: 'Vue',
        items: [
          { text: '2.6W字！Vue面试题源码级详解', link: '/vue/0001' },
          { text: '27道Vue面试题，内含详细讲解', link: '/vue/0002' },
          { text: '[Vue2系列] 经典面试题', link: '/vue/0003' },
          { text: '[Vue3系列] 经典面试题', link: '/vue/0004' },
        ]
      },
      {
        text: 'Mixture',
        items:[
          {text: '高频前端面试题汇总之HTML篇',link: '/mixture/0001'},
          {text: '高频前端面试题汇总之CSS篇',link: '/mixture/0002'}
        ]
      }
      // {
      //   text: 'React',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
