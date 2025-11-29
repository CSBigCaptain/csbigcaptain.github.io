<script setup lang="ts">
const { setColorTheme, useDynamicTheme } = useTheme()
setColorTheme()
useDynamicTheme().start()
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>
