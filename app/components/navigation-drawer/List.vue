<!-- eslint-disable -->
<script lang="ts" setup>
import 'mdui/components/list'
import 'mdui/components/list-item'

const { data } = await useAsyncData('NavigationDrawerList', () => {
  return queryCollection('navigationDrawerList').first()
})

const list = computed(() => {
  return data.value?.body ?? []
})
</script>

<template>
  <mdui-list>
    <NuxtLink v-for="item in list" :key="item.text" :to="item.link">
      <mdui-list-item>{{ item.text }}</mdui-list-item>
    </NuxtLink>
  </mdui-list>
</template>

<style lang="less" scoped>
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
