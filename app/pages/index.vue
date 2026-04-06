<script lang="ts" setup>
import blogConfig from '~~/blog.config'
import LinkButton from '~/components/app/LinkButton.vue'
import 'mdui/components/card'
import 'mdui/components/button'
import 'mdui/components/button-icon'

const title = `CSBigCaptain (Yeshang Ji)`
useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
})

const { data: actions } = await useAsyncData(
  'indexActions',
  () => {
    return queryCollection('indexActions').first()
  },
  {
    server: true,
    lazy: false,
    getCachedData: key => useNuxtApp().payload.data[key] || useNuxtApp().static.data[key],
  },
)
const { data: posts } = await useAsyncData(
  'featuredPosts',
  () => {
    return queryCollection('blog').where('isFeatured', '=', true).order('date', 'DESC').all()
  },
  {
    server: true,
    lazy: false,
    getCachedData: key => useNuxtApp().payload.data[key] || useNuxtApp().static.data[key],
  },
)
const { data: advs } = await useAsyncData(
  'indexAdvs',
  () => {
    return queryCollection('indexAdvs').first()
  },
  {
    server: true,
    lazy: false,
    getCachedData: key => useNuxtApp().payload.data[key] || useNuxtApp().static.data[key],
  },
)
</script>

<template>
  <NuxtLayout name="default">
    <template #topic-text>
      首页
    </template>
    <main class="mx-auto w-full p-3.75 md:w-[80%]">
      <picture class="avator">
        <img :src="blogConfig.author.avatar" alt="author-avatar">
      </picture>
      <section aria-label="Introduction" class="intro">
        <AppField class="name">
          <template #label>
            <span class="text-5xl">🥳</span>
          </template>
          <h1>
            <span class="large-text text-4xl font-semibold md:text-5xl">{{
              blogConfig.author.name
            }}</span>
            <br>
            <span class="text-lg leading-10 font-light md:text-2xl md:leading-13">{{
              blogConfig.author.realName
            }}</span>
          </h1>
          <div class="mt-5 flex flex-wrap gap-2">
            <LinkButton
              v-for="item in actions?.body"
              :key="item.icon"
              :style="item.style"
              :icon="item.icon"
              :end-icon="item.endIcon"
              :href="item.link"
              :target="item.target"
              :variant="item.variant"
            >
              {{ item.text }}
            </LinkButton>
          </div>
        </AppField>
        <AppField label="介绍">
          <p>
            我是一名食品科学与工程专业的学生，正在钻研前端技术 & <del>准备考研</del>。目前正在研究
            Nuxt 企业级应用开发和 Monorepo 项目。
          </p>
          <p>Nuxt 是我使用最多的 JavaScript 框架。此外，我对 Vue 3 有一定的了解。</p>
          <p>
            在学习之外，我喜欢玩一些网游，偶尔会玩一些独立游戏。此外，我曾研究过摄影技术，不过现在这些设备已经吃灰了。
          </p>
          <p>
            CSBigCaptain 昵称的来历是我初中时玩游戏用的名字“陈帅哥大队长”，注册 Steam
            账号的时候就翻译成英文填进去了。Yeshang
            Ji（姬夜殇）这个名字源自我初中读的唐家三少的小说《酒神》。
          </p>
          <p>如果你在沙🍐读书，那么我们可能会有很多共同话题，欢迎来联系我！</p>
        </AppField>
      </section>
      <section area-label="Blogs" class="pb-5">
        <AppField label="精选文章">
          <ul class="grid grid-cols-1 gap-5 overflow-hidden md:grid-cols-2 2xl:grid-cols-3">
            <li v-for="post in posts" :key="post.id">
              <AppFeaturedCard
                :description="post.description"
                :link="post.path"
                :title="post.title"
                :date="post.date"
              />
            </li>
          </ul>
        </AppField>
      </section>
      <section aria-label="Why CSBigCaptain Blog" class="why min-h-screen pt-[10%]">
        <h2 class="text-center text-4xl/16 font-semibold">
          Why CSBigCaptain Blog?
        </h2>
        <p class="py-2 text-center text-lg">
          本博客代码已在 Github 开源，欢迎部署体验！
        </p>
        <ul class="grid grid-cols-1 gap-5 pt-5 md:grid-cols-2 2xl:grid-cols-4">
          <li v-for="item in advs?.body" :key="item.title">
            <AppMotionCard class="motion-card h-full">
              <mdui-card variant="filled" class="h-full w-full p-5">
                <h3 class="pb-3 text-2xl font-bold">
                  {{ item.title }}
                </h3>
                <div class="detail">
                  {{ item.detail }}
                </div>
              </mdui-card>
            </AppMotionCard>
          </li>
        </ul>
        <AppMotionCard class="link flex items-center justify-center pt-7">
          <LinkButton
            icon="mdi:github"
            href="https://github.com/CSBigCaptain/csbigcaptain.github.io"
            end-icon="mdi:open-in-new"
            target="_blank"
            variant="filled"
          >
            View Github Repository
          </LinkButton>
        </AppMotionCard>
      </section>
    </main>
  </NuxtLayout>
</template>

<style lang="less" scoped>
.avator {
  font-size: min(100vw, 60vh);
  margin-right: -0.15em;
  opacity: 0.2;
  position: fixed;
  right: 19vw;
  top: 25px;
  z-index: -1;

  img {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    object-fit: cover;
  }
}

.intro {
  .name {
    .large-text {
      background: linear-gradient(
        45deg,
        rgba(var(--mdui-color-tertiary), 0.8),
        rgba(var(--mdui-color-primary), 0.8)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
}
</style>
