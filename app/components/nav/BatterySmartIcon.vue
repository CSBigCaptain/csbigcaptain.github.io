<script setup lang="ts">
const { isSupported, level, charging } = useBattery()
</script>

<template>
  <mdui-button-icon slot="trigger">
    <Icon
      name="ic:round-battery-charging-full"
      v-if="isSupported && charging"
    />
    <Icon
      name="ic:round-battery-0-bar"
      v-else-if="isSupported && level <= 0.1"
    />
    <Icon
      name="ic:round-battery-1-bar"
      v-else-if="isSupported && level <= 0.2"
    />
    <Icon
      name="ic:round-battery-2-bar"
      v-else-if="isSupported && level <= 0.35"
    />
    <Icon
      name="ic:round-battery-3-bar"
      v-else-if="isSupported && level <= 0.5"
    />
    <Icon
      name="ic:round-battery-4-bar"
      v-else-if="isSupported && level <= 0.65"
    />
    <Icon
      name="ic:round-battery-5-bar"
      v-else-if="isSupported && level <= 0.75"
    />
    <Icon
      name="ic:round-battery-6-bar"
      v-else-if="isSupported && level <= 0.9"
    />
    <Icon name="ic:round-battery-full" v-else-if="isSupported && level <= 1" />
    <Icon name="ic:round-battery-unknown" v-else-if="!isSupported" />
    <Icon name="ic:round-battery-alert" v-else></Icon>
  </mdui-button-icon>
</template>

<style scoped></style>
