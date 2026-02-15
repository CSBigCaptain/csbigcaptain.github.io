<script setup lang="ts">
// 定义组件属性
const props = defineProps<{
  code: string
  language?: string
  filename?: string
}>()

const copied = ref(false)

// 复制代码功能
async function copyCode() {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <div
    class="code-wrapper -mx-5 my-4 rounded-none md:mx-0 md:rounded-md
      overflow-hidden bg-surface-container-highest shadow-l1" v-bind="$attrs"
  >
    <!-- 代码块头部 -->
    <div class="code-header flex justify-between px-4 py-2 md:px-5 bg-secondary-container">
      <div class="text-xl text-on-secondary-container flex items-center">
        <div class="w-20">
          {{ props.language }}
        </div>
      </div>
      <div class="actions h-10">
        <Transition name="fade" mode="out-in">
          <mdui-button-icon class="copy-btn" @click="copyCode">
            <Icon v-if="!copied" key="copy" name="ic:baseline-content-copy" />
            <Icon v-else key="done" name="ic:baseline-done" />
          </mdui-button-icon>
        </Transition>
      </div>
    </div>

    <!-- 代码内容区 -->
    <div class="flex">
      <pre
        :class="`language-${props.language}`"
        class="shiki w-full h-auto m-0 text-sm/normal px-4 py-4 md:px-5 overflow-x-auto flex-1"
      ><code><slot /></code></pre>
    </div>
  </div>
</template>

<style scoped lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
