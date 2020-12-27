<template>
  <div class="card">
    <div class="card-title">寿司</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.card {
  &-title {
    font-size: 16px;
    background-color: azure;
    @include mq(sm) {
      background-color: peru;
    }
    @include mq(md) {
      background-color: red;
    }
    @include mq(lg) {
      background-color: blue;
    }
    @include mq(xl) {
      background-color: aquamarine;
    }
  }
}
</style>
