<!-- eslint-disable -->
<script setup lang="js">
import 'mdui/components/card'

const titleaa = '文章列表 - CSBigCaptain Blog'
const descriptionaa = 'CSBigCaptain Blog list.'

useSeoMeta({
  title: titleaa,
  ogTitle: titleaa,
  description: descriptionaa,
  ogDescription: descriptionaa,
  ogUrl: 'https://csbigcaptain.github.io/blog',
})
defineOgImageComponent('Nuxt', {
  title: 'Blog List',
  headline: 'CSBigCaptain Blog',
})
const { data: posts } = await useAsyncData('blogs', () =>
  queryCollection('blog').order('date', 'DESC').all())
function changeDate(date) {
  const time = new Date(date)
  const year = time.getFullYear()
  const month = String(time.getMonth() + 1).padStart(2, '0') // 月份从0开始，所以要加1
  const day = String(time.getDate()).padStart(2, '0')
  const hours = String(time.getHours()).padStart(2, '0')
  const minutes = String(time.getMinutes()).padStart(2, '0')
  const seconds = String(time.getSeconds()).padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
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
    <main class="content-container">
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
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    width: 100%;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
</style>
