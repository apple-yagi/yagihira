<template>
  <section class="main container">
    <div class="main-wrapper">
      <client-only>
        <span class="main-text">Welcome!!</span>
      </client-only>
      <img
        v-if="!isDark"
        class="mx-auto main-visual"
        :src="$urls.hira_walk"
        alt="hira walk"
      />
      <img
        v-else
        class="mx-auto main-visual"
        :src="$urls.hira_zonbi_walk"
        alt="hira walk zonbi"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import VCharacterCard from '~/components/top/cards/VCharacterCard.vue'

export default Vue.extend({
  components: {
    VCharacterCard,
  },
  computed: {
    ...mapState(['isDark']),
  },
})
</script>

<style lang="scss" scoped>
.main-visual {
  border-radius: 20px;
  width: 800px;
}
.main-wrapper {
  position: relative;
}
.main-text {
  position: absolute;
  font-weight: bold;
  font-size: 24px;
  top: 20px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  @include mq(sm) {
    font-size: 32px;
    top: 25px;
  }
  @include mq(lg) {
    font-size: 36px;
    top: 30px;
  }
  opacity: 0;
  animation-name: zoomUp;
  animation-delay: 1.5s;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
</style>
