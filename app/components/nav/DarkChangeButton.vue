<script setup lang="ts"></script>
<template>
  <mdui-button-icon
    slot="trigger"
    @click="
      () => {
        toggleDark[0]()
      }
    "
  >
    <client-only>
      <mdui-icon-mode-night v-if="mduiDark"></mdui-icon-mode-night>
      <mdui-icon-wb-sunny v-else></mdui-icon-wb-sunny>
    </client-only>
  </mdui-button-icon>
</template>
<style scoped>
mdui-menu {
  width: 130px;
  height: auto;
  background-color: rgb(var(--mdui-color-surface-variant));
  color: rgb(var(--mdui-color-on-surface-variant));
  border-radius: 0.75rem;
}
</style>
