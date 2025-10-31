// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-03-08',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxtjs/seo', '@nuxt/content', '@nuxt/fonts', '@nuxt/icon'],
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
      routes: ['/', '/blog/', '/search', '/rss'],
    },
  },
  app: {
    baseURL: '/',
    // cdnURL: "https://cdn.shaly.sdutacm.cn/csbig/",
    buildAssetsDir: 'nuxt_assets',
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
    fonts: ['Alata', 'Noto+Sans+SC'],
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
  fonts: {
    provider: 'bunny',
  },
})