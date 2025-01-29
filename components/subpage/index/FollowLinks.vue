<script setup lang="ts">
import { followIcons } from "/assets/data/indexData"
</script>

<template>
  <div class="follow">
    <div class="follow-tpc">
      <div class="follow-tpc-inner"><h2>Follow Me:</h2></div>
    </div>
    <div class="icon-container">
      <div v-for="item in followIcons" class="icons">
        <a :href="item.href" target="_blank">
          <div class="icons-inner">
            <img :src="item.src" :alt="item.name" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@BigTopicWidth: min(70%, 25rem);
@SingleIconWidth: 45px;
@TransitionAnimateTime: 0.5s;

.follow {
  padding-top: max(4%, 20px);
  .follow-tpc {
    width: 100%;
    .follow-tpc-inner {
      font-size: var(--index-welcome-h2);
      text-align: center;
      margin: 0 auto;
      width: @BigTopicWidth;
    }
  }
}
.icon-container {
  display: flex;
  margin-top: max(2%, 20px);
  justify-content: center;
  .icons {
    width: @SingleIconWidth;
    height: @SingleIconWidth;
    border-radius: 20%;
    margin: 10px;
    background-color: rgb(var(--mdui-color-surface-light));
    .icons-inner {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .icons:hover {
    background-color: rgb(var(--mdui-color-surface-variant-light));
    transition: all @TransitionAnimateTime ease-in-out;
  }
  .icons:hover .icons-inner {
    padding: 9px;
    transition: all @TransitionAnimateTime ease-in-out;
  }
}
</style>
