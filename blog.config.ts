import { defineBlogConfig } from '#shared/utils/config'

export default defineBlogConfig({
  title: 'CSBigCaptain Blog',
  description:
    'CSBigCaptain Blog 是一个由 Nuxt 4 驱动的开源 Git-CMS 博客系统。博客基于 Material Design 3 设计语言，页面简约清爽而不失美观。支持深浅切换和动态配色，且个性化设置自动保存。博客支持服务端渲染，数据库在客户端本地检索，提供卓越的加载和文章检索速度。博客具有 SEO 优化，支持 Open Graph 和 Twitter Card 元数据，提升搜索引擎排名和社交媒体分享效果。为用户提供了近乎完美的阅读体验。',
  author: {
    name: 'CSBigCaptain',
    realName: 'Yeshang Ji',
    avatar: 'https://avatars.githubusercontent.com/u/81836540?v=4',
    email: 'csbigcaptain@outlook.com',
  },
  favicon: '/public/favicon.ico',
  language: 'zh-CN',
  timeEstablished: '2024-08-03',
  timezone: 'Asia/Shanghai',
  defaultCategory: '未分类',
  additionalCss: [],
  additionalScripts: [
    {
      // Umami 统计脚本
      'defer': true,
      'src': 'https://stats.kungal.org/script.js',
      'data-website-id': '3822f94c-9a02-4e86-9a8f-906edb1e0e2c',
      'data-domains': 'csbig.top, csbigcaptain.github.io',
    },
  ],
  // 这里的配置为公共配置，会注入到 nuxt.config.ts 中
  commonConfig: {},
})
