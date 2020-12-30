<template>
  <section class="container section text-center">
    <h2>Which one to look at</h2>
    <div class="wrapper">
      <div class="right">
        <div class="triangle"></div>
        <p class="text">Illustrator</p>
        <img class="image" src="/pose_kiri_man.png" alt="dokata" />
      </div>
      <div class="left">
        <div class="triangle"></div>
        <p class="text">Web Engineer</p>
        <img class="image" src="/job_it_dokata.png" alt="dokata" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 80vw;
  @include mq(sm) {
    height: 70vw;
  }
  @include mq(md) {
    height: 60vw;
  }
  @include mq(lg) {
    height: 50vw;
  }
  @include mq(xl) {
    height: 40vw;
  }
}

.right {
  .triangle {
    border-radius: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
    width: 100%;
    height: 100%;
  }
  .image {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 10px;
    width: 45%;
    @include mq(sm) {
      right: 20px;
      width: 40%;
    }
    @include mq(md) {
      right: 30px;
      bottom: 20px;
      width: 35%;
    }
    transition: all 0.4s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
  .text {
    position: absolute;
    bottom: 10px;
    right: 50%;
    font-size: 24px;
    font-weight: bold;
    @include mq(md) {
      bottom: 30px;
      right: 40%;
      font-size: 50px;
    }
  }
}

.left {
  .triangle {
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
    width: 100%;
    height: 100%;
  }
  .image {
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
    width: 45%;
    @include mq(sm) {
      left: 20px;
      width: 40%;
    }
    @include mq(md) {
      left: 30px;
      top: 20px;
      width: 35%;
    }
    @include mq(xl) {
      top: 55px;
    }
    transition: all 0.4s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
  .text {
    position: absolute;
    top: 10px;
    left: 30%;
    font-size: 24px;
    font-weight: bold;
    @include mq(md) {
      top: 23px;
      left: 31%;
      font-size: 50px;
    }
    @include mq(xl) {
      top: 33px;
      left: 28%;
    }
  }
}
</style>
