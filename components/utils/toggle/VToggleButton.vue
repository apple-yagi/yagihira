<template>
  <div>
    <div class="toggle-switch">
      <input
        id="toggle"
        :value="value"
        @input="$emit('input', !value)"
        class="toggle-input"
        type="checkbox"
      />
      <label for="toggle" class="toggle-label" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

label {
  width: 36px;
  height: 24px;
  background: #ccc;
  position: relative;
  display: inline-block;
  border-radius: 46px;
  transition: 0.4s;
  box-sizing: border-box;
  &:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }
}

input:checked {
  + label {
    background-color: #010409;
    &:after {
      left: 14px;
    }
  }
}

.toggle-switch {
  position: relative;
  width: 36px;
  height: 24px;
  margin: auto;
}
</style>
