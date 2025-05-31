// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-03-08",
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxtjs/seo", "@nuxt/content"],
  content: {
    build: {
      markdown: {
        remarkPlugins: {
          "remark-emoji": {
            emoticon: true,
          },
          "remark-math": {
            inlineMathDouble: true,
            singleDollor: true,
          },
        },
        rehypePlugins: {
          "rehype-katex": {
            output: "html",
            trust: true,
          },
        },
        highlight: {
          theme: {
            default: "github-light",
            dark: "github-dark",
          },
          langs: [
            "c",
            "cpp",
            "python",
            "js",
            "ts",
            "html",
            "css",
            "vue",
            "yaml",
          ],
        },
        toc: {
          depth: 3,
          searchDepth: 3,
        },
      },
    },
    preview: {
      api: "https://api.nuxt.studio",
    },
  },
  runtimeConfig: {
    public: {
      // 分析器 ID（测试中）
      msAnalyticsId: process.env.MS_ANALYTICS_ID || "rhd4ry6sym",
    },
  },
  nitro: {
    prerender: {
      failOnError: true,
    },
  },
  app: {
    baseURL: "/",
    // cdnURL: "https://cdn.shaly.sdutacm.cn/csbig/",
    buildAssetsDir: "nuxt_assets",
    head: {
      noscript: [{ innerHTML: "JavaScript is required" }],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("mdui-"),
    },
  },
  vite: {
    build: {
      sourcemap: true,
    },
  },
  css: ["mdui/mdui.css", "katex/dist/katex.min.css", "/assets/css/global.less"],
  typescript: {
    typeCheck: true,
  },
  site: {
    url: process.env.NODE_ENV === 'production' 
      ? 'https://yourdomain.com' 
      : 'http://localhost:3000',
    name: "CSBigCaptain Blog",
  },
  ssr: true,
  nuxtseo: {
    colorMode: {
      performance: "system",
      fallback: "dark",
    },
  },
  ogImage: {
    // zeroRuntime: true,
    googleFontMirror: true,
    fonts: ["Noto+Sans+SC"],
  },
  robots: {
    enabled: false,
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
