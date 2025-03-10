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

<script lang="ts" setup>
let sentence = ref()
let displayText = ref('')
let fullText = ref('')
let isTyping = ref(false)  // 添加打字状态控制

// 改进的打字效果函数
const typeText = async () => {
  isTyping.value = true
  displayText.value = ''
  
  // 为每个字符设置随机的打字间隔，模拟真实打字效果
  for (let i = 0; i < fullText.value.length; i++) {
    if (!isTyping.value) break  // 允许中断打字
    displayText.value += fullText.value[i]
    // 根据标点符号调整停顿时间
    const delay = fullText.value[i].match(/[，。！？、]/) ? 300 : 50
    await new Promise(resolve => setTimeout(resolve, delay))
  }
  
  isTyping.value = false
}

const getSentence = async () => {
  const res = await fetch("https://open.saintic.com/api/sentence/", {
    method: "GET",
  })
  const data = await res.json()
  sentence.value = data.data
  fullText.value = data.data.sentence
  await typeText()
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
.cursor {
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
