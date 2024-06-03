<script setup lang="ts">
import { useDataStore } from '@/stores/data.store';

</script>

<template>
   <div class="pb-24 w-11/12 m-auto flex flex-col gap-8" >
      <div class="lg:w-5/12 w-11/12" v-if="useDataStore().blogs.length != 0">
         <HeadingsSectionHeading
            subtitle="Articles de blog"
            title="Dernières nouvelles et articles du blog."
         />
      </div>

     <CardsCardBlog />
   </div>
</template>
