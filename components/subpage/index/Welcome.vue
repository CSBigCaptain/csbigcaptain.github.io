<template>
  <div class="main" Welcome>
    <div class="slogen">
      <h1>CSBigCaptain</h1>
      <h2>Happy New Year, 2025!</h2>
      <mdui-button class="button" href="/blog">Went to Blog List</mdui-button>
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const createSpark = () => {
    let spark = document.createElement("div")
    let main = document.querySelector(".main")
    spark.classList.add("spark")
    let randomX = Math.random() * (main as HTMLElement).offsetWidth
    let randomY = Math.random() * (main as HTMLElement).offsetHeight * 2
    spark.style.left = `${randomX}px`
    spark.style.top = `${randomY}px`
    spark.style.transform = `scale(${Math.random() * 3})`
    spark.style.filter = `hue-rotate(${Math.random() * 360}deg)`

    for (var i = 0; i <= 7; i++) {
      let span = document.createElement("span")
      span.style.transform = `rotate(${i * 45}deg)`
      spark.appendChild(span)
    }

    if (main) {
      main.appendChild(spark)
    }
    setTimeout(() => {
      spark.remove()
    }, 1505)
  }
  const createSparks = setInterval(createSpark, 250)
})
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  --nav-height: 64px;
}

.main {
  width: 100%;
  height: calc(100vh - var(--nav-height));
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

.main .slogen {
  text-align: center;
}

.main .slogen h1 {
  font-size: 2.5rem;
  letter-spacing: 0.125rem;
  line-height: 3.2rem;
  color: rgba(00, 00, 00, 0);
  -webkit-text-stroke: 0.1rem var(--body-primary-color);
}

.main .slogen h2 {
  font-size: 1.5rem;
  letter-spacing: 0.02rem;
  line-height: 2.3rem;
  color: var(--body-secondary-color);
}

.main .slogen .button {
  margin: 0.5rem 0;
}
</style>

<style>
.main[Welcome] .spark {
  position: absolute;
  width: 40px;
  height: 40px;
}

.main[Welcome] .spark span {
  position: absolute;
  width: 2px;
  height: 60px;
  pointer-events: none;
  overflow: hidden;
  z-index: 999999;
}

.main[Welcome] .spark span::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: blue;
  opacity: 0.8;
  animation: animate 0.75s ease-in-out forwards;
}

@keyframes animate {
  0% {
    transform: translateY(-45%);
  }
  100% {
    transform: translateY(-101%);
  }
}
</style>
