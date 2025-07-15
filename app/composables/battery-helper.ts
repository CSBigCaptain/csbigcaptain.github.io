let isSupportBattery: ComputedRef<boolean>
let batteryInfo
let chargingTime: Ref<number>
let dischargingTime: Ref<number>
let charging: Ref<boolean>
let batteryLevel: Ref<number>

if (import.meta.client) {
  batteryInfo = useBattery()
  isSupportBattery = batteryInfo.isSupported
  chargingTime = batteryInfo.chargingTime
  dischargingTime = batteryInfo.dischargingTime
  charging = batteryInfo.charging
  batteryLevel = batteryInfo.level
}

export {
  isSupportBattery,
  batteryInfo,
  chargingTime,
  dischargingTime,
  charging,
  batteryLevel,
}
