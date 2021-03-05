<template>
  <div class="card">
    <div class="card-title">{{ title }}</div>
    <div>
      <img :src="url" alt="img" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    url: {
      type: String as PropType<string>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.card {
  &-title {
    font-size: 16px;
  }
}
</style>
