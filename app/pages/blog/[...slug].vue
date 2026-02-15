<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.path}`, () => {
  return queryCollection('blog').path(route.path).first()
}, {
  server: true,
  lazy: false,
  getCachedData: key => useNuxtApp().payload.data[key] || useNuxtApp().static.data[key],
})

const title = `${post.value?.title || 'Blog'} - CSBigCaptain Blog`
const description = post.value?.description || 'CSBigCaptain Blog post.'
const short = post.value?.short || ''

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogUrl: `https://csbigcaptain.github.io${route.path}`,
})
defineOgImageComponent('Nuxt', {
  title: post.value?.title,
  headline: 'CSBigCaptain Blog',
  description: short,
})
</script>

<template>
  <NuxtLayout name="default">
    <template #topic-text>
      Blog
    </template>
    <template #full-width>
      <div class="title-wrapper flex flex-col items-center justify-center w-full h-[45vh] bg-surface-container-highest">
        <h1 v-if="post" class="w-[80%] text-center mb-2 text-4xl text-on-surface font-light">
          {{ post.title }}
        </h1>
        <div v-if="post" class="text-sm text-color-thirdary mt-2">
          <NuxtTime :datetime="new Date(post.date)" />
        </div>
      </div>
    </template>
    <template #right>
      <aside
        class="hidden md:flex px-3.75 py-10 w-50 md:w-75
          shrink-0 h-fit flex-col gap-3.75 sticky top-10"
      >
        <AppWechatCard />
        <AppPostToc :post="post" />
        <AppPostAd
          clickable variant="filled"
          target="_blank" to="https://chat.csbig.top/"
          title="隆重推出 Carbon Chat"
          desc="在线与多种 LLM 大模型聊天"
        >
          <Icon name="hugeicons:chat-gpt" />
        </AppPostAd>
      </aside>
    </template>
    <main class="py-10 w-full min-h-screen">
      <div class="wrap-break-word">
        <ContentRenderer v-if="post" :value="post" />
      </div>
    </main>
  </NuxtLayout>
</template>

<style lang="less">
@import url('katex/dist/katex.min.css');

// 解决sticky元素遮挡问题
mdui-layout,
mdui-layout-main {
  overflow: visible;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  scroll-margin-top: 80px;
}
</style>
