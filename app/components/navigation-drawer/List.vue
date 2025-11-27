<template>
  <mdui-list>
    <NuxtLink :to="item.link" v-for="item in list" :key="item.text">
      <mdui-list-item>{{ item.text }}</mdui-list-item>
    </NuxtLink>
  </mdui-list>
</template>

<script lang="js" setup>
const { data } = await useAsyncData('NavigationDrawerList', () => {
  return queryCollection('navigationDrawerList').all()
})
const list = data.value[0].meta.body
</script>

<style scoped>
mdui-list {
  padding-top: 64px;
}

mdui-list-item {
  padding-left: 4px;
  letter-spacing: 9em;
}

a:-webkit-any-link,
a:any-link {
  text-decoration: none;
  color: inherit;
}
</style>
