<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.path}`, () => {
  return queryCollection('blog').path(route.path).first()
})

const titleaa = (post.value?.title || 'Blog') + ' - CSBigCaptain Blog'
const descriptionaa = post.value?.description || 'CSBigCaptain Blog post.'
const short = post.value?.short || ''

useSeoMeta({
  title: titleaa,
  ogTitle: titleaa,
  description: descriptionaa,
  ogDescription: descriptionaa,
  ogUrl: 'https://csbigcaptain.github.io' + route.path,
})
defineOgImageComponent('Nuxt', {
  title: post.value?.title,
  headline: 'CSBigCaptain Blog',
  description: short,
})
</script>

<template>
  <NuxtLayout name="default">
    <template #topic-text>Blog</template>
    <main class="content-container">
      <NuxtLink to="/blog"><mdui-chip>Return to List</mdui-chip></NuxtLink>
      <ContentRenderer v-if="post" :value="post" />
    </main>
  </NuxtLayout>
</template>

<style scoped>
main {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0;
  min-height: 100vh;
  overflow: hidden;
}
</style>
