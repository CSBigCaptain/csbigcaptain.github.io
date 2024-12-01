<script setup lang="ts">
useHead({
  title: "List - CSBigCaptain Blog",
})
</script>

<template>  
  <NuxtLayout name="blog" append="List">
    <main>
      <SubpageBlogRandomSentence />
      <ContentList path="/blog" v-slot="{ list }">
        <mdui-card
          variant="filled"
          :href="article._path"
          clickable
          v-for="article in list"
          :key="article._path"
        >
          <h2>{{ article.title }}</h2>
          <small>时间：{{ article.date }}</small>
          <p>{{ article.description }}</p>
        </mdui-card>
      </ContentList>
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

  mdui-card {
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 25px;
    width: 85%;
    mdui-card:first-child {
      margin-top: 0;
    }
    h2 {
      text-align: left;
      font-size: 1.5rem;
    }
  }
}
</style>
