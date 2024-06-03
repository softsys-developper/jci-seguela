<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay';
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const plugin = Autoplay({
   delay: 2000,
   stopOnMouseEnter: true,
   stopOnInteraction: false,
});


import { useDataStore } from '@/stores/data.store';
import { onMounted, ref } from 'vue';
import { refService } from '@/services/app/index.services';
import { URI } from '@/services/uri/index.uri';


const GetPartners = async () => {
   const { findMany } = await refService(URI.PARTNERS, 'users');
   const { data } = await findMany();

   if (data) {
      useDataStore().partners = data.data.partners;
   }
};

onMounted(() => {
   if (useDataStore().partners.length == 0) {
      GetPartners();
   }
});


</script>

<template>

   <div class="w-11/12 m-auto mt-16" v-if="useDataStore().partners.length != 0">
      <div class="w-full flex justify-center">
         <span class="text-xl">Ils nous font confiance en tant que partenaires.</span>
      </div>
   </div>

   

   <Carousel
      class="relative w-11/12 m-auto  pt-4" v-if="useDataStore().partners.length != 0"
      :plugins="[plugin]"
      @mouseenter="plugin.stop"
      @mouseleave="[plugin.reset(), plugin.play(), console.log('Runing')]"
   >
      <CarouselContent class="flex w-full">
         <CarouselItem
            v-for="(_, index) in useDataStore().partners"
            class="pl-1 basis-1/2 lg:basis-1/4"
         >
            <div class="p-1 h-full flex items-center">
          
               <NuxtImg :src="_.original_url" class="size-24  object-contain" densities="x1 x2" :placeholder="[50, 25, 75, 5]" />
            </div>
         </CarouselItem>
      </CarouselContent>
   </Carousel>
</template>
