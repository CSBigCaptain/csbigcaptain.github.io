<script setup lang="ts">
import "~/composables/battery-helper"

</script>

<template>
  <client-only>
<!--  不开仅客户端渲染水合作用会出bug-->
    <nav-drop-down>
      <battery-smart-icon />
      <mdui-card>
        <div v-if="isSupportBattery">
          <div v-if="chargingTime != Infinity">
            {{ `电源插入时间：${isSupportBattery ? chargingTime : "none"}` }}
          </div>
          <div>
            {{ `充电状态：${charging ? '充电中' : '使用电池'}` }}
          </div>
          <div>
            {{ `当前电量：${batteryLevel * 100} %` }}
          </div>
        </div>
        <div v-else>
          当前设备不支持查看电池信息
        </div>
      </mdui-card>
    </nav-drop-down>
  </client-only>
</template>

<style scoped>
@import "assets/css/global.less";

mdui-card {
  width: 180px;
}
</style>