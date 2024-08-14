<template>
  <div class="mdui-theme-auto webMain">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import 'mdui/mdui.css';
import 'mdui';
import {getPagesTheme} from '~/composables/theme'

getPagesTheme()
</script>

<style scoped>
@import 'assets/css/global.less';

.webMain {
  scroll-behavior: smooth;
}
</style>