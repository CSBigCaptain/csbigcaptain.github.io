<template>
  <mdui-button-icon @click="share">
    <mdui-icon-share></mdui-icon-share>
  </mdui-button-icon>
</template>

<script lang="ts" setup>
const share = () => {
  const { share, isSupported } = useShare()
  share({
    title: document.title,
    text: '嘿伙计👋，给你分享个好东西！',
    url: location.href,
  })
}
</script>

<style></style>
