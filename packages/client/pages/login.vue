<template>
  <div class="section">
    <login-form></login-form>
  </div>
</template>

<script>
import loginForm from '@/components/loginForm.vue'

export default {
  components: {
    loginForm,
  },
  layout: 'authenticationLayout',
  auth: false,
}
</script>
