<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

<script setup lang="ts">
const { setColorTheme, useDynamicTheme } = useTheme()
setColorTheme()
useDynamicTheme().start()
</script>
