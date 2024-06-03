<script setup>
import { useDataStore } from '@/stores/data.store';
import { onMounted } from 'vue';

import { refService } from '@/services/app/index.services';
import { URI } from '@/services/uri/index.uri';
const GetActivity = async () => {
   const { findMany } = await refService(URI.PPS, 'past_presidents');
   const { data } = await findMany();

   if (data) {
      console.log(data)
      useDataStore().past_presidents = data.data.pasts_president;
   }
};

onMounted(() => {
   if (useDataStore().past_presidents?.length == 0) {
      GetActivity();
   }
});

</script>

<template>
   <HeadersIndexHeader />
   <BannersTamplateBanner image="" :title="`JCI ${useDataStore().users?.name}, Past Presidents`" sub="Ils ont dirigé avec passion, caractère et intégrité notre organisation." />
 <div class="flex flex-col gap-8 mt-8 mb-16">



   <div class="grid grid-cols-4 max-md:grid-cols-1 gap-4 w-11/12 m-auto" v-if="useDataStore().past_presidents">
   

      <CardsCardTeams :Teams="useDataStore()?.past_presidents" />
   
   </div>
 </div>

   <FootersIndexFooter />
</template>
