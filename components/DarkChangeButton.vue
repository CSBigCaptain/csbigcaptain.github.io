<script setup lang="ts">
import{setDarkTheme} from '~/composables/theme'


</script>
<template>
  <nav-drop-down>
    <mdui-button-icon slot="trigger">
      <mdui-icon-mode-night></mdui-icon-mode-night>
    </mdui-button-icon>
    <mdui-menu>
      <mdui-menu-item class="item" @click="setDarkTheme('light')">Light Mode</mdui-menu-item>
      <mdui-menu-item class="item" @click="setDarkTheme('dark')">Dark Mode</mdui-menu-item>
      <mdui-menu-item class="item" @click="setDarkTheme('auto')">System</mdui-menu-item>
    </mdui-menu>
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

.item {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>