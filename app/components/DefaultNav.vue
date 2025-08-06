<template>
  <ClientOnly>
    <mdui-top-app-bar style="position: fixed">
      <mdui-button-icon @click="$emit('open-drawer')">
        <mdui-icon-menu></mdui-icon-menu>
      </mdui-button-icon>
      <mdui-top-app-bar-title style="flex-grow: 1">
        <!-- 插槽 topic-text : 顶部导航显示的标题 -->
        <slot name="topic-text" />
      </mdui-top-app-bar-title>
      <div class="rt-btn-hub">
        <NavSearchButton />
        <NavBatteryHelper />
        <NavDarkChangeButton />
        <NavChangeWebColor />
        <NavShareButton />
        <!-- <NavMoreButton /> -->
      </div>
    </mdui-top-app-bar>
  </ClientOnly>
</template>

<script lang="ts" setup>
import 'mdui/components/button-icon.js'
import '@mdui/icons/search.js'
import '@mdui/icons/menu.js'
import '@mdui/icons/more-vert.js'
import '@mdui/icons/mode-night.js'
import '@mdui/icons/wb-sunny.js'
import '@mdui/icons/palette.js'
import '@mdui/icons/share.js'
</script>

<style scoped>
mdui-top-app-bar {
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgb(var(--mdui-color-surface-variant));
}
</style>
