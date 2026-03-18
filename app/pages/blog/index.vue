<!-- eslint-disable -->
<script setup lang="ts">
import 'mdui/components/card'

const title = '文章列表 - CSBigCaptain Blog'
const description = 'CSBigCaptain Blog list.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogUrl: 'https://csbigcaptain.github.io/blog',
})
defineOgImageComponent('Nuxt', {
  title: 'Blog List',
  headline: 'CSBigCaptain Blog',
})

const { data: posts } = await useAsyncData(
  'blogs',
  () => queryCollection('blog').order('date', 'DESC').all(),
  {
    server: true,
    lazy: false,
    getCachedData: (key) => useNuxtApp().payload.data[key] || useNuxtApp().static.data[key],
  },
)

function changeDate(date: string) {
  const time = new Date(date)
  const year = time.getFullYear()
  const month = String(time.getMonth() + 1).padStart(2, '0') // 月份从0开始，所以要加1
  const day = String(time.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}
</script>

<template>
  <NuxtLayout name="default">
    <template #topic-text>
      Blog
    </template>
    <template #full-width>
      <AppRandomSentence />
    </template>
    <template #right>
      <aside
        class="sticky top-10 hidden h-fit w-50 shrink-0 flex-col gap-3.75 px-3.75 py-10 md:flex md:w-75"
      >
        <AppWechatCard />
        <AppPostAd
          clickable
          variant="filled"
          target="_blank"
          to="https://qm.qq.com/q/c2bJHbwTDy"
          title="来 QQ 群看看？"
          desc="一起交流新鲜事！"
        >
          <Icon name="mingcute:qq-fill" />
        </AppPostAd>
        <AppPostAd
          clickable
          variant="filled"
          target="_blank"
          to="https://chat.csbig.top/"
          title="隆重推出 Carbon Chat"
          desc="在线与多种 LLM 大模型聊天"
        >
          <Icon name="hugeicons:chat-gpt" />
        </AppPostAd>
      </aside>
    </template>
    <main class="w-full overflow-hidden py-10 contain-inline-size">
      <ul class="grid w-full gap-5">
        <li v-for="post in posts" :key="post.id">
          <NuxtLink :to="post.path">
            <mdui-card
              variant="filled"
              clickable
              class="flex h-full w-full flex-col justify-between p-7.25"
            >
              <h2 class="text-left text-2xl font-bold">
                {{ post.title }}
              </h2>
              <p class="py-2.5">
                {{ post.description }}
              </p>
              <small>
                <NuxtTime :datetime="new Date(post.update ?? post.date)" />
              </small>
            </mdui-card>
          </NuxtLink>
        </li>
      </ul>
    </main>
  </NuxtLayout>
</template>

<style scoped lang="less">
main {
  ul {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

    @media (width <= 768px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
