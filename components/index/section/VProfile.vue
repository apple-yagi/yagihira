<template>
  <section class="container section text-center">
    <h2>Which one to look at</h2>
    <div class="profile" v-if="!isDark">
      <div class="profile-card">
        <img
          class="profile-card__text"
          :src="$urls.profile_y"
          alt="dokata_profile"
        />
        <img class="profile-card__image" :src="$urls.icon_y" alt="dokata" />
      </div>
      <div class="profile-card" style="float: right">
        <img
          class="profile-card__text--right"
          :src="$urls.profile_h"
          alt="dokata_profile"
        />
        <img
          class="profile-card__image--right"
          :src="$urls.icon_h"
          alt="dokata"
        />
      </div>
    </div>
    <div class="profile" v-else>
      <div class="profile-card">
        <img
          class="profile-card__text"
          :src="$urls.darkprofile_y"
          alt="dokata_profile"
        />
        <img class="profile-card__image" :src="$urls.darkicon_y" alt="dokata" />
      </div>
      <div class="profile-card" style="float: right">
        <img
          class="profile-card__text--right"
          :src="$urls.darkprofile_h"
          alt="dokata_profile"
        />
        <img
          class="profile-card__image--right"
          :src="$urls.darkicon_h"
          alt="dokata"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState(['isDark']),
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 80vw;
  @include mq(sm) {
    height: 70vw;
  }
  @include mq(md) {
    height: 60vw;
  }
  @include mq(lg) {
    height: 50vw;
  }
  @include mq(xl) {
    height: 40vw;
  }
}

.profile {
  width: 100%;

  &-card {
    width: 450px;
    height: 450px;
    position: relative;
    display: block;

    %__text {
      position: absolute;
      top: 0;
    }

    &__text {
      @extend %__text;
      right: 0;

      &--right {
        @extend %__text;
        left: 0;
      }
    }

    %__image {
      position: absolute;
      bottom: 0;
    }
    &__image {
      @extend %__image;
      left: 0;

      &--right {
        @extend %__image;
        right: 0;
      }
    }
  }
}
</style>
