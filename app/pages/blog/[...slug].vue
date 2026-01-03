<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.path}`, () => {
  return queryCollection('blog').path(route.path).first()
})

const titleaa = `${post.value?.title || 'Blog'} - CSBigCaptain Blog`
const descriptionaa = post.value?.description || 'CSBigCaptain Blog post.'
const short = post.value?.short || ''

useSeoMeta({
  title: titleaa,
  ogTitle: titleaa,
  description: descriptionaa,
  ogDescription: descriptionaa,
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
      <div class="title-wrapper">
        <h1 v-if="post">
          {{ post.title }}
        </h1>
        <div v-if="post" class="date">
          {{ new Date(post.date).toLocaleDateString() }}
        </div>
      </div>
    </template>
    <template #right>
      <aside>
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
    <main>
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

  h1 {
    width: 80%;
    text-align: center;
    line-height: 1.3;
    font-weight: var(--thin-font-weight);
    letter-spacing: var(--compact-text-letter-space);
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
  padding: 0;
  min-height: 100vh;
  overflow: hidden;

  .content {
    width: 100%;
    word-break: break-word;
    padding: var(--inline-padding);
  }
}

aside {
  width: 300px;
  flex-shrink: 0;
  height: fit-content;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: var(--inline-padding);
  position: sticky;
  top: 64px;
  font-size: 0.9em;

  @media (max-width: 1079px) {
    padding-left: 0;
    width: 220px;
    font-size: 0.8em;
  }

  @media (max-width: 767px) {
    display: none;
  }

  mdui-card {
    width: 100%;
    padding: var(--inline-padding);
  }
}
</style>

<style lang="less">
// 解决sticky元素遮挡问题
mdui-layout,
mdui-layout-main {
  overflow: visible;
}
</style>
