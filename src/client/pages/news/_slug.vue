<template>
   <article class="section has-text-centered">
      <ContentDoc :path="$route.params.slug ? `/news/${$route.params.slug[0]}` : '/news'">
         <template #not-found>
            <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
         </template>
      </ContentDoc>
   </article>
</template>
 
<script>
export default {
   // async asyncData({ $content, params }) {
   //    const posts = await $content('posts', params.slug).fetch()
   //    /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
   //    return { posts }
   // },
   head: {
      title: 'News',
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         {
            hid: 'description',
            name: 'description',
            content: 'my website description',
         },
      ],
   },
}
</script>
 
<style lang="scss">
.nuxt-content {
   h1 {
      font-weight: 900;
   }

   h2 {
      font-style: italic;
      font-weight: 300;
   }
}
</style>