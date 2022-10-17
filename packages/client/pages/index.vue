<template>
  <section>
    <p>help</p>
  </section>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  auth: false,
}
</script>
