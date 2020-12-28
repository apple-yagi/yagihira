<template>
  <div>
    <v-header />
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VHeader from '~/components/layouts/VHeader.vue'
export default Vue.extend({
  components: {
    VHeader,
  },
})
</script>
