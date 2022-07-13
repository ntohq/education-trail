<template>
  <div class="container-layout sidebar-page">
    <b-sidebar
      position="static"
      mobile="reduce"
      :reduce="true"
      type="is-dark"
      open
    >
      <b-menu class="is-custom-mobile .menu-container">
        <div class="block has-background-primary p-3 mt-1">
          <img
            src="@/assets/buefy.png"
            class="is-rounded"
            alt="Education Path Logo"
          />
        </div>
        <b-menu-list class="main-menu">
          <b-menu-item
            icon="user-graduate"
            class="has-text-centered"
          ></b-menu-item>
          <b-menu-item
            icon="chart-line"
            class="has-text-centered"
          ></b-menu-item>
        </b-menu-list>
        <b-menu-list>
          <b-menu-item icon="cog" class="has-text-centered"></b-menu-item>
        </b-menu-list>
      </b-menu>
    </b-sidebar>
    <div>
      <nuxt />
    </div>
  </div>
</template>

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

.menu-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-menu {
  flex: 1;
}
</style>
