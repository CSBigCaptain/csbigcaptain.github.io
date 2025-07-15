<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.path}`, () => {
  return queryCollection("blog").path(route.path).first()
})

useSeoMeta({
  title: (post.value?.title || "Blog") + " - CSBigCaptain Blog",
  ogTitle: (post.value?.title || "Blog") + " - CSBigCaptain Blog",
  description: "The introduction to CSBigCaptain Blog.",
  ogDescription: "The introduction to  CSBigCaptain Blog.",
  ogUrl: "https://csbigcaptain.github.io" + route.path,
})
</script>

<template>
  <NuxtLayout name="default">
    <template #topic-text>Blog</template>
    <main>
      <NuxtLink to="/blog"><mdui-chip>Return to List</mdui-chip></NuxtLink>
      <ContentRenderer v-if="post" :value="post" />
    </main>
  </NuxtLayout>
</template>

<style scoped>
main {
  width: 100%;
  max-width: 768px;
  padding: 0;
  min-height: 100vh;
  overflow: hidden;
}
</style>
