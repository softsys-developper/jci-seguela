<script setup lang="ts">
import { useDataStore } from '@/stores/data.store';
import { Button } from '@/components/ui/button';
import { onMounted, ref } from 'vue';

const more = ref(16);
</script>

<template>
   <HeadersIndexHeader />
   <BannersTamplateBanner
      image=""
      title="Les images de nos activités."
      :sub="`JCI ${
         useDataStore().users?.name
      }, Revivez nos activités en images...`"
   />
   <div class="flex flex-col gap-8 w-11/12 m-auto mb-32">
      <div class="text-4xl font-exo font-bold"></div>

      <CardsCardActivity :end="more" />

      <div class="flex justify-center">
         <Button
         @click="more = more + 8"
         :style="'background-color: ' + useDataStore().users?.color_1"
         class="px-4 py-4 flex items-center gap-2 text-base"
      >
         <span class="">Voir plus </span>
         <i class="ri-arrow-right-line"></i>
      </Button>
      </div>
   </div>
   <FootersIndexFooter />
</template>
