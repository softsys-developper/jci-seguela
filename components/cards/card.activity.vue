<template>
   <div class="">
      <div class="grid max-md:grid-cols-2 grid-cols-4 gap-1">
         <div v-for="IM in GALERIES">
            <a :href="IM?.original_url" target="_blank">
               <div class="w-full max-md:h-48 h-72 rounded-md">
                  <NuxtImg
                     sizes="100vw sm:50vw md:400px"
                     :placeholder="[30, 20]"
                     :src="IM?.original_url"
                     class="rounded-md w-full h-full object-cover"
                  />
               </div>
            </a>
         </div>
      </div>
   </div>
   {{ IsEnd }}
</template>
<script setup>
import { useDataStore } from '@/stores/data.store';
import { onMounted, ref, computed } from 'vue';

import { refService } from '@/services/app/index.services';
import { URI } from '@/services/uri/index.uri';
const GetActivity = async () => {
   const { findMany } = await refService(URI.ACTIVITES, 'portfolio');
   const { data } = await findMany();

   if (data) {
      useDataStore().portfolio = data.data.activites;
   }
};

const GALERIES = ref([]);
const GALERIE_CACHE = ref([]);
const props = defineProps(['start', 'end']);

const IsEnd = computed(() => {
   if (props.end) {
      GALERIES.value = GALERIE_CACHE.value.slice(0, props.end);
   }
});

const OnLoaded =  () => {
   useDataStore().portfolio.forEach((pf) => {
      pf?.medias.forEach((media) => {
         GALERIES.value.push(media);
         GALERIES.value = GALERIES.value?.reverse()
      });
   });

   GALERIE_CACHE.value = GALERIES.value?.reverse();
}

onMounted(() => {
   if (useDataStore().portfolio?.length == 0) {
      GetActivity().then(() => {
         OnLoaded()
      })
   }

   OnLoaded()
});
</script>
<style lang="scss" scoped></style>
