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
    if (!isTyping.value)
      break
    displayText.value += fullText.value[i]
    const delay = fullText.value[i].match(/[，。！？、]/) ? 300 : 50
    await new Promise(resolve => setTimeout(resolve, delay))
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
    class="OuterMain flex justify-center items-center
    w-full h-[45vh] bg-surface-container-highest"
  >
    <div class="inner w-[70%] min-w-92.5 max-w-540 p-3.75 flex flex-col items-center">
      <div class="text-2xl cursor-pointer text-center font-bold min-h-8 mb-4">
        {{ displayText }}
        <span v-if="isTyping" class="cursor">|</span>
      </div>
      <div class="source text-md opacity-70 text-center">
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
