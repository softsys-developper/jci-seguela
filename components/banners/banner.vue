<script setup>
import { useBannerComposable } from '@/composables/banner.composable';
import { useDataStore } from '@/stores/data.store';
import { onMounted } from 'vue';

import { refService } from '@/services/app/index.services';
import { URI } from '@/services/uri/index.uri';
const GetBanners = async () => {
   const { findMany } = await refService(URI.BANNERS, 'banners');
   const { data } = await findMany();

   if (data) {
      useDataStore().banners = data.data.banner;
   }
};

onMounted(() => {
   if (useDataStore().banners?.length == 0) {
      GetBanners();
   }
});
</script>

<template>
   <div>
      <div class="h-full w-full mt-20 flex" >
         <BannersCarouselBanner :DataBanner="useDataStore().banners" />
      </div>
   </div>
</template>
