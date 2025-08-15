<template>
  <mdui-layout>
    <DefaultNav @open-drawer="toggleDrawer">
      <template #topic-text><slot name="topic-text" /></template>
    </DefaultNav>
    <aside>
      <mdui-navigation-drawer
        modal
        close-on-overlay-click
        close-on-esc
        :open="drawerStatus"
        @close="drawerStatus = false"
      >
        <NavigationDrawerList />
      </mdui-navigation-drawer>
    </aside>
    <mdui-layout-main>
      <slot name="full-width"></slot>
      <AppContainer>
        <slot />
      </AppContainer>
      <FooterDefault />
    </mdui-layout-main>
  </mdui-layout>
</template>

<script setup lang="ts">
const [drawerStatus, toggleDrawer] = useToggle(false)

useHead({
  htmlAttrs: {
    lang: 'zh-CN',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
})
</script>

<style lang="less" scoped>
mdui-layout {
  scroll-behavior: smooth;
  min-width: 320px;
}
// top-app-bar 的 z-index 值为100
// navigation-drawer 的 z-index 值为99

aside {
  z-index: 99;
}

mdui-navigation-drawer {
  --shape-corner: 0px;
}
</style>
