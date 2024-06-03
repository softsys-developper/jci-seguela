<template>
   <div class="">
      <div class="grid grid-cols-4 max-md:grid-cols-1 gap-8 bg-white">
         <div v-for="BG in BLOGS" class="flex flex-col gap-4">
            <div class="bg-white shadow-md relative">
               <div class="absolute w-20 bg-white top-6 left-6">
                  <div
                     :style="
                        'background-color: ' + useDataStore().users?.color_1
                     "
                     class="py-4 flex justify-center items-center"
                  >
                     <span class="text-2xl font-black text-white"><NuxtTime :datetime="BG.created_at"   day="numeric"   /></span>
                  </div>
                  <div class="flex justify-center items-center">
                     <span class="p-2 text-xs first-letter:uppercase">
                        <NuxtTime :datetime="BG.created_at"  month="long"   />,
                        <NuxtTime :datetime="BG.created_at"  year="numeric"  />
                     </span>
                  </div>
               </div>

               <div class="w-full h-[200px] rounded-none">
                  <NuxtImg
                     sizes="100vw sm:50vw md:400px"
                     :placeholder="[50, 25, 75, 5]"
                     :src="BG.original_url"
                     class="rounded-none h-full w-full object-cover"
                  />
               </div>

               <div class="flex flex-col p-4 gap-2">
                  

                  <div class="flex flex-col">
                     <article v-html="BG.title" class="text-lg font-semibold font-blog  line-clamp-2">
                     </article>
                     <article v-html="BG.content" class="text-sm  font-blog  line-clamp-2">
                     </article>
                  </div>

                  <NuxtLink
                     :to="'/blogs/articles?id='+BG?.id"
                     class="flex px-4 py-2 bg-gray-100 cursor-pointer mt-4 justify-between w-full"
                  >
                     <span class="text-sm font-semibold">Voir l'article</span>
                     <i class="ri-arrow-right-line"></i>
                  </NuxtLink>
               </div>
            </div>
         </div>
      </div>
   </div>
   {{ __BLOGS }}
</template>
<script setup>
import { useDataStore } from '@/stores/data.store';
import { onMounted, ref, computed } from 'vue';

import { refService } from '@/services/app/index.services';
import { URI } from '@/services/uri/index.uri';
const GetBlogs = async () => {
   const { findMany } = await refService(URI.BLOGS, 'blogs');
   const { data } = await findMany();

   if (data) {
      useDataStore().blogs = data.data.blogs;
   }
};

const BLOGS = ref([])
const BLOG_CACHE = ref([]);
const props = defineProps(['start', 'end']);

const __BLOGS = computed(() => {
   BLOGS.value = useDataStore().blogs?.reverse()
});

const OnLoaded =  () => {
 

   // GALERIE_CACHE.value = GALERIES.value;
}

onMounted(() => {
   if (useDataStore().blogs?.length == 0) {
      GetBlogs().then(() => {
         OnLoaded()
      })
   }

   OnLoaded()
});
</script>
<style lang="scss" scoped></style>
