<template>
  <mdui-layout>
    <ClientOnly>
      <DefaultNav @open-drawer="toggleDrawer">
        <template #topic-text><slot name="topic-text" /></template>
      </DefaultNav>
      <mdui-navigation-drawer
        modal
        close-on-overlay-click
        close-on-esc
        :open="drawerStatus"
        @close="drawerStatus = false"
      >
        <NavigationDrawerList />
      </mdui-navigation-drawer>
    </ClientOnly>
    <mdui-layout-main>
      <csbig-container>
        <slot />
      </csbig-container>
      <FooterDefault
    /></mdui-layout-main>
  </mdui-layout>
</template>

<script setup lang="ts">
const [drawerStatus, toggleDrawer] = useToggle(false);
</script>

<style lang="less" scoped>
mdui-layout {
  scroll-behavior: smooth;
  min-width: 320px;
  overflow: hidden;
  position: relative;
}
// top-app-bar 的 z-index 值为100
// navigation-drawer 的 z-index 值为99
mdui-navigation-drawer {
  --shape-corner: 0px;
  --z-index: 99;
  mdui-list {
    padding-top: 64px;
  }
}


</style>
