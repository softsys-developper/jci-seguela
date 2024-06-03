<script setup lang="ts">
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useDataStore } from '@/stores/data.store';

const dataHeader = [
   {
      name: 'Accueil',
      route: '/',
      more: false,
      more_data: [],
   },
   {
      name: 'Galeries',
      route: '/activity',
      more: false,
      more_data: [],
   },
   {
      name: 'Past Presidents',
      route: '/pasts_presidents',
      more: false,
      more_data: [],
   },
   {
      name: 'A Propos',
      route: '/a_propos',
      more: false,
      more_data: [],
   },
   {
      name: 'Notre équipe',
      route: '/teams',
      more: false,
      more_data: [],
   },
   {
      name: 'blogs',
      route: '/blogs',
      more: false,
      more_data: [],
   },
];
</script>

<template>
   <div class="flex w-full lg:items-center" v-if="dataHeader">
      <div
         class="flex px-4 w-full flex-col lg:flex-row lg:gap-0 gap-8 lg:justify-between"
      >
         <NavigationMenu class="w-full lg:w-full">
            <NavigationMenuList
               class="lg:flex-row flex-col gap-3 text-center justify-center w-full"
            >
               <!-- Only -->
               <NavigationMenuItem
                  v-for="menu in dataHeader"
                  class="flex items-center w-full lg:w-full"
               >
                  <NuxtLink :to="menu.route" class="flex justify-start">
                     <NavigationMenuLink :style="$route.path == menu.route
                              ? 'background-color: ' +  useDataStore().users?.color_1
                              : ''"
                        :class="[
                           navigationMenuTriggerStyle(),
                           $route.path == menu.route
                              ? 'rounded-md   text-white'
                              : '',
                        ]"
                        class="border-[0px] w-full"
                     >
                        <span class="text-xl lg:text-base">{{
                           menu?.name
                        }}</span>
                     </NavigationMenuLink>
                  </NuxtLink>
               </NavigationMenuItem>
            </NavigationMenuList>
         </NavigationMenu>

         <!-- Call Central -->
         <div class="flex gap-2 items-center cursor-pointer min-w-max">
            <PicturesIconPicture
               iconName="ri-customer-service-2-line text-4xl"
            />
            <div class="flex flex-col">
               <span class="text-xs">Applez-nous</span>
               <a :href="'tel:'+useDataStore()?.users?.contact_phone" class="text-sm font-semibold hover:underline">
             
                  {{ useDataStore()?.users?.contact_phone }}
               </a>
            </div>
         </div>
      </div>

      <NuxtLink
         to="/contact" :style="'background-color: ' +  useDataStore().users?.color_1"
         class=" px-8 min-w-max py-5 lg:w-auto w-full text-center lg:mt-0 mt-8"
      >
         <span class="text-base font-semibold text-white">Contactez-nous</span>
      </NuxtLink>
   </div>
</template>
