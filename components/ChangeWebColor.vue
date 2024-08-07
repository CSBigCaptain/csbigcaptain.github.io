<script setup lang="ts">

</script>

<template>
  <nav-drop-down>
    <mdui-button-icon slot="trigger">
      <mdui-icon-palette></mdui-icon-palette>
    </mdui-button-icon>
    <mdui-card>
      <div class="inner">
        <div class="topic">选择网页主题色</div>
        <input type="color" name="theme-color" class="color-chooser" id="">
        <div class="topic">或手动输入HEX色号</div>
        <input type="text" name="theme-color" class="color-hex" id="">
      </div>
      <mdui-button variant="tonal" class="button">Confirm</mdui-button>
      <mdui-button variant="tonal" class="button">Reset</mdui-button>
    </mdui-card>
  </nav-drop-down>
</template>

<style scoped>
@import "assets/css/nav-card.less";


</style>