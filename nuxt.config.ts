// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxt/content", "@nuxt/image"],
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
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  app: {
    baseURL: "/",
    //    cdnURL: "https://cdn.shaly.sdutacm.cn/csbig/",
    buildAssetsDir: "nuxt_assets",
    head: {
      script: [],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/vite.svg",
        },
      ],
      noscript: [{ children: "JavaScript is required" }],
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
  ssr: true,
});
