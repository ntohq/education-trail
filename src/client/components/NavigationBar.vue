<template>
    <nav :class="{ 'is-transformed': !showNavbar }" class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="@/assets/education_trail_emblem.png" width="112" height="100">
    </a>

    <a 
        role="button" 
        class="navbar-burger" 
        aria-label="menu" 
        aria-expanded="false" 
        data-target="navbarBasicExample"
        @click="isActive = !isActive"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
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

<style lang="scss">
.navbar {
  transition: transform 200ms ease-out;

  &.is-transformed {
    transform: translate3d(0, -100%, 0);
  }
}
</style>