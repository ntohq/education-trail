<script setup>
const { data: posts } = await useAsyncData('navigation', () => queryContent('').only(['_path', 'title', 'clentcher', 'img', 'category', 'postedAt']).find())
</script>

<template>
    <section class="section has-text-centered">
       <div class="level">
          <div class="level-item has-text-centered news-title">
             <h2 class="title is-2 blog-title" icon="newspaper">Extra, extra! Read all about it!</h2>
             <p>the latest about the trail!</p>
          </div>
       </div>
       <div class="card-content">
          <div v-for="(listItems, index) in posts" :key="index" class="content">
             <div class="type-content">
                <img :src="listItems.img" ratio="2by1"/>
                <h6 class="title is-6">{{ listItems.category }}</h6>
             </div>
             <div class="text-content">
                <div>
                   <h3 class="title is-3 mo-0">
                      {{ listItems.title || 'failed to load' }}
                   </h3>
                   <i>{{ new Date(listItems.postedAt).toDateString() }}</i>
                   <h6 class="title is-6 mt-0" style="font-weight: normal">
                      {{ listItems.clentcher || 'failed to load' }}
                   </h6>
                </div>
                <div>
                   <NuxtLink
                      tag="router-link"
                      :to="listItems._path"
                      type="is-link"
                      class="button"
                   >
                      Read More
                   </NuxtLink>
                </div>
             </div>
          </div>
       </div>
    </section>
 </template>

<style lang="scss">
.news-title {
   display: block;
}

div.content:nth-of-type(even) {
   display: flex;
   flex-direction: row important;
}

div.content:nth-of-type(odd) {
   display: flex;
   flex-direction: row-reverse important;
}

div.content {
   margin: 20px;
}

div.content div {
   flex: 1;
}

.type-content {
   margin: auto 0 auto 0;
}

.text-content {
   margin: auto 0 auto 0;
}

@media screen and (max-width: 768px) {
   div.content {
      flex-direction: column !important;
   }
   .type-content {
      margin: auto 0 auto 0;
   }
   .text-content {
      margin: auto 0 auto 0;
   }
}

@media screen and (max-width: 500px) {
   .type-content {
      margin: auto 0 auto 0;
   }
   .text-content {
      margin: auto 0 auto 0;
   }
}
</style>