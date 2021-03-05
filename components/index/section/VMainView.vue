<template>
  <main class="main container">
    <img
      v-if="!isDark"
      class="mx-auto main-visual"
      :src="$urls.logo"
      alt="hira walk"
    />
    <img
      v-else
      class="mx-auto main-visual"
      :src="$urls.darklogo"
      alt="hira walk zonbi"
    />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState(['isDark']),
  },
})
</script>

<style lang="scss" scoped>
.main {
  height: 400px;
}
.main-visual {
  border-radius: 20px;
  width: 800px;
}
</style>
