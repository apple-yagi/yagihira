<template>
  <v-layouts>
    <Nuxt />
  </v-layouts>
</template>

<script lang="ts">
import Vue from 'vue'
import VLayouts from '~/components/layouts/VLayouts.vue'

export default Vue.extend({
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.isDark ? 'dark-mode' : 'light-mode',
      },
    }
  },
  components: {
    VLayouts,
  },
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
  margin: 120px auto 0;
  width: 95%;
  @include mq(lg) {
    width: 100%;
    margin: 125px auto 0;
  }
}

.section {
  margin: 120px auto 0;
  max-width: 800px;
  padding: 0 20px;
  @include mq(sm) {
    width: 100%;
    margin: 125px auto 0;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
