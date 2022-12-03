<template>
   <ContentDoc
     :path="$route.params.slug ? `/news/${$route.params.slug}` : '/news'"
   >
     <template #not-found>
       <h2>News slug ({{ $route.params.slug }}) not found</h2>
     </template>
   </ContentDoc>
 </template>
 
<script>
export default {
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