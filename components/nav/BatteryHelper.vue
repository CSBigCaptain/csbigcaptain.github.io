<script setup lang="ts">
import "/composables/battery-helper"
</script>

<template>
  <ClientOnly>
<!-- 不开仅客户端渲染水合作用会出bug -->
    <NavDropDown trigger="hover">
      <NavBatterySmartIcon />
      <mdui-card>
        <div v-if="isSupportBattery">
          <div class="item" v-if="chargingTime != Infinity">
            <strong class="tpc">预计充满时间</strong>
            <div class="value">{{ chargingTime }}</div>
          </div>
          <div class="item" v-if="dischargingTime != Infinity">
            <strong class="tpc">预计续航时间</strong>
            <div class="value">{{ dischargingTime }}</div>
          </div>
          <div class="item">
            <strong class="tpc">充电状态</strong>
            <div class="value">{{ charging ? '充电中' : '使用电池' }}</div>
          </div>
          <div class="item" style="display: flex; justify-content: space-between;">
            <strong class="tpc">当前电量</strong>
            <div class="value">{{ `${batteryLevel * 100}%` }}</div>
          </div>
        </div>
        <div v-else>
          当前设备不支持查看电池信息，部分浏览器和设备无法查看系正常现象
        </div>
      </mdui-card>
    </NavDropDown>
  </ClientOnly>
</template>

<style scoped>
@import "/assets/css/global.less";

mdui-card {
  width: 150px;
}

</style>