<template>
  <div
    class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gird-cols-6 gap-4"
  >
    <v-character-card
      v-for="i in 100"
      :key="i"
      :title="'test'"
      :url="'/hira_walk.gif'"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VCharacterCard from '~/components/cards/VCharacterCard.vue'

export default Vue.extend({
  components: {
    VCharacterCard,
  },
})
</script>
