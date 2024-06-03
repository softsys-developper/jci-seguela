<script setup >
import { useDataStore } from '@/stores/data.store';
</script>

<template>
  
   <NuxtLink to="/" v-if="useDataStore().users" >
      <NuxtImg :src="useDataStore().users?.logo" class=" object-contain h-12 lg:h-24 w-auto"  :placeholder="[50, 25, 75, 5]" />
   </NuxtLink>

</template>
