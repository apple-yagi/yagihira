<template>
  <div class="not-found">
    <div class="not-found_frame">
      <h1 class="not-found_title title">Not Found!</h1>
      <img class="not-found_icon" src="/hira_zonbi_walk.gif" alt="zonbi" />
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
})
</script>

<style lang="scss" scoped>
.not-found {
  text-align: center;
  align-items: center;
  margin: 100px auto 0;
  @include mq(md) {
    margin: 120px auto 0;
  }
  &_frame {
    padding: 20px;
    background-color: #364549;
  }
  &_title {
    color: whitesmoke;
  }
  &_icon {
    margin: auto;
  }
}
</style>
