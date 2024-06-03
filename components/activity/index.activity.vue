<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useDataStore } from '@/stores/data.store';

</script>

<template>
   <div
      class="pt-32 w-11/12 m-auto flex flex-col gap-8"
      v-if="useDataStore().portfolio"
   >
      <div class="lg:w-6/12 w-11/12">
         <HeadingsSectionHeading
            subtitle="NOTRE GALERIE PHOTOS"
            title="Découvrez notre organisation, photos marquantes"
         />
      </div>

      <CardsCardActivity  :end="16" />

      <NuxtLink to="/activity" class="flex justify-center">
         <Button :style="'background-color: ' +  useDataStore().users?.color_1"
            class=" px-4 py-4 flex items-center gap-2 text-base"
         >
            <span class="">Voir plus images</span>
            <i class="ri-arrow-right-line"></i>
         </Button>
      </NuxtLink>
   </div>
</template>
