<script setup>
import IndexNav from '~/components/IndexNav.vue';
import IndexFooter from '~/components/IndexFooter.vue';
</script>

<template>
  <index-nav><template #topic>首页</template></index-nav>
    <slot />
  <index-footer />
</template>

<style scoped lang="less">

</style>