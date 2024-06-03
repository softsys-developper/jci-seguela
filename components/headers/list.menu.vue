<script setup lang="ts">

defineProps(['title', 'description'])

</script>

<template>
   <div class="  flex flex-col">
      <span class="text-sm font-bold"> {{title}} </span>
      <span class=" text-sm font-semibold opacity-70">{{description}}</span>
   </div>
</template>
