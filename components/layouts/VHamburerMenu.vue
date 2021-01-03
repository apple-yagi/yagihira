<template>
  <div>
    <button class="sidebar-open" @click="isOpen = true">
      <img
        v-if="isDark"
        src="/icons/menu-white.svg"
        alt="menu"
        width="28"
        height="28"
      />
      <img
        v-else
        src="/icons/menu-black.svg"
        alt="menu-black"
        width="28"
        height="28"
      />
    </button>
    <transition name="slide">
      <div v-if="isOpen" class="sidebar">
        <button class="sidebar-close" @click="isOpen = false">
          <img
            v-if="isDark"
            src="/icons/close-white.svg"
            alt="close-white"
            width="28"
            height="28"
          />
          <img
            v-else
            src="/icons/close-black.svg"
            alt="close-black"
            width="28"
            height="28"
          />
        </button>
        <div class="sidebar-wrapper">
          <span class="title" @click="isOpen = false">
            <nuxt-link to="/"> Home </nuxt-link></span
          >
          <hr />
          <ul class="sidebar-menu">
            <li @click="isOpen = false">Illustrator</li>
            <li @click="isOpen = false">Web Engineer</li>
            <li @click="isOpen = false">
              <nuxt-link to="/404">error</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="sidebar-icon">
          <img v-if="!isDark" :src="$urls.hira_walk" alt="walk" />
          <img v-else :src="$urls.hira_zonbi_walk" alt="zonbi walk" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  data: () => ({
    isOpen: false,
  }),
  computed: {
    ...mapState(['isDark']),
  },
})
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  display: table;
  z-index: 999;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: orange;
  &-wrapper {
    padding-bottom: 100px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  &-menu {
    margin-top: 20px;
    li {
      font-size: 24px;
    }
  }
  &-open {
    text-decoration: none;
    border-radius: 50%;
    color: red;
  }
  &-close {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  &-icon {
    position: absolute;
    bottom: 25vh;
    left: 0;
    right: 0;
    margin: auto;
    width: 200px;
    @include mq(sm) {
      width: 300px;
      bottom: 20vh;
    }
    @include mq(lg) {
      width: 350px;
      bottom: 15vh;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transform: translate(0px, 0px);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100vw) translateX(0px);
}
</style>
