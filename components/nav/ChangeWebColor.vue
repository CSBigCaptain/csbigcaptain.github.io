<script setup lang="ts">
import { defaultThemeColor, setColorTheme } from "/composables/theme"
import { ref } from "vue"

const selectedThemeColor = ref<string>(defaultThemeColor)
</script>

<template>
  <nav-drop-down>
    <mdui-button-icon slot="trigger">
      <mdui-icon-palette></mdui-icon-palette>
    </mdui-button-icon>
    <mdui-card>
      <div class="inner">
        <div class="topic">选择网页主题色</div>
        <input
          type="color"
          name="theme-color"
          class="color-chooser"
          id=""
          v-model="selectedThemeColor"
        />
        <div class="topic">或手动输入HEX色号</div>
        <input
          type="text"
          name="theme-color"
          class="color-hex"
          id=""
          v-model="selectedThemeColor"
        />
      </div>
      <mdui-button
        variant="outlined"
        class="button"
        @click="setColorTheme(selectedThemeColor)"
        >Confirm</mdui-button
      >
      <mdui-button
        variant="outlined"
        class="button"
        @click="selectedThemeColor = defaultThemeColor"
        >Reset</mdui-button
      >
    </mdui-card>
  </nav-drop-down>
</template>

<style scoped>
@import "/assets/css/global.less";

mdui-card {
  width: 200px;
}

.inner {
  padding-bottom: 10px;
  .topic {
    font-size: 15px;
    height: 30px;
    line-height: 30px;
  }
  .color-chooser {
    width: 60px;
    height: 30px;
    margin: 5px;
  }
  .color-hex {
    width: 60px;
    height: 20px;
    margin: 5px;
  }
  .button {
    height: 30px;
    margin: 5px;
  }
}
</style>
