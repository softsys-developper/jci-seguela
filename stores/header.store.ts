import { defineStore } from 'pinia';
export const useHeaderStore = defineStore('headerStore', {
    state: () => ({
      name: '',
      description: '',
      data: null,
      website_info: null
    }),
    actions: {
      async fetch() {
        const infos:any = await $fetch('https://api.nuxt.com/modules/pinia')
  
        this.name = infos?.name
        this.description = infos?.description
      }
    }
  })
  