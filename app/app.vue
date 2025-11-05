<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

<script setup lang="ts">
const { getPagesTheme } = useTheme()
getPagesTheme()
</script>
