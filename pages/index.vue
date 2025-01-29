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
    <template #full-width>
      <SubpageIndexWelcome />
    </template>
    <SubpageIndexSponser />
  </NuxtLayout>
</template>
