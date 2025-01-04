<template>
  <div class="main index-sponser">
    <h2>Sponsers</h2>
    <div class="platinum" v-if="sponser.platinum">
      <h3>Platinum</h3>
      <div class="numbers">
        <mdui-card
          v-for="item in sponser.platinum"
          variant="elevated"
          clickable
          target="_blank"
          :href="item.href"
        >
          <div class="container">
            <div class="img"><img :src="item.imgUrl" alt="" /></div>
            <div class="info">
              <div class="nick-name">{{ item.nickName }}</div>
              <div class="details">{{ item.details }}</div>
            </div>
          </div>
        </mdui-card>
      </div>
    </div>
    <div class="friend" v-if="sponser.friend">
      <h3>Friend</h3>
      <div class="numbers">
        <mdui-card
          v-for="item in sponser.friend"
          variant="elevated"
          clickable
          target="_blank"
          :href="item.href"
          :style = "{userSelect: item.href ? 'auto' : 'none'}"
        >
          <div class="container">
            <div class="img"><NuxtImg :src="item.imgUrl" alt="" /></div>
            <div class="info">
              <div class="nick-name">{{ item.nickName }}</div>
              <div class="details">{{ item.details }}</div>
            </div>
          </div>
        </mdui-card>
      </div>
    </div>
    <div class="space"></div>
  </div>
</template>

<script lang="ts" setup>
import sponser from "/assets/data/sponser"
</script>

<style scoped>
.main {
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.numbers {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

h2 {
  text-align: center;
  font-size: var(--index-welcome-h2);
}

h3 {
  text-align: center;
  font-size: var(--index-welcome-h3);
}

mdui-card {
  width: 300px;
  height: 120px;
  margin-top: 10px;
  margin-bottom: 10px;
  .container {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .img {
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
  }
  .info {
    padding-left: 15px;
    .nick-name {
      font-size: 1.3rem;
      font-weight: bolder;
    }
  }
  .details {
    font-size: 15px;
  }
}

.space {
  width: 100%;
  height: 80px;
}
</style>
