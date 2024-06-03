import { defineStore } from 'pinia';
export const useDataStore = defineStore('dataStore', {
   state: () => ({
      data: null,
      users: null,
      banners: [],
      past_presidents: [],
      teams: [],
      portfolio: [],
      partners: [],
      blogs: []
   }),
   actions: {},
});
