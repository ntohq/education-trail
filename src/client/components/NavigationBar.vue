<template>
  <nav :class="{ 'is-transformed': !showNavbar }" class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="@/assets/education_trail_emblem.png" width="112" height="100">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-content"
        @click="isActive = !isActive">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar-content" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <NuxtLink class="navbar-item" v-for="navRoutes in navigationRoutes" :to="navRoutes.link">
          {{ navRoutes.name }}
        </NuxtLink>
      </div>

      <div class="navbar-end">
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    navigationRoutes: Array,
  },
  data() {
    return {
      isActive: false,
      showNavbar: true
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  transition: transform 200ms ease-out;
  -webkit-box-shadow: 7px 4px 38px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 7px 4px 38px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 7px 4px 38px 0px rgba(0, 0, 0, 0.5);

  &.is-transformed {
    transform: translate3d(0, -100%, 0);
  }

}

p {
  color: red;
}

.navbar-item img {
  max-height: 64px;
}

.navbar-burger {
  height: auto;
}
</style>