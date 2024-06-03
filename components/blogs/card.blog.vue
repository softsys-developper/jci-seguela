<template>
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-8 bg-white">
         <div v-for="BG in Blogs" class="shadow-2xl flex flex-col gap-4">
            <div class="bg-white shadow-md relative">
               <div class="absolute w-20 bg-white top-6 left-6">
                  <div :style="'background-color: ' +  useDataStore().users?.color_1"
                     class=" py-4 flex justify-center items-center"
                  >
                     <span class="text-2xl font-black text-white">16</span>
                  </div>
                  <div class="flex justify-center items-center">
                     <span class="p-2 text-xs">JUN, 2023</span>
                  </div>
               </div>

               <div class="w-full h-[300px] rounded-none">
                  <NuxtImg
                     sizes="100vw sm:50vw md:400px"
                     :placeholder="[50, 25, 75, 5]"
                     :src="BG.imgs[0]"
                     class="rounded-none h-full w-full object-cover"
                  />
               </div>

               <div class="flex flex-col p-6 gap-2">
                  <div class="flex items-center gap-2 max-w-min">
                     <span class="text-base font-bold truncate w-24">Emmanuel Diomande</span>
                  
                     <div class="flex items-center gap-1 max-w-min">
                        <i class="ri-chat-3-fill  flex" :style="'color: ' +  useDataStore().users?.color_1"></i>
                        <span class="min-w-max text-sm">0 commentaire(s) </span>
                     </div>
                  </div>

                  <div class="flex flex-col">
                     <span class="text-lg font-semibold font-blog">{{ BG.name }}</span>
                  </div>

                  <NuxtLink to="/blogs/articles"
                     class="flex px-4 py-2 bg-gray-100 cursor-pointer mt-4 justify-between w-full"
                  >
                     <span class="text-sm font-semibold">Voir le post</span>
                     <i class="ri-arrow-right-line"></i>
                  </NuxtLink>
               </div>
            </div>
         </div>
      </div>
</template>
<script setup>
    defineProps(['Blogs'])
    import {useDataStore} from "@/stores/data.store"
</script>
<style lang="scss" scoped>
    
</style>