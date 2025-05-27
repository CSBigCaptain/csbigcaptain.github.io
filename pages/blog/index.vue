<script setup lang="ts">
useHead({
  title: "List - CSBigCaptain Blog",
})
const { data: posts } = await useAsyncData("blogs", () =>
  queryCollection("blog").order('date', 'DESC').all()
)
const changeDate = (date: any) => {
  const time = new Date(date)
  const year = time.getFullYear()
  const month = String(time.getMonth() + 1).padStart(2, "0") // 月份从0开始，所以要加1
  const day = String(time.getDate()).padStart(2, "0")
  const hours = String(time.getHours()).padStart(2, "0")
  const minutes = String(time.getMinutes()).padStart(2, "0")
  const seconds = String(time.getSeconds()).padStart(2, "0")

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
</script>

<template>
  <NuxtLayout name="default">
    <template #topic-text>Blog</template>
    <template #full-width>
      <SubpageBlogRandomSentence />
    </template>
    <main>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <mdui-card variant="filled" :href="post.path" clickable>
            <h2>{{ post.title }}</h2>
            <small>时间：{{ changeDate(post.date) }}</small>
            <p>{{ post.description }}</p>
          </mdui-card>
        </li>
      </ul>
    </main>
  </NuxtLayout>
</template>

<style scoped lang="less">
main {
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      list-style: none;
      width: 85%;
      mdui-card {
        padding-left: 30px;
        padding-right: 30px;
        margin-top: 25px;
        width: 100%;
        mdui-card:first-child {
          margin-top: 0;
        }
        h2 {
          text-align: left;
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
