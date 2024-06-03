<script setup lang="ts">
import { useHeaderComposable } from '@/composables/hearder.composable';
import { useDataStore } from '@/stores/data.store';
import { onMounted } from 'vue';

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


</script>

<template>
   <div
      class="hidden w-full items-center shadow-md fixed top-0 z-50 bg-white lg:flex"
   >
      <HeadersLogoHeader  />

      <div class="flex flex-col w-full">
         <HeadersCallHeader  />
         <HeadersMenuHeader  />
      </div>
   </div>

   <div
      class="flex flex-col w-full items-center shadow-md fixed top-0 z-50 bg-white lg:hidden"
   >
      <HeadersCallHeader
        
         class="flex w-[100vw] overflow-x-scroll"
      />

      <div class="flex justify-between items-center w-11/12 m-auto o">
         <HeadersLogoHeader
            :dataHeader="useDataStore().data?.logo"
            class="h-[50px] w-auto"
         />

         <DropdownMenu class="w-[500px]">
            <DropdownMenuTrigger
               ><i class="ri-menu-4-line fex text-2xl"></i
            ></DropdownMenuTrigger>
            <DropdownMenuContent class="w-[100vw] border-[0px]">
               <DropdownMenuSeparator />
               <DropdownMenuItem>
                  <HeadersMenuHeader
                     class="flex flex-col items-center justify-center"
                     :dataHeader="useDataStore().data?.headers"
               /></DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   </div>
</template>
