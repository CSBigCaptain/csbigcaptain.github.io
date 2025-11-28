<script setup lang="ts">
const { mduiDark, toggleDark } = useTheme()
</script>
<template>
  <mdui-button-icon
    slot="trigger"
    @click="
      () => {
        toggleDark[0]!()
      }
    "
  >
    <client-only>
      <Icon name="ic:round-nightlight" v-if="mduiDark" />
      <Icon name="ic:round-wb-sunny" v-else />
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
