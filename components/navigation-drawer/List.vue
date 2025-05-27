<template>
  <mdui-list>
    <mdui-list-item v-for="item in list" :key="item.text" :href="item.link">
      {{ item.text }}
    </mdui-list-item>
    <mdui-list-item href="/rss">
      RSS 订阅 <mdui-badge>Beta</mdui-badge>
    </mdui-list-item>
  </mdui-list>
</template>

<script lang="js" setup>
const {data} = await useAsyncData("NavigationDrawerList", () => {
  return queryCollection("navigationDrawerList").all()
})
const list = data.value[0].meta.body
</script>

<style>

</style>