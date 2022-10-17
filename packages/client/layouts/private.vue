<template>
  <div class="container-layout sidebar-page">
    <b-sidebar position="static" mobile="reduce" type="is-dark" open>
      <b-menu class="is-custom-mobile .menu-container">
        <div class="block has-background-primary p-3 mt-1">
          <img
            src="@/assets/education_trail_emblem.png"
            class="is-rounded"
            alt="Education Path Logo"
          />
        </div>
        <b-menu-list class="main-menu">
          <b-tooltip label="Home">
            <b-menu-item
              icon="school"
              size="is-medium"
              tag="router-link"
              to="/dashboard"
            ></b-menu-item>
          </b-tooltip>
          <b-menu-item
            icon="account-group"
            class="has-text-centered"
            size="is-medium"
            tag="router-link"
            to="/classes"
          >
          </b-menu-item>
          <b-menu-item
            icon="chart-line"
            class="has-text-centered"
            size="is-medium"
            tag="router-link"
            to="/grade-stats"
          ></b-menu-item>
          <b-menu-item
            icon="calculator"
            class="has-text-centered"
            size="is-medium"
            tag="router-link"
            to="/grade-calculator"
          ></b-menu-item>
        </b-menu-list>
        <b-menu-list>
          <b-menu-item
            icon="cog"
            class="has-text-centered"
            size="is-medium"
            tag="router-link"
            to="/settings"
          ></b-menu-item>
        </b-menu-list>
      </b-menu>
    </b-sidebar>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
}
</script>

<style lang="scss" scoped>
.container-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
}

.b-sidebar {
  height: 100vh;
  display: flex;
}

.sidebar-content {
  flex: 1;
}

.menu {
  display: flex;
  flex-direction: column;
  height: 100vh;
  ::v-deep ul:nth-child(2) {
    flex: 2;
    text-align: center;
  }
}

.main-menu {
  flex: 1;
}

.b-tooltip {
  display: flex;
}
</style>
