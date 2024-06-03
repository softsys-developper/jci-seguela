import { URI } from '@/services/uri/index.uri';
import { TOKEN, ID } from './../../public/api/token';
import axios from 'axios';

export const refService = async (URL: any, KEY: any) => {
   // *Get
   const findMany = async () => {
      const { data, error, pending, status, refresh } = await useAsyncData(
         KEY,
         () =>
            axios.post(`${URL}`, {id: ID})
      );

      return {
         data: data.value ? data.value : null,
         error: error.value ? error.value : null,
         pending,
         status,
         refresh,
      };
   };

   return {
      findMany,
   };
};
