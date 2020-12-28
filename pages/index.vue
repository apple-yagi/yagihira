<template>
  <div>
    <section class="main">
      <div class="main-wrapper">
        <span class="main-text">Welcome!!</span>
        <img
          v-if="!isDark"
          class="mx-auto main-visual"
          src="/hira_walk.gif"
          alt="hira walk"
        />
        <img
          v-else
          class="mx-auto main-visual"
          src="/hira_zonbi_walk.gif"
          alt="hira walk zonbi"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import VCharacterCard from '~/components/cards/VCharacterCard.vue'

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
}
.main-wrapper {
  position: relative;
}
.main-text {
  position: absolute;
  display: inline-block;
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
}
</style>
