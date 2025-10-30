<template>
  <NuxtLayout name="default">
    <template #topic-text>TEST</template>
    <main>
      <h1>TEST</h1>
      <div style="font-size: 2rem">DrawerStatus: {{ drawerStatus }}</div>
      <div style="font-size: 2rem">SearchStatus: {{ searchStatus }}</div>
      <mdui-button @click="toggleDrawerStatus()">Change Drawer Status</mdui-button>
      <mdui-button @click="toggleSearchStatus()">Change Search Status</mdui-button>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { drawerStatus, toggleDrawerStatus, searchStatus, toggleSearchStatus } =
  useLayoutStatus()
</script>

<style></style>
