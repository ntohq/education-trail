<template>
   <main>
      <ContentDoc>
      <template #not-found>
         <h2>News slug ({{ $route.params.id }}) not found</h2>
      </template>
      </ContentDoc>
   </main>
 </template>
 
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