<template>
  <header class="header">
    <p class="header-top">Created by Hiraoka & Yanagi</p>
    <div class="header-body flex justify-between">
      <span class="header-title"><nuxt-link to="/">Title</nuxt-link></span>
      <div class="flex space-x-4">
        <nuxt-link to="/404.html">error</nuxt-link>
        <v-toggle-button :value="isDark" @input="(e) => $emit('set', e)" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import VToggleButton from '~/components/utils/toggle/VToggleButton.vue'
export default Vue.extend({
  components: {
    VToggleButton,
  },
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  &-top {
    padding: 0 20px;
    color: #d90d0d;
  }
  &-body {
    padding: 0 20px;
    align-items: center;
    height: 50px;
    @include mq(md) {
      height: 60px;
    }
  }
  &-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 45px;
    @include mq(lg) {
      font-size: 28px;
      line-height: 60px;
    }
  }
}
</style>
