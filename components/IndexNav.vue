<template>
  <mdui-top-app-bar>
    <mdui-button-icon>
      <mdui-icon-menu></mdui-icon-menu>
    </mdui-button-icon>
    <mdui-top-app-bar-title style="flex-grow: 1">
      <!-- 插槽1: 顶部导航显示的标题 -->
      <slot name="topic" />
    </mdui-top-app-bar-title>
    <div class="rt-btn-hub">
      <nav-search-button />
      <battery-helper />
      <dark-change-button />
      <nav-more-button />
      <change-web-color />
    </div>
  </mdui-top-app-bar>
</template>

<script lang="ts" setup>
import "mdui/components/button-icon.js"
import '@mdui/icons/search.js'
import '@mdui/icons/menu.js'
import '@mdui/icons/more-vert.js'
import '@mdui/icons/mode-night.js'
import '@mdui/icons/wb-sunny.js'
import '@mdui/icons/palette.js'
import ChangeWebColor from "~/components/ChangeWebColor.vue";
import DarkChangeButton from "~/components/DarkChangeButton.vue";
import NavSearchButton from "~/components/NavSearchButton.vue";
import NavMoreButton from "~/components/NavMoreButton.vue";

</script>

<style>
@import "assets/css/global.less";

</style>