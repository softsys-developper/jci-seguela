<script setup lang="ts">
import { ref } from 'vue';
import { watchOnce } from '@vueuse/core';
import {
   Carousel,
   type CarouselApi,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

defineProps(['DataBanner']);

const emblaMainApi = ref<CarouselApi>();
const emblaThumbnailApi = ref<CarouselApi>();
const selectedIndex = ref(0);

function onSelect() {
   if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
   selectedIndex.value = emblaMainApi.value.selectedScrollSnap();
   emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap());
}

function onThumbClick(index: number) {
   if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
   emblaMainApi.value.scrollTo(index);
}

watchOnce(emblaMainApi, (emblaMainApi) => {
   if (!emblaMainApi) return;

   onSelect();
   emblaMainApi.on('select', onSelect);
   emblaMainApi.on('reInit', onSelect);
});
</script>

<template>
   <div class="w-full ">
      <Carousel
         class="relative w-full h-full"
         @init-api="(val) => (emblaMainApi = val)"
      >
         <CarouselContent>
            <CarouselItem
               v-for="(_, index) in DataBanner"
               :key="index"
               class="h-[70vh] flex items-center w-full "
            >
               <NuxtImg
                
                  :placeholder="[50, 25, 75, 5]"
                  :src="_.original_url"
                  alt=""
                  class="-z-50 w-full h-full object-cover object-top"
               />
               <div class="absolute -z-50 w-full h-full bg-black/70">
                  <div
                     class="flex flex-col w-11/12 m-auto justify-center h-full"
                  >
                     <div
                        class="lg:text-7xl text-5xl line-clamp-3 uppercase lg:w-8/12 w-full font-exo z-50 font-black text-white/90"
                     >
                        {{ _.title  }}
                     </div>

                     <div class="lg:w-4/12 w-full line-clamp-3 text-white/90">
                        {{ _.content }}
                     </div>
                  </div>
               </div>
            </CarouselItem>
         </CarouselContent>

         <!-- Direction -->
         <div class="flex flex-col justify-end h-[70vh] absolute top-0">
            <div
               class="absolute lg:left-[95vw] lg:bottom-32 left-[22vw] bottom-[15vw]"
            >
               <CarouselPrevious class="w-14 h-14" />
            </div>
            <div
               class="absolute lg:left-[92vw] lg:bottom-16 left-[28vw] bottom-[15vw]"
            >
               <CarouselNext class="w-14 h-14" />
            </div>
         </div>
      </Carousel>
   </div>
</template>
