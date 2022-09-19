<template>
  <section class="has-text-centered box login-form-cotainer">
    <div class="name-brand-image">
      <img src="@/assets/education_trail_emblem.png" />
    </div>
    <b-tabs v-model="activeTab" position="is-centered" type="is-boxed">
      <b-tab-item value="login" label="Login" icon="login">
        <div class="button-container">
          <b-button
            class="is-light"
            icon-left="google"
            rounded
            @click="loginWithGoogle()"
          >
            Google
          </b-button>
          <b-button class="is-light" icon-left="facebook" rounded>
            Facebook
          </b-button>
        </div>
      </b-tab-item>
      <b-tab-item value="signup" label="Signup" icon="form-select">
        <div class="button-container">
          <b-button class="is-light" icon-left="google" rounded>
            Google
          </b-button>
          <b-button class="is-light" icon-left="facebook" rounded>
            Facebook
          </b-button>
        </div>
      </b-tab-item>
    </b-tabs>
    <div class="info-links">
      <NuxtLink to="/TOS.pdf">TOS</NuxtLink>
      <NuxtLink to="/signup">Signup</NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: undefined,
    }
  },

  mounted() {
    this.setLoginTab()
  },

  methods: {
    loginWithGoogle() {
      this.$auth.loginWith('google')
    },

    setLoginTab() {
      this.activeTab =
        this.$route.query.show_signup === 'true' ? 'signup' : 'login'
    },
  },
}
</script>

<style lang="scss" scoped>
.login-form-cotainer {
  width: 50%;
  margin: auto;
}

.name-brand-image {
  width: 40%;
  margin: 20px auto;
}

.button-container {
  display: flex;
  flex-direction: column;
  margin: 10px;

  ::v-deep button {
    margin: 10px auto;
    width: 40%;

    @media (max-width: 769px) {
      width: 50%;
    }

    ::v-deep span {
      position: relative;
    }
  }
}

.info-links {
  margin: 20px;
}
</style>
