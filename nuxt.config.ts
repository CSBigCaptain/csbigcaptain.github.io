// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "@nuxt/content", "@nuxt/image"],
  content: {
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
      langs: [
        "c",
        "cpp",
        "python",
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "shell",
        "mdc",
        "md",
        "yaml",
      ],
    },
    experimental: {
      search: {
        indexed: true,
      },
    },
    markdown: {
      remarkPlugins: ["remark-math"],
      rehypePlugins: {
        "rehype-katex": {
          output: "mathml",
        },
      },
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
      noscript: [
        { children: 'JavaScript is required' }
      ],
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("mdui-"),
    },
  },
  vite: {},
  css: [
    "mdui/mdui.css",
    "/assets/css/global.less",
  ],
  ssr: true,
})