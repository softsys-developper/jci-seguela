import { computed } from 'vue';
import { HeaderServices } from '~/services/app/header.services';
import { useHeaderStore } from './../stores/header.store';
import { refService } from '~/services/app/index.services';
import { useBannerStore } from './../stores/banner.store';

export const useBannerComposable = () => {

   const StateBanners = computed(() => {
    return useBannerStore()
   })

   const GetListbanner = async () => {
    const { findMany } = await refService('BANNER', 'banners');
    const { data: DataBanners } = await findMany(null);

      if(DataBanners){
        useBannerStore().data = DataBanners?.banners
      }
   };




   return {
    GetListbanner,
    StateBanners
   }
};
