<template>
  <div class="mdui-theme-auto main">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import 'mdui/mdui.css';
import 'mdui';
import { setColorScheme } from 'mdui/functions/setColorScheme.js';

setColorScheme('#478384');
</script>

<style scoped>
@import 'assets/css/global.less';

.main {
  scroll-behavior: smooth;
}
</style>