<template>
  <nav>
    <mdui-top-app-bar>
      <mdui-button-icon>
        <mdui-icon-menu></mdui-icon-menu>
      </mdui-button-icon>
      <mdui-top-app-bar-title style="flex-grow: 1">
        <!-- 插槽 name : 顶部导航显示的标题 -->
        <slot name="topic" />
      </mdui-top-app-bar-title>
      <div class="rt-btn-hub">
        <NavSearchButton />
        <NavBatteryHelper />
        <NavDarkChangeButton />
        <NavChangeWebColor />
        <NavMoreButton />
      </div>
    </mdui-top-app-bar>
  </nav>
</template>

<script lang="ts" setup>
import "mdui/components/button-icon.js"
import "@mdui/icons/search.js"
import "@mdui/icons/menu.js"
import "@mdui/icons/more-vert.js"
import "@mdui/icons/mode-night.js"
import "@mdui/icons/wb-sunny.js"
import "@mdui/icons/palette.js"
</script>

<style scoped>
mdui-top-app-bar {
  background-color: var(--bar-bg-color);
}
</style>
