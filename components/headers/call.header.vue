<script setup>
import { useDataStore } from '@/stores/data.store';
import { ref } from 'vue'
defineProps(['dataHeader']);

const CONTACTS = ref([
    {
      "name": "",
      "icon": "ri-mail-line",
      "redirect": "",
    },
    {
      "name": "",
      "icon": "ri-map-pin-2-line",
      "redirect": "",
    },
    {
      "name": "",
      "icon": "ri-customer-service-2-line",
      "redirect": "",
    }
  ])

  const SOCIAUX = ref([
   {
      "icon": "ri-facebook-circle-fill",
      "name": "Facebook",
      "redirect": "",
      "actived": true
    },
    {
      "icon": "ri-twitter-x-fill",
      "name": "Twitter",
      "redirect": "",
      "actived": true
    },
    {
      "icon": "ri-instagram-fill",
      "name": "Instagram",
      "redirect": "",
      "actived": true
    }
  ])

import {computed} from "vue"
const DATA_CONTACTS = computed(() => {
   CONTACTS.value[0].name = useDataStore().users?.contact_mail
   CONTACTS.value[1].name = useDataStore().users?.zone
   CONTACTS.value[2].name = useDataStore().users?.contact_phone
   const CT = CONTACTS.value.filter((el) => el.name != null )
   return CT
})

const DATA_SOCIAUX  = computed(() => {
   SOCIAUX.value[0].redirect = useDataStore().users?.contact_facebook
   SOCIAUX.value[1].redirect = useDataStore().users?.contact_x
   SOCIAUX.value[2].redirect = useDataStore().users?.contact_intagram
   const CT = SOCIAUX.value.filter((el) => el.redirect !=  null )
   return CT
})
</script>

<template>
   <div :style="'background-color: ' +  useDataStore().users?.color_1" class=" text-white h-14 flex justify-between px-4 lg:gap-0 gap-8"  v-if="useDataStore().users" >
      
      <div class=" flex items-center  gap-4 min-w-max ">
      <div v-for="IO in DATA_CONTACTS">
         <a  class="flex gap-2 items-center">
            <PicturesIconPicture :iconName="IO.icon" class="relative top-[-2px]" />
            <span class="text-sm"> {{ IO.name }} </span>
         </a>
      </div>
     
   </div>


   <div class="flex items-center gap-4 min-w-max ">

      <NuxtLink to="/sigles">
         <span class="text-sm hover:underline">Les sigles du Jci / </span>
      </NuxtLink>

      <div v-for="MS in DATA_SOCIAUX">
    
         <a :href="MS.redirect" class="flex gap-2 items-center">
            <PicturesIconPicture :iconName="MS.icon" class="text-lg" />
         </a>
      </div>
   </div>
   
   </div>
</template>
