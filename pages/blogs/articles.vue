<script setup>
import { useDataStore } from '@/stores/data.store';
import { onMounted } from 'vue';
import { refService } from '@/services/app/index.services';
import { URI } from '@/services/uri/index.uri';

const route = useRoute();
const ShowArticle = computed(() => {
   return useDataStore().blogs.filter((el) => el.id == route.query?.id);
});

const GetBlogs = async () => {
   if (ShowArticle.value.length == 0) {
      const { findMany } = await refService(URI.BLOGS, 'blogs');
      const { data } = await findMany();

      if (data) {
         useDataStore().blogs = data.data.blogs;
      }
   }
};

onMounted(() => {
   GetBlogs();
});
</script>

<template>
   <HeadersIndexHeader />

   <div
      class="mt-44 mb-32 max-md:w-11/12 w-6/12 m-auto"
      v-if="ShowArticle.length != 0"
   >
      
   <div class="flex flex-col gap-4">
   
      <div class="flex flex-col gap-1 ">
         <NuxtImg :src="ShowArticle[0].original_url" class="max-h-[20rem] object-cover object-top rounded-md" />
         <span class="font-bold text-xl"> {{ ShowArticle[0].title }} </span>
         <NuxtTime class="text-sm" :datetime="ShowArticle[0].created_at" day="numeric" month="long"   year="numeric"  />
      </div>

      <article v-html="ShowArticle[0].content"></article>
   
   </div>

   </div>

   <div
      class="mt-44 mb-32 max-md:w-11/12 w-6/12 m-auto text-3xl text-center font-bold font-exo"
      v-else
   >

   Pas d'article disponible

   </div>

   <FootersIndexFooter />
</template>
