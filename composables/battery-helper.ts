import {useBattery} from "@vueuse/core";

let isSupportBattery: ComputedRef<boolean>
let batteryInfo
let chargingTime: Ref<number>
let charging: Ref<boolean>
let batteryLevel: Ref<number>

if(import.meta.client) {
    batteryInfo = useBattery()
    isSupportBattery = batteryInfo.isSupported
    chargingTime = batteryInfo.chargingTime
    charging = batteryInfo.charging
    batteryLevel = batteryInfo.level
}


export {
    isSupportBattery,
    batteryInfo,
    chargingTime,
    charging,
    batteryLevel,
}