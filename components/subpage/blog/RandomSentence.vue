<template>
  <div class="OuterMain">
    <div class="inner">
      <div class="sentence">{{ sentence ? sentence.sentence : "" }}</div>
      <div class="source">
        {{ sentence ? sentence.author : "" }}
        {{ sentence ? `（${sentence.name}）` : "" }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
let sentence = ref()

const getSentence = () => {
  return fetch("https://open.saintic.com/api/sentence/", {
    method: "GET",
  }).then((res) => {
    res.json().then((data) => {
      sentence.value = data.data
    })
  })
}

onMounted(() => {
  getSentence()
})
</script>

<style scoped lang="less">
.OuterMain {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45vh;
  background: rgb(var(--mdui-color-surface-container-highest));
  transform: translateY(calc(-1 * var(--inline-padding)));
  .inner {
    width: 70%;
    min-width: 370px;
    max-width: 2160px;
    padding: var(--inline-padding);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    .sentence {
      font-size: 1.5rem;
      font-weight: 500;
      text-align: center;
      margin-bottom: 10px;
      transform: translateX(7px);
    }
    .source {
      width: 100%;
      font-size: 1rem;
      font-weight: 400;
      text-align: center;
      margin-top: 10px;
    }
  }
}
</style>
