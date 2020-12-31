<template>
  <header class="header">
    <p class="header-top">Created by Hiraoka & Yanagi</p>
    <div class="header-body flex justify-between">
      <span class="header-title"><nuxt-link to="/">Home</nuxt-link></span>
      <div class="flex space-x-4">
        <v-hamburer-menu />
        <v-toggle-button
          :value="isDark"
          @input="(mode) => changeMode({ mode: mode })"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import VToggleButton from '~/components/utils/toggle/VToggleButton.vue'
import VHamburerMenu from '~/components/layouts/VHamburerMenu.vue'
export default Vue.extend({
  components: {
    VToggleButton,
    VHamburerMenu,
  },
  computed: {
    isDark() {
      return this.$store.state.isDark
    },
  },
  methods: {
    ...mapActions(['changeMode']),
  },
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  @include mq(md) {
    height: 80px;
  }
  z-index: 99;
  &-top {
    padding: 0 20px;
  }
  &-body {
    padding: 0 20px;
    align-items: center;
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
