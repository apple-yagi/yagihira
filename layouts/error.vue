<template>
  <div class="not-found">
    <div class="not-found_body">
      <h1 class="not-found_text title">Not Found!</h1>
      <img
        v-for="i in 100"
        :key="i"
        :id="`zonbi${i}`"
        class="not-found_icon"
        src="/character/gif/hira_zonbi_walk.gif"
        alt="zonbi"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head() {
    return {
      htmlAttrs: {
        lang: 'ja',
      },
      title: 'Page not found',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },
  mounted() {
    for (let i = 1; i < 100; i++) {
      const zonbi = document.getElementById(`zonbi${i}`)
      if (zonbi) zonbi.style.left = `${this.getRandomInt()}px`
    }
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * Math.floor(window.innerWidth))
    },
  },
})
</script>

<style lang="scss" scoped>
.not-found {
  text-align: center;
  align-items: center;
  margin: 70px auto 0;
  @include mq(md) {
    margin: 80px auto 0;
  }
  &_body {
    padding: 20px;
    position: relative;
  }
  &_text {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
  }
  &_icon {
    position: absolute;
    top: 0;
  }
}
</style>
