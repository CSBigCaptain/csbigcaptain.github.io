<!-- eslint-disable -->
<script setup>
const sentence = ref()
const displayText = ref('')
const fullText = ref('')
const isTyping = ref(false)

// 打字效果函数
async function typeText() {
  isTyping.value = true
  displayText.value = ''

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
    const res = await $fetch('https://open.saintic.com/api/sentence/')
    return {
      sentence: res?.data?.sentence || '',
      author: res?.data?.author || '',
      name: res?.data?.name || '',
    }
  },
  {
    default: () => null,
    server: false,
  },
)

// 监听数据变化并执行打字效果
watch(
  data,
  async (newData) => {
    if (newData?.sentence) {
      sentence.value = newData
      fullText.value = newData.sentence
      await typeText()
    }
  },
  { immediate: true },
)

// 组件卸载时停止打字
onBeforeUnmount(() => {
  isTyping.value = false
})
</script>

<template>
  <div
    class="OuterMain flex h-[45vh] w-full items-center justify-center bg-surface-container-highest"
  >
    <div class="inner flex w-[70%] max-w-540 min-w-92.5 flex-col items-center p-3.75">
      <div class="mb-4 min-h-8 cursor-pointer text-center text-2xl font-bold">
        {{ displayText }}
        <span v-if="isTyping" class="cursor">|</span>
      </div>
      <div class="source text-md text-center opacity-70">
        {{ sentence ? sentence.author : '' }}
        {{ sentence ? `（${sentence.name}）` : '' }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}
</style>
