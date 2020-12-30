<template>
  <section class="section">
    <div class="flex justify-end">
      <div class="profile-text">
        <h1 class="font-bold">Hiraoka</h1>
        <p>なんとか大学2年生</p>
      </div>
      <img
        class="profile-icon rounded-full"
        ontouchstart=""
        src="/pose_kiri_man.png"
        alt="kiri"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.profile {
  &-icon {
    width: 150px;
    height: 150px;
    margin: 0 20px;
    @include mq(sm) {
      width: 250px;
      height: 250px;
      margin: 0 40px;
    }
    @include mq(md) {
      width: 300px;
      height: 300px;
      margin: 0 50px;
    }
    @include mq(lg) {
      width: 350px;
      height: 350px;
      margin: 0 60px;
    }
  }
  &-text {
    padding-top: 50px;
  }
}
</style>
