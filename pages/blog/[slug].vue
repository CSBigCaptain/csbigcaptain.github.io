<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(slug).first()
})

console.log('badfsfs:' + post.value)
</script>

<template>
  <NuxtLayout name="blog" append="Detail">
    <main>
      <mdui-chip href="/blog">Return to List</mdui-chip>
      <!-- <ContentRenderer :value="post" /> -->  
    </main>
  </NuxtLayout>
</template>

<style scoped>
main {
  width: 100%;
  min-height: 500px;
}

</style>
