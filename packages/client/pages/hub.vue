<template>
  <section>
    <div class="has-text-centered section">
      <h2 class="title is-2">Your Classes</h2>
    </div>
    <div>
      <b-table></b-table>
    </div>
  </section>
</template>

<script>
export default {
  layout: "private",
  head: {
    title: "Welcome - Education Path",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
</style>