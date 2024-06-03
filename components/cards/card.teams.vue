<template>
   <div v-for="Pasts in Teams">
      <div class="relative w-full flex flex-col">
         <div class="bg-gray-400 h-[400px]">
            <NuxtImg
               densities="x1 x2"
               :placeholder="[50, 25, 75, 5]"
               :src="
                  Pasts
                     ? Pasts.original_url
                     : 'https://img.freepik.com/photos-gratuite/souriante-jeune-belle-fille-regardant-droit-devant-portant-t-shirt-blanc-isole-rose_141793-86537.jpg?t=st=1714990016~exp=1714993616~hmac=0f513a5eb6c81abc1b04b67662f660ffba84da960c868f55c48c21498dcf7d64&w=740'
               "
               class="rounded-md w-full h-full object-cover object-top"
            />
         </div>

         <div class="w-full m-auto">
            <div
               class="p-2 flex flex-col absolute bottom-2 rounded-md left-0 right-0 bg-gray-50/90 w-11/12 m-auto"
            >
               <span class="text-base font-black"> {{ Pasts.name }} </span>
               <span class="text-sm whitespace-pre-line ">{{ Pasts.date }}</span>
            </div>
         </div>
      </div>
   </div>
</template>
<script lang="ts" setup>
defineProps(['Teams']);
</script>
<style lang="scss" scoped></style>
