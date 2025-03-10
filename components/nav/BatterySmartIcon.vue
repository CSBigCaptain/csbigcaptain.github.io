<script setup lang="ts">
import "~/composables/battery-helper"
import "@mdui/icons/battery-unknown.js"
import "@mdui/icons/battery-alert.js"
import "@mdui/icons/battery-0-bar.js"
import "@mdui/icons/battery-1-bar.js"
import "@mdui/icons/battery-2-bar.js"
import "@mdui/icons/battery-3-bar.js"
import "@mdui/icons/battery-4-bar.js"
import "@mdui/icons/battery-5-bar.js"
import "@mdui/icons/battery-6-bar.js"
import "@mdui/icons/battery-full.js"
import "@mdui/icons/battery-charging-full.js"
</script>

<template>
  <mdui-button-icon slot="trigger">
    <mdui-icon-battery-charging-full v-if="isSupportBattery && charging"></mdui-icon-battery-charging-full>
    <mdui-icon-battery-0-bar v-else-if="isSupportBattery && batteryLevel <= 0.1"></mdui-icon-battery-0-bar>
    <mdui-icon-battery-1-bar v-else-if="isSupportBattery && batteryLevel <= 0.2"></mdui-icon-battery-1-bar>
    <mdui-icon-battery-2-bar v-else-if="isSupportBattery && batteryLevel <= 0.35"></mdui-icon-battery-2-bar>
    <mdui-icon-battery-3-bar v-else-if="isSupportBattery && batteryLevel <= 0.5"></mdui-icon-battery-3-bar>
    <mdui-icon-battery-4-bar v-else-if="isSupportBattery && batteryLevel <= 0.65"></mdui-icon-battery-4-bar>
    <mdui-icon-battery-5-bar v-else-if="isSupportBattery && batteryLevel <= 0.75"></mdui-icon-battery-5-bar>
    <mdui-icon-battery-6-bar v-else-if="isSupportBattery && batteryLevel <= 0.9"></mdui-icon-battery-6-bar>
    <mdui-icon-battery-full v-else-if="isSupportBattery && batteryLevel <= 1"></mdui-icon-battery-full>
    <mdui-icon-battery-unknown v-else-if="!isSupportBattery"></mdui-icon-battery-unknown>
    <mdui-icon-battery-alert v-else></mdui-icon-battery-alert>
  </mdui-button-icon>
</template>

<style scoped>

</style>