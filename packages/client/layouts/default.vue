<script>
import click from '../components/click'
import foot from '../components/foot'

export default {
  components: {
    click,
    foot
  }
}

</script>

<template>
  <section class="section">
    <top-nav />
    <side-nav />
    <nuxt />
    <foot />
  </section>
</template>

<script>
export default {
  auth: false,
}
</script>
