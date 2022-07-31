<template>
  <section class="has-text-centered box">
    <h3>Login</h3>
    <b-button
      class="is-light"
      icon-left="google"
      rounded
      @click=""
    >
      Signup with Google
    </b-button>
  </section>
</template>

<script>
export default {
  methods: {
    loginWithGoogle() {
      this.$auth.loginWith('google')
    }
  }
}
</script>