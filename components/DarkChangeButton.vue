<script setup lang="ts">

</script>
<template>
  <nav-drop-down>
    <mdui-button-icon slot="trigger" @click="toggleDark()">
      <client-only>
        <mdui-icon-mode-night v-if="isDark"></mdui-icon-mode-night>
        <mdui-icon-wb-sunny v-else></mdui-icon-wb-sunny>
      </client-only>
    </mdui-button-icon>
  </nav-drop-down>
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