<template>
  <div class="webMain">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import "mdui/mdui.css";
import "mdui";
import { getPagesTheme } from "/composables/theme";

getPagesTheme()
</script>

<style scoped lang="less">
.webMain {
  scroll-behavior: smooth;
  min-width: 330px;
  overflow: hidden;
  position: relative;
}
</style>
