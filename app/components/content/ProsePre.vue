<template>
  <div class="code-wrapper" v-bind="$attrs">
    <!-- 代码块头部 -->
    <div class="code-header">
      <div class="info">
        <div class="lang">{{ props.language }}</div>
      </div>
      <div class="actions">
        <Transition name="fade" mode="out-in">
          <mdui-button-icon @click="copyCode" class="copy-btn">
            <mdui-icon-content-copy
              v-if="!copied"
              key="copy"
            ></mdui-icon-content-copy>
            <mdui-icon-done v-else key="done"></mdui-icon-done>
          </mdui-button-icon>
        </Transition>
      </div>
    </div>

    <!-- 代码内容区 -->
    <div class="code-container">
      <pre
        :class="`language-${props.language}`"
        class="shiki"
      ><code><slot /></code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@mdui/icons/content-copy.js'
import '@mdui/icons/done.js'

// 定义组件属性
const props = defineProps<{
  code: string
  language?: string
  filename?: string
}>()

const copied = ref(false)

// 复制代码功能
const copyCode = async () => {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style scoped lang="less">
.code-wrapper {
  margin: 1rem 0;
  border-radius: 10px;
  overflow: hidden;
  background: rgb(var(--mdui-color-surface-container-highest));

  .code-header {
    display: flex;
    justify-content: space-between;
    padding: 5px 16px;
    background: rgba(var(--mdui-color-primary), 0.1);

    .info {
      font-size: 1.05rem;
      color: var(--body-primary-color);
      display: flex;
      align-items: center;

      .lang {
        width: 5rem;
      }
    }

    .actions {
      height: 40px;
    }
  }

  .code-container {
    display: flex;

    pre {
      width: 100%;
      height: auto;
      margin: 0;
      font-size: 0.85rem;
      line-height: 1.2rem;
      padding: 10px 15px;
      overflow-x: auto;
      flex: 1;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
