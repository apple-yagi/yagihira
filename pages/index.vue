<template>
  <div>
    <v-main-visual />
    <v-second-visual />
    <v-yanagi-profile />
    <v-hiraoka-profile />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VMainVisual from '~/components/top/sections/VMainVisual.vue'
import VYanagiProfile from '~/components/top/sections/VYanagiProfile.vue'
import VSecondVisual from '~/components/top/sections/VSecondVisual.vue'
import VHiraokaProfile from '~/components/top/sections/VHiraokaProfile.vue'

export default Vue.extend({
  components: {
    VMainVisual,
    VYanagiProfile,
    VSecondVisual,
    VHiraokaProfile,
  },
})
</script>
