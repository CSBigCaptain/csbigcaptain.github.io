// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-03-08",
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxt/content", "@nuxtjs/seo", "nuxt-schema-org"],
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
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
      meta: [
        { property: "og:site_name", content: " CSBigCaptain Blog" },
        { property: "og:locale", content: "zh-CN" },
        { name: "author", content: "CSBigCaptain" },
      ],
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
    url: "https://csbigcaptain.github.io",
  },
  ssr: true,
});
