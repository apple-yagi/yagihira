<template>
  <div class="container mx-auto">
    <v-header :isDark="isDark" @set="(e) => $emit('set', e)" />
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
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
  },
})
</script>
