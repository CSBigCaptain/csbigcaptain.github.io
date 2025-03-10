<script setup lang="js">
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

useHead({
  title: post.value?.title || 'CSBigCaptain Blog',
})
</script>

<template>
  <NuxtLayout name="blog">
    <main>
      <mdui-chip href="/blog">Return to List</mdui-chip>
      <ContentRenderer :value="post" />
    </main>
  </NuxtLayout>
</template>

<style scoped>
main {
  width: 100%;
  min-height: 500px;
}
</style>
