<script setup lang="ts">
const route = useRoute()
console.log(route.path)
const { data: post } = await useAsyncData(`blog-${route.path}`, () => {
  return queryCollection('blog').path(route.path).first()
})

useHead({
  title: post.value?.title || 'CSBigCaptain Blog',
})
</script>

<template>
  <NuxtLayout name="default">
    <template #topic-text>Blog</template>
    <main>
      <mdui-chip href="/blog">Return to List</mdui-chip>
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
