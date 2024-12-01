<script setup lang="ts">
import "/assets/css/welcome-page.css"

definePageMeta({
  layout: false,
})

useHead({
  title: "首页 - CSBigCaptain",
})
</script>

<template>
  <NuxtLayout name="default">
    <template #topic>首页</template>
    <SubpageIndexWelcome />
    <SubpageIndexSponser />
  </NuxtLayout>
</template>

