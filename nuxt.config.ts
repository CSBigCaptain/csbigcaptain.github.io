// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-03-08',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxtjs/seo', '@nuxt/content', '@nuxt/icon'],
  // @ts-expect-error: types are not up to date
  content: {
    build: {
      markdown: {
        remarkPlugins: {
          'remark-emoji': {
            emoticon: true,
          },
          'remark-math': {
            inlineMathDouble: true,
            singleDollor: true,
          },
        },
        rehypePlugins: {
          'rehype-katex': {
            output: 'html',
            trust: true,
          },
        },
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          },
          langs: [
            'c',
            'cpp',
            'python',
            'js',
            'ts',
            'html',
            'css',
            'vue',
            'yaml',
          ],
        },
        toc: {
          depth: 3,
          searchDepth: 3,
        },
      },
    },
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },
  nitro: {
    prerender: {
      failOnError: true,
      crawlLinks: true,
    },
  },
  app: {
    baseURL: '/',
    // cdnURL: "https://cdn.shaly.sdutacm.cn/csbig/",
    buildAssetsDir: 'nuxt_assets',
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://rsms.me/inter/inter.css',
          media: 'print',
          onload: 'this.media="all"',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn-font.hyperos.mi.com/font/css?family=MiSans:100,200,300,400,450,500,600,650,700,900:Chinese_Simplify,Latin&display=swap',
          media: 'print',
          onload: 'this.media="all"',
        },
      ],
      script: [
        {
          innerHTML: /* js */ `
            const localPreference = localStorage.getItem('vueuse-color-scheme');
            const systemPreferenceDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if(localPreference === 'dark') {
              document.documentElement.classList.toggle('mdui-theme-dark');
            } if (localPreference === 'light') {
              document.documentElement.classList.remove('mdui-theme-dark');
            } else if (systemPreferenceDark) {
              document.documentElement.classList.toggle('mdui-theme-dark', localPreference !== 'light');
            }
          `,
        },
        {
          // Umami 统计脚本
          defer: true,
          src: 'https://stats.kungal.org/script.js',
          'data-website-id': '3822f94c-9a02-4e86-9a8f-906edb1e0e2c',
        },
      ],
      noscript: [{ innerHTML: 'JavaScript is required' }],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('mdui-'),
    },
  },
  css: ['mdui/mdui.css', 'katex/dist/katex.min.css', '/assets/css/global.less'],
  typescript: {
    typeCheck: true,
  },
  site: {
    url:
      process.env.NODE_ENV === 'production'
        ? 'https://csbigcaptain.github.io'
        : 'http://localhost:3000',
    name: 'CSBigCaptain Blog',
  },
  nuxtseo: {
    colorMode: {
      performance: 'system',
      fallback: 'dark',
    },
  },
  ogImage: {
    zeroRuntime: true,
    fonts: ['Noto+Sans+SC'],
  },
  robots: {
    // sitemap 模块依赖于 robots 模块
    enabled: true,
  },
  seo: {
    enabled: false,
  },
  schemaOrg: {
    enabled: false,
  },
  linkChecker: {
    enabled: false,
  },
})
