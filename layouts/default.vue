<template>
  <v-layouts :isDark="isDark" @set="(e) => (isDark = e)">
    <Nuxt class="main" />
  </v-layouts>
</template>

<script lang="ts">
import Vue from 'vue'
import VLayouts from '~/components/layouts/VLayouts.vue'

export default Vue.extend({
  head() {
    return {
      bodyAttrs: {
        class: this.isDark ? 'dark-mode' : 'light-mode',
      },
    }
  },
  components: {
    VLayouts,
  },
  data: () => ({
    isDark: false,
  }),
})
</script>

<style lang="scss">
html {
  font-family: 'Avenir Next', 'Montserrat', Verdana, '游ゴシック', 'Yu Gothic',
    'YuGothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ',
    Meiryo, Osaka, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.main {
  margin-top: 70px;
  @include mq(md) {
    margin-top: 80px;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
