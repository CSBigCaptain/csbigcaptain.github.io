<template>
  <div class="OuterMain">
    <div class="inner">
      <div class="sentence" @click="typeText">
        {{ displayText }}<span class="cursor" v-if="isTyping">|</span>
      </div>
      <div class="source">
        {{ sentence ? sentence.author : "" }}
        {{ sentence ? `（${sentence.name}）` : "" }}
      </div>
    </div>
  </div>
</template>

<script setup>
const sentence = ref()
const displayText = ref("")
const fullText = ref("")
const isTyping = ref(false)

// 打字效果函数
const typeText = async () => {
  isTyping.value = true
  displayText.value = ""

  for (let i = 0; i < fullText.value.length; i++) {
    if (!isTyping.value) break
    displayText.value += fullText.value[i]
    const delay = fullText.value[i].match(/[，。！？、]/) ? 300 : 50
    await new Promise((resolve) => setTimeout(resolve, delay))
  }

  isTyping.value = false
}

// 获取随机句子
const { data } = await useAsyncData(
  `sentence-${Math.floor(Date.now() / 60000)}`,
  async () => {
    const res = await $fetch("https://open.saintic.com/api/sentence/")
    return {
      sentence: res?.data?.sentence || "",
      author: res?.data?.author || "",
      name: res?.data?.name || "",
    }
  },
  {
    default: () => null,
    server: false
  }
)

// 监听数据变化并执行打字效果
watch(data, async (newData) => {
  if (newData?.sentence) {
    sentence.value = newData
    fullText.value = newData.sentence
    await typeText()
  }
}, { immediate: true })

// 组件卸载时停止打字
onBeforeUnmount(() => {
  isTyping.value = false
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
      line-height: 1.6;
      margin-bottom: 1rem;
      min-height: 2em;
      cursor: pointer;
      text-align: center;
      font-weight: bold;
    }
    
    .source {
      font-size: 1rem;
      opacity: 0.7;
      text-align: center;
    }
    
    .cursor {
      animation: blink 1s infinite;
      color: var(--mdui-color-primary);
    }
  }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
</style>
