<template>
  <div>
    <h1 class="text-center title">Welcome to page!</h1>
    <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <v-character-card
        v-for="i in 100"
        :key="i"
        :title="'test'"
        :url="'/hira_walk.gif'"
      />
    </div>
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
