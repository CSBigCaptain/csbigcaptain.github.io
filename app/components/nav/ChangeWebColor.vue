<script setup lang="ts">
import { checkHexColor } from '~/utils/theme'

const { userThemeSettings, setRandomColor, setColorTheme } = useTheme()

const defaultThemeColor = userThemeSettings.value.preferredColor
const selectedThemeColor = ref<string>(defaultThemeColor)

const isHexColor = computed(() => {
  return checkHexColor(selectedThemeColor.value)
})
</script>

<template>
  <NavDropdown trigger="click">
    <mdui-button-icon slot="trigger" disabled="">
      <Icon name="ic:round-palette" />
    </mdui-button-icon>
    <NavDropdownCard width="180">
      <div class="inner">
        <div class="topic">
          选择网页主题色
        </div>
        <input
          v-model="selectedThemeColor"
          type="color"
          name="theme-color"
          class="color-chooser"
        >
        <div class="topic">
          或手动输入HEX色号
        </div>
        <input
          v-model="selectedThemeColor"
          type="text"
          name="theme-color"
          class="color-hex"
        >
      </div>
      <div class="button-collection">
        <mdui-button-icon
          variant="filled"
          :disabled="!isHexColor"
          @click="setColorTheme(selectedThemeColor)"
        >
          <Icon name="ic:round-check" />
        </mdui-button-icon>
        <mdui-button-icon variant="tonal" @click="selectedThemeColor = setRandomColor()">
          <Icon name="ic:baseline-auto-awesome" />
        </mdui-button-icon>
        <mdui-button-icon
          variant="outlined"
          @click="
            () => {
              setColorTheme(defaultThemeColor)
              selectedThemeColor = defaultThemeColor
            }
          "
        >
          <Icon name="ic:round-refresh" />
        </mdui-button-icon>
      </div>
    </NavDropdownCard>
  </NavDropdown>
</template>

<style lang="less" scoped>
.inner {
  padding-bottom: 10px;
  .topic {
    font-size: 15px;
    height: 30px;
    line-height: 30px;
  }
  .color-chooser {
    width: 80px;
    height: 30px;
    margin: 5px;
  }
  .color-hex {
    width: 80px;
    height: 20px;
    margin: 5px;
  }
}
.button-collection {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
</style>
