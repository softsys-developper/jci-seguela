<script setup lang="ts">
import { useDataStore } from '@/stores/data.store';
import { onMounted } from 'vue';

import { refService } from '@/services/app/index.services';
import { URI } from '@/services/uri/index.uri';
const GetTeams = async () => {
   const { findMany } = await refService(URI.TEAMS, 'teams');
   const { data } = await findMany();

   if (data) {
      useDataStore().teams = data.data.teams;
   }
};

onMounted(() => {
   if (useDataStore().teams?.length == 0) {
      GetTeams();
   }
});

</script>

<template>
   <HeadersIndexHeader />

   <BannersTamplateBanner  :title="`JCI ${useDataStore().users?.name}`" sub="Rencontrez notre Équipe, Le Comité Directeur Local" />
   

  <div class="mt-8 mb-32">
   

   <div class="grid grid-cols-4 max-lg:grid-cols-1 gap-4 w-11/12 m-auto " v-if="useDataStore().teams">
   

   <CardsCardTeams :Teams="useDataStore().teams" />

</div>
  
  </div>

   <FootersIndexFooter />
</template>
