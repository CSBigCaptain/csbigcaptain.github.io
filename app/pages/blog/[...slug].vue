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
    <template #full-width>
      <div class="title-wrapper">
        <h1 v-if="post">{{ post.title }}</h1>
        <div v-if="post" class="date">
          {{ new Date(post.date).toLocaleDateString() }}
        </div>
      </div>
    </template>
    <main class="content-container">
      <div class="content">
        <ContentRenderer v-if="post" :value="post" />
      </div>
    </main>
  </NuxtLayout>
</template>

<style scoped lang="less">
.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45vh;
  background: rgb(var(--mdui-color-surface-container-highest));
  transform: translateY(calc(-1 * var(--inline-padding)));

  h1 {
    width: 80%;
    text-align: center;
    line-height: 1.3;
    font-weight: 350;
    letter-spacing: var(--tight-text-letter-space);
    font-variant-alternates: styleset(font-kerning);
    margin: 0 0 0.5rem 0;
    color: rgb(var(--mdui-color-on-surface));

    @media (max-width: 600px) {
      font-size: 1.75rem;
      line-height: 1.4;
      padding: 0 0rem;
    }
  }

  .date {
    font-size: 0.9rem;
    color: rgb(var(--mdui-color-thirdary));
    margin-top: 0.5rem;
  }
}

main {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0;
  min-height: 100vh;
  overflow: hidden;

  .content {
    padding: var(--inline-padding);
  }
}
</style>
