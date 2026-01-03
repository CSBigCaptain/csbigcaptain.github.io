<script setup lang="ts">
const { setColorTheme } = useTheme()
setColorTheme()
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>
