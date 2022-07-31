<template>
  <section class="section">
    <topNav/>
    <nuxt />
  </section>
</template>

<script>
import topNav from '@/components/top-nav.vue'

export default {
  components: {
    topNav,
},
  auth: false,
}
</script>
