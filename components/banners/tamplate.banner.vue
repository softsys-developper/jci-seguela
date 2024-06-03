<template>

<div
    class="h-64 lg:h-72 relative font-mains mt-28"
  >
     <!-- <div class="bg-gray-700 opacity-70 absolute top-0 w-full h-full"></div> -->
      <NuxtImg
         placeholder
         class="object-cover w-full h-full opacity-10"
         :src="'https://img.freepik.com/vecteurs-libre/arriere-plan-conception-motif-organique-abstrait_1048-19286.jpg?t=st=1714987209~exp=1714990809~hmac=372328396ab5c0e4968af17e69de0a36a76996eb542efcb815e4ea8fb4bf50bb&w=740'"
         alt=""
      />

      <div class="absolute inset-0 flex flex-col justify-center text-center lg:w-11/12 w-11/12 m-auto">
         <p
            class="font-black text-3xl md:text-4xl lg:text-7xl text-gray-800 dark:text-blue-400"
         >
            {{title}}
         </p>

         <h1 :style="'color: ' +  useDataStore().users?.color_1"
            class="mt-2 text-xl font-bold  lg:text-2xl dark:text-white"
         >
            {{sub}}
         </h1>
      </div>
   </div>
</template>
<script lang="ts" setup>
    defineProps(['image', 'title', 'sub'])
    import {useDataStore} from "@/stores/data.store"

</script>
<style lang="scss" scoped>
    
</style>