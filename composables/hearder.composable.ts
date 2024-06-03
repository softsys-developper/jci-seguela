import { computed } from 'vue';
import { HeaderServices } from '~/services/app/header.services';
import { useHeaderStore } from './../stores/header.store';

export const useHeaderComposable = () => {
   const { listing } = new HeaderServices();

   const StateHeader = computed(() => {
    return useHeaderStore()
   })

   const GetListHeader = async () => {
      const { DataHeaders } = await listing();
      if(DataHeaders){
        useHeaderStore().data = DataHeaders?.headers
      }
   };


   const GetWebSiteInfo = async () => {
      const { DataHeaders } = await listing();
      if(DataHeaders){
        useHeaderStore().website_info = DataHeaders?.website_info
      }
   };


   return {
    GetListHeader,
    GetWebSiteInfo,
    StateHeader
   }
};
