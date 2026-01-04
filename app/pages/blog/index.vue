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

const { data: posts } = await useAsyncData('blogs', () =>
  queryCollection('blog').order('date', 'DESC').all())

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
      <aside>
        <AppWechatCard />
        <AppPostAd
          clickable variant="filled"
          target="_blank" to="https://qm.qq.com/q/c2bJHbwTDy"
          title="来 QQ 群看看？"
          desc="一起交流新鲜事！"
        >
          <Icon name="mingcute:qq-fill" />
        </AppPostAd>
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
      <ul>
        <li v-for="post in posts" :key="post.id">
          <NuxtLink :to="post.path">
            <mdui-card variant="filled" clickable>
              <h2>{{ post.title }}</h2>
              <p>{{ post.description }}</p>
              <small>
                {{ changeDate(post.update ?? post.date) }}
              </small>
            </mdui-card>
          </NuxtLink>
        </li>
      </ul>
    </main>
  </NuxtLayout>
</template>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}

main {
  width: 100%;
  padding: 0;
  min-height: 100vh;
  overflow: hidden;
  container-type: inline-size;

  ul {
    width: 100%;
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;

    @media (width <= 768px) {
      grid-template-columns: 1fr;
    }

    li {
      mdui-card {
        width: 100%;
        height: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2 {
          text-align: left;
          font-size: 1.5rem;
        }

        p {
          padding: 10px 0;
        }
      }
    }
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
