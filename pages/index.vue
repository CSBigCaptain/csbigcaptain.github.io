<script setup lang="ts">
import Introduce from "~/components/Introduce.vue";

definePageMeta({
  layout: false,
})

useHead({
  title: '首页 - CSBigCaptain',
})
</script>

<template>
  <div class="body">
    <NuxtLayout name="default">
      <template #topic>首页</template>
      <div class="body">
        <welcome-page />
        <introduce />
      </div>
    </NuxtLayout>
  </div>
</template>

<style>
@import "assets/css/global.less";

.body {
  height: auto;
}

</style>