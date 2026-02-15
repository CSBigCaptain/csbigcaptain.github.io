import tailwindcss from '@tailwindcss/vite'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'
import { defineNuxtConfig } from 'nuxt/config'

import blogConfig from './blog.config'
// @keep-sorted
export default defineNuxtConfig({
  ...blogConfig.commonConfig,
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
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.cn/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap',
        },
      ],
      script: [
        ...(blogConfig.additionalScripts || []),
        {
          innerHTML: /* js */ `
            // 解决首屏加载闪白问题
            const localPreference = localStorage.getItem('vueuse-color-scheme');
            const systemPreferenceDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (localPreference === 'dark') {
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
  compatibilityDate: '2025-03-08',
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
          langs: ['c', 'cpp', 'python', 'js', 'ts', 'html', 'css', 'vue', 'json', 'yaml'],
        },
        toc: {
          depth: 3,
          searchDepth: 3,
        },
      },
    },
    experimental: { sqliteConnector: 'native' },
  },
  css: [
    ...(blogConfig.additionalCss || []),
    'mdui/mdui.css',
    '/assets/css/global.css',
  ],
  devtools: { enabled: true },
  eslint: {
    config: {
      standalone: false,
      stylistic: true,
    },
  },
  experimental: {
    typescriptPlugin: true,
    componentIslands: true,
  },
  linkChecker: {
    enabled: false,
  },
  modules: ['@vueuse/nuxt', '@vueuse/motion/nuxt', '@nuxtjs/seo', '@nuxt/content', '@nuxt/icon', '@nuxt/eslint', '@nuxt/hints'],
  nitro: {
    prerender: {
      failOnError: true,
      crawlLinks: true,
      // 修复部分平台会在文章路径添加 '/'，导致闪现 404 错误
      // https://github.com/nuxt/content/issues/2378
      // autoSubfolderIndex: process.env.CLOUDFLARE_PAGES || process.env.GITHUB_ACTIONS || process.env.NETLIFY ? false : undefined,
    },
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
  schemaOrg: {
    enabled: false,
  },
  seo: {
    enabled: false,
  },
  sitemap: {
    zeroRuntime: true,
  },
  typescript: {
    typeCheck: false,
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        targets: browserslistToTargets(browserslist('>= 0.25%')),
      },
    },
    optimizeDeps: {
      // @keep-sorted
      include: ['@nuxt/hints', '@vueuse/integrations', 'mdui'],
    },
    plugins: [
      tailwindcss() as any,
    ],
    resolve: {
      // TODO: @vueuse/motion 依赖 tslib，构建时打包进服务端 bundle，结果 tslib 的 ESM/CJS 互操作出了问题，默认导出是 undefined
      // 修复 SSR 预渲染崩溃：tslib 在 ESM/CJS 互操作中默认导出为 undefined。
      alias: { tslib: 'tslib/tslib.js' },
    },
    ssr: {
      // 让 tslib 保持在 SSR bundle 内，避免预渲染的 ESM 互操作问题。
      noExternal: ['tslib'],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('mdui-'),
    },
  },
})
