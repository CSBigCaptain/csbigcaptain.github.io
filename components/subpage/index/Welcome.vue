<script setup lang="ts">
import { followIcons } from "/assets/data/indexData"

</script>

<template>
  <div class="main index-welcome">
    <div class="tpc">
      <div class="fst-tpc">
        <div class="a"><h1>CSBigCaptain</h1></div>
      </div>
      <div class="sec-tpc">
        <div class="b">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, in!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            delectus!
          </p>
          <mdui-button href="/blog">Went to Blog</mdui-button>
        </div>
      </div>
    </div>
    <div class="follow">
      <div class="follow-tpc">
        <div class="follow-tpc-inner"><h2>Follow Me:</h2></div>
      </div>
      <div class="icon-container">
        <div v-for="item in followIcons" class="icons">
          <a :href="item.href" target="_blank">
            <div class="icons-inner"><img :src="item.src" :alt="item.name"></div>
          </a>
        </div>
      </div>
    </div> 
  </div>
</template>

<style scoped lang="less">
@BigTopicWidth: min(70%, 25rem);
@SingleIconWidth: 45px;
@TransitionAnimateTime: 0.5s;

* {
  margin: 0;
  padding: 0;
}

.main > * {
  // 主轴居中后再稍微往上一点儿更美观
  transform: translateY(-30px);
}
.main {
  height: calc(80vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(40px);
  .tpc {
    width: 100%;
    text-align: center;
    .a {
      width: @BigTopicWidth;
      text-align: center;
      margin: 0 auto;
      overflow: visible;
      h1 {
        width: auto;
        margin: auto;
        font-size: var(--index-welcome-h1);
        font-weight: bolder;
      }
    }
    .b {
      min-width: 200px;
      text-align: center;
      margin: 10px auto;
      min-height: min(12vh, 120px);
      max-height: min(50vh, 500px);
      overflow: hidden;
      overflow-x: visible;
      overflow-y: auto;
      p {
        font-size: var(--index-welcome-detail);
        margin: 7px 0;
        line-height: 1.5;
      }
    }
    mdui-button {
      margin-top: 30px;
    }
  }
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
}
</style>
