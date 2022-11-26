<script setup>
const newsPosts = await queryContent('/news').sort({ date: -1 }).find()
console.warn(newsPosts)
</script>
<template>
<section class="section has-text-centered">
      <div class="level">
         <div class="level-item has-text-centered">
            <h2 class="title is-2 blog-title" icon="newspaper">My Blog</h2>
         </div>
      </div>
      <div class="card-content">
         <div v-for="(listItems, index) in newsPosts" :key="index" class="content">
            <div class="type-content">
               <img class="image" :src="listItems.img" ratio="2by1">
               <h6 class="title is-6">{{ listItems.category }}</h6>
            </div>
            <div class="text-content">
               <div>
                  <h3 class="title is-3 mb-0">
                     {{ listItems.title || 'failed to load' }}
                  </h3>
                  <i>{{ new Date(listItems.postedAt).toDateString() }}</i>
                  <h6 class="title is-6 mt-0" style="font-weight: normal">
                     {{ listItems.clentcher || 'failed to load' }}
                  </h6>
               </div>
               <div>
                  <o-button
                     tag="router-link"
                     :to="listItems._path"
                     type="is-link"
                     class="button"
                  >
                     Read More
                  </o-button>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>