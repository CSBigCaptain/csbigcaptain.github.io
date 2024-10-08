// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@vueuse/nuxt',
  ],
  app: {
    baseURL: '/',
    cdnURL: 'https://cdn.shaly.sdutacm.cn/csbig/',
    buildAssetsDir: 'nuxt_assets',
    head: {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-CLLC18XSV4',
          async: true
        },
        {
          innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CLLC18XSV4');
        `,
          type: 'text/javascript'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/vite.svg'
        }
      ]
    }
  },
  experimental: {
    payloadExtraction: false
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('mdui-')
    }
  },
  vite: {
    css: {
      modules: {

      }
    }
  },
  css: [
    'mdui/mdui.css',
    'assets/css/global.less',
  ],
  ssr: true,
  // build: {
  //   publicPath: process.env.PATH_TYPE === 'gray' ? '/_nuxt/' : 'https://cdn.shaly.sdutacm.cn/csbig/nuxt_assets/',
  // },
  generate: {
    fallback: true
  },
  // env: {
  //   PATH_TYPE: process.env.PATH_TYPE
  // },
})
