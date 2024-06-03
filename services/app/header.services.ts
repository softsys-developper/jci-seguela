import { refService } from './index.services';

export class HeaderServices {
   constructor() {}

   /**
    * 
    * @returns 
    */
   public async listing() {
      const { findMany } = await refService('HEADER', 'headers');
      const { data: DataHeaders } = await findMany(null);

      return { DataHeaders: DataHeaders };
   }
}
