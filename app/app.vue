<script setup lang="ts">
const { setColorTheme } = useTheme()
setColorTheme()
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="gray" />
  <NuxtPage />
</template>
