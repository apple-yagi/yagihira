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
        class: this.isDark ? 'dark-mode' : '',
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
  margin-top: 60px;
  @include mq(md) {
    margin-top: 70px;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-size: 24;
  @include mq(md) {
    font-size: 28px;
  }
  @include mq(xl) {
    font-size: 32px;
  }
}

h2 {
  font-size: 20px;
  @include mq(md) {
    font-size: 24px;
  }
  @include mq(xl) {
    font-size: 28px;
  }
}

.title {
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  @include mq(md) {
    font-size: 24px;
  }
  @include mq(lg) {
    font-size: 28px;
  }
}
</style>
