<template>
  <div class="not-found">
    <h1 class="not-found_title">Not Found!</h1>
    <img class="mx-auto" src="/hira_zonbi_walk.gif" alt="zonbi" />
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
  &_title {
    font-size: 26px;
  }
}
</style>
