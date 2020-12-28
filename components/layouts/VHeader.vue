<template>
  <header class="header flex justify-between">
    <span class="header-title"><nuxt-link to="/">Title</nuxt-link></span>
    <div class="flex space-x-4">
      <nuxt-link to="/404.html">error</nuxt-link>
      <v-toggle-button :value="isDark" @input="(e) => $emit('set', e)" />
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
  align-items: center;
  border-bottom: 1px solid #ebedef;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  padding: 0 20px;
  height: 60px;
  @include mq(md) {
    height: 70px;
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
