<script setup>
import { onMounted } from 'vue';
import { useDataStore } from '@/stores/data.store';

const AboutInfos = [
   {
      icon: 'ri-presentation-line',
      name: 'Formations',
      count: '+25',
   },
   {
      icon: 'ri-briefcase-fill',
      name: 'Conventions',
      count: '12',
   },
   {
      icon: 'ri-ping-pong-fill',
      name: 'Activités',
      count: '+30',
   },
   {
      icon: 'ri-team-line',
      name: 'Membres',
      count: '+1000',
   },
];

const DATA_STATS = computed(() => {
   if(useDataStore().users){
      AboutInfos[0].count = useDataStore().users?.stats_1
   AboutInfos[1].count = useDataStore().users?.stats_2
   AboutInfos[2].count = useDataStore().users?.stats_3
   AboutInfos[3].count = useDataStore().users?.stats_4

   return AboutInfos
   }
   
  
})

const Axes = [
   'Notoriété et visibilité de la marque',
   'Développement du leadership',
   'Structure ouverte, efficace et durable',
   'Innovation axée sur les données',
];
</script>

<template>
   <!-- About Details -->
   <div
      class="lg:pt-48 pt-[60rem] mb-32 "
   >
     <ProcessCardAbout />
   </div>

   <!-- Abouts Infos -->
   <div class="pt-16" v-if="DATA_STATS" >
      <div 
         class="grid lg:grid-cols-4 grid-cols-1 gap-16 lg:gap-0 w-11/12 m-auto bg-white shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)]"
      >
         <div v-for="AI in DATA_STATS">
            <div
               class="flex flex-col bg-white justify-center items-center relative"
            >
               <div
                  class="w-24 h-24 border-2 absolute -top-16 flex justify-center items-center bg-white"
               >
                  <PicturesIconPicture
                     :iconName="AI.icon" :style="'color: ' +  useDataStore().users?.color_2"
                     class="text-6xl  font-light"
                  />
               </div>

               <div class="flex flex-col justify-center text-center pb-8 pt-12">
                  <span class="text-5xl font-bold"> {{ AI.count }} </span>
                  <span class="font-semibold text-base"> {{ AI.name }} </span>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
