<template>
  <header class="header" style="position: fixed; top: 0; left: 0; right: 0">
    <ClientOnly>
      <mdui-top-app-bar>
        <mdui-button-icon @click="$emit('open-drawer')">
          <Icon name="ic:round-menu" />
        </mdui-button-icon>
        <mdui-top-app-bar-title style="flex-grow: 1">
          <!-- 插槽 topic-text : 顶部导航显示的标题 -->
          <slot name="topic-text" />
        </mdui-top-app-bar-title>
        <div class="rt-btn-hub">
          <NavSearchButton />
          <NavChangeWebColor />
          <NavDarkChangeButton />
          <NavBatteryHelper />
          <NavShareButton />
          <NavMoreButton />
        </div>
      </mdui-top-app-bar>
    </ClientOnly>
  </header>
</template>

<style scoped>
.header {
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  position: fixed;
  height: 64px;
}

@media (max-width: 375px) {
  mdui-top-app-bar-title {
    visibility: hidden;
  }
}
</style>
