<template>
  <mdui-card class="wechat">
    <div class="flip">
      <div class="wc-card face front">
        <img src="https://upload-bbs.miyoushe.com/upload/2025/08/06/125766904/cf92d0f791458c288c7e308e9e8df1f5_5078983739960715024.png">
      </div>
      <div class="wc-card face back">
        <img src="https://wdcdn.qpic.cn/MTMxMDI2NjM5MzQ0NzA0Nzg_20442_GkCgScqf2_Ve7n58_1767451285">
      </div>
    </div>
  </mdui-card>
</template>

<style lang="less" scoped>
.wechat {
  height: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  background-color: rgba(0, 128, 0, 0.7);
  container-type: inline-size;
  perspective: 800px;

  @media (max-width: 424px) {
    // 手机设备没必要显示此组件
    display: none;
  }
}
.flip {
  position: relative;
  width: 80%;
  height: 100px;
  transition: transform 0.3s;
  transform-style: preserve-3d;
}
@container (max-width: 230px) {
  .flip {
    height: 70px;
  }
}

.wc-card {
  width: 80%;
  height: 100%;
}
.face {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  backface-visibility: hidden;
}
.face.back {
  transform: rotateY(180deg);
}
.wechat:hover .flip {
  transform: rotateY(180deg);
}
.face.front {
  img {
    height: 100%;
  }
}
.face.back {
  img {
    height: 100%;
  }
}
</style>
