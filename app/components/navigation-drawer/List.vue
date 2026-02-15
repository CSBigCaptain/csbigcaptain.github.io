<!-- eslint-disable -->
<script lang="ts" setup>
import 'mdui/components/list'
import 'mdui/components/list-item'

const { data } = await useAsyncData('NavigationDrawerList', () => {
  return queryCollection('navigationDrawerList').first()
}, {
  server: true,
  lazy: false,
  getCachedData: key => useNuxtApp().payload.data[key] || useNuxtApp().static.data[key]
})

const list = computed(() => {
  return data.value?.body ?? []
})
</script>

<template>
  <mdui-list>
    <NuxtLink v-for="item in list" :key="item.text" :to="item.link">
      <mdui-list-item class="ps-1">{{ item.text }}</mdui-list-item>
    </NuxtLink>
  </mdui-list>
</template>
