<script setup lang="ts">
const { setColorTheme } = useTheme()
setColorTheme()

const { name, description, url } = useSite()
const route = useRoute()

// 默认的 SEO 配置，子页面可以覆盖
// 此处 `ogUrl` 配置只保证首屏正确
// 若需要请在每个页面都添加 `ogUrl` 以覆盖
useSeoMeta({
  title: name,
  ogTitle: name,
  twitterTitle: name,
  description,
  ogDescription: description,
  twitterDescription: description,
  ogUrl: `${url}${route.path}`,
})

useHead({
  htmlAttrs: {
    lang: 'zh-CN',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="gray" />
  <NuxtPage />
</template>
