<template>
  <div class="webMain">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import 'mdui/mdui.css'
import 'mdui'
import {getPagesTheme} from '/composables/theme'

onMounted(() => {
  getPagesTheme()
})
</script>

<style scoped lang="less">
//@import 'assets/css/global.less';

.webMain {
  scroll-behavior: smooth;
  min-width: 330px;
}
</style>