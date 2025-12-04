<script setup lang="ts">
import { checkHexColor } from '~/utils/theme'
import 'mdui/components/switch'

const { userThemeSettings, setRandomColor, setColorTheme } = useTheme()

const defaultThemeColor = userThemeSettings.value.preferredColor
const selectedThemeColor = ref<string>(defaultThemeColor)

const isHexColor = computed(() => {
  return checkHexColor(selectedThemeColor.value)
})

function toggleDynamicColor(event: Event) {
  const target = event.target as HTMLInputElement
  userThemeSettings.value.enableDynamicColor = target.checked
}
</script>

<template>
  <NavDropdown trigger="click">
    <mdui-button-icon slot="trigger">
      <Icon name="ic:round-palette" />
    </mdui-button-icon>
    <NavDropdownCard width="180">
      <div class="inner">
        <div class="toggle">
          <span>主题色随时间变化</span>
          <mdui-switch
            :checked="userThemeSettings.enableDynamicColor"
            @change="toggleDynamicColor"
          />
        </div>
        <div v-if="!userThemeSettings.enableDynamicColor" class="content">
          <div class="topic">
            选择网页主题色
          </div>
          <input
            v-model="selectedThemeColor" type="color" name="theme-color"
            class="color-chooser"
          >
          <div class="topic">
            或手动输入HEX色号
          </div>
          <input
            v-model="selectedThemeColor" type="text" name="theme-color"
            class="color-hex"
          >
          <div class="button-collection">
            <mdui-button-icon
              variant="filled" :disabled="!isHexColor"
              @click="setColorTheme(selectedThemeColor)"
            >
              <Icon name="ic:round-check" />
            </mdui-button-icon>
            <mdui-button-icon variant="tonal" @click="selectedThemeColor = setRandomColor()">
              <Icon name="ic:baseline-auto-awesome" />
            </mdui-button-icon>
            <mdui-button-icon
              variant="outlined" @click="
                () => {
                  setColorTheme(defaultThemeColor)
                  selectedThemeColor = defaultThemeColor
                }
              "
            >
              <Icon name="ic:round-refresh" />
            </mdui-button-icon>
          </div>
        </div>
      </div>
    </NavDropdownCard>
  </NavDropdown>
</template>

<style lang="less" scoped>
.inner {
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
  .button-collection {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding-top: 10px;
  }
}
</style>
