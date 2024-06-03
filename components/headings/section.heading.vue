<script setup lang="ts">
defineProps(['subtitle', 'title']);
import {useDataStore} from "@/stores/data.store"
</script>

<template>
   <div class="flex flex-col gap-3" >
      <span :style="'background-color: ' +  useDataStore().users?.color_1" class="inline-flex h-[3px] w-16 "></span>
      <span :style="'color: ' +  useDataStore().users?.color_1"  class="text-lg  font-bold"> {{ subtitle }} </span>
      <span   class="text-4xl font-bold"> {{ title }} </span>
   </div>
</template>
