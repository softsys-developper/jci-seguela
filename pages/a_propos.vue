<script setup lang="ts">
import { useDataStore } from '@/stores/data.store';
</script>

<template>
   <HeadersIndexHeader />

   <BannersTamplateBanner image="" :title="`A propos de la JCI ${useDataStore().users?.name}`" sub="Tout savoir sur notre organisation..." />
   
     <div class="mt-8 mb-32">
      <ProcessCardAbout/>
     </div>
 

   <FootersIndexFooter />
</template>
