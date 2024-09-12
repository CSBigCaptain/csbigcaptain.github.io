<script setup lang="ts">
import Introduce from "~/components/Works.vue";

definePageMeta({
  layout: false,
})

useHead({
  title: '首页 - CSBigCaptain',
})
</script>

<template>
  <NuxtLayout name="default">
    <template #topic>首页</template>
    <div class="body">
      <div class="bodyInner">
        <welcome-page />
        <works />
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="less">
//@import "assets/css/global.less";

.body {
  width: 100%;
  .bodyInner {
    width: var(--inline-width);
    margin: 0 auto;
  }
}

</style>