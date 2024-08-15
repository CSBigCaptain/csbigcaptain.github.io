<script setup lang="ts">
import {works} from "/assets/data/indexData";

const columns = ref(4)
const cardsHub = ref()

/**
 * @param columns 列数
 * @description 生成网格布局列数
 */
const itemStyle = (columns: number) => {
  return { gridTemplateColumns: `repeat(${columns}, 1fr)` }
}
const updateColumns = () => {
  const containerWidth = cardsHub.value.clientWidth;
  if (containerWidth < 400) {
    columns.value = 1
  } else if (containerWidth < 850) {
    columns.value = 2;
  } else if (containerWidth < 1100) {
    columns.value = 3;
  } else {
    columns.value = 4;
  }
};

onMounted(() => {
  updateColumns();
  window.addEventListener('resize', updateColumns);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateColumns);
});
</script>

<template>
 <div ref="cardsHub" class="cardsHub" :style="itemStyle(columns)">
   <mdui-card v-for="item in works" clickable
              :href="item.href" target="_blank">
     <h2>{{ item.name }}</h2>
     <p>{{ item.description }}</p>
   </mdui-card>
 </div>
</template>

<style scoped lang="less">

.cardsHub {
  width: min(100%, 1440px);
  margin: 0 auto;
  display: grid;
  grid-auto-rows: 350px;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 20px;
  h2 {
    text-align: center;
  }
}
</style>