<script setup>
import { ref, computed } from "vue"
import { useDataStore } from "@/stores/data.store"

const contacts = ref([
    {
      "name": "jciseguelagmail.com",
      "icon": "ri-mail-line"
    },
    {
      "name": "Séguéla, Côte d'ivoire",
      "icon": "ri-map-pin-2-line"
    },
    {
      "name": "+2250707310757",
      "icon": "ri-customer-service-2-line"
    }
  ]) 

  const DATA_CONTACTS = computed(() => {

   contacts.value[0].name = useDataStore().users?.contact_mail
   contacts.value[1].name = useDataStore().users?.zone
   contacts.value[2].name = useDataStore().users?.contact_phone
   return contacts.value
  })
</script>

<template>
   <HeadersIndexHeader />

   <BannersTamplateBanner
      image=""
      title="Contactez-nous"
      sub="Besoins de plus informations sur la JCI ?"
   />

   <div class="z-50" v-if="DATA_CONTACTS">
      <div class="container px-6 pb-24 mx-auto">
         <div
            class="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3 sm:grid-cols-2"
         >
            <div class="p-4 rounded-lg bg-blue-50 md:p-6 " >
               <span :style="'color: ' +  useDataStore().users?.color_1"
                  
                  class="inline-block p-3  rounded-lg bg-blue-100/80 dark:bg-gray-700"
               >
                  <i
                     class="text-lg text-bg-500"
                     :class="DATA_CONTACTS[0].icon"
                  ></i>
               </span>

               <h2
                  class="mt-4 text-lg md:text-xl font-bold text-gray-800 dark:text-white"
               >
                  Discutez avec nos experts
               </h2>
               <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Une équipe à l'écoute de vos besoins.
               </p>
               <div class="text-base">
                  <a :style="'color: ' +  useDataStore().users?.color_1"
                     :href="'mailto:' + DATA_CONTACTS[0].name"
                     class="mt-2"
                  >
                     {{ DATA_CONTACTS[0].name }}
                  </a>
               </div>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
               <span :style="'color: ' +  useDataStore().users?.color_1"
                  class="inline-block p-3  rounded-lg bg-blue-100/80 dark:bg-gray-700"
               >
                  <i
                     class="text-lg text-bg-500" 
                     :class="DATA_CONTACTS[1].icon"
                  ></i>
               </span>

               <h2
                  class="mt-4 text-lg md:text-xl font-bold text-gray-800 dark:text-white"
               >
                  Rendez nous visite
               </h2>
               <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Visitez notre siège social.
               </p>
               <p class="mt-2 text-base " :style="'color: ' +  useDataStore().users?.color_1">
                  {{ DATA_CONTACTS[1].name }}
               </p>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
               <span :style="'color: ' +  useDataStore().users?.color_1"
                  class="inline-block p-3  rounded-lg bg-blue-100/80 dark:bg-gray-700"
               >
                  <i
                     class="text-lg text-bg-500"
                     :class="DATA_CONTACTS[2].icon"
                  ></i>
               </span>

               <h2
                  class="mt-4 text-lg md:text-xl font-bold text-gray-800 dark:text-white"
               >
                  Appelez-nous
               </h2>
               <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                  Du lundi au vendredi de 8h à 17h.
               </p>
               <p class="mt-2 text-base" :style="'color: ' +  useDataStore().users?.color_1">
                  <a
                     :href="'tel:' + DATA_CONTACTS[2].name"
                     class=""
                  >
                     {{ DATA_CONTACTS[2].name }}
                  </a>
               </p>
            </div>
         </div>
      </div>
   </div>

   <FootersIndexFooter />
</template>
