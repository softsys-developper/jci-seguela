<script setup lang="ts">
import {useDataStore} from "@/stores/data.store"
    const Process = [

    {
        icon: 'ri-quill-pen-fill',
        title: 'Foi',
        description: "Que la foi en Dieu donne à la vie son véritable sens."
    },
    {
        icon: 'ri-shake-hands-fill',
        title: 'Fraternité ',
        description: "Que la fraternité humaine transcende la souveraineté des nations."
    },
    {
        icon: 'ri-scales-fill',
        title: 'liberté & Justice',
        description: "Que la liberté des individus et de l’entreprise assure mieux la justice économique."
    },
    {
        icon: 'ri-pulse-fill',
        title: 'Richesses Humaine',
        description: "Que l’autorité doit s’appuyer sur la loi et non sur l’arbitraire."
    },
    {
        icon: 'ri-star-smile-fill',
        title: 'Engagements',
        description: "Que la personne humaine est la plus précieuse des richesses. "
    },

    ]

</script>

<template>
   <div class="bg-gray-700 h-[25vh] mb-32">
   
   <div class="text-white w-full flex justify-center relative top-8">   
    <span class="text- text-lg">Note Crédo, Ce en quoi nous croyons.</span>
   </div>


   <div class="grid lg:grid-cols-5 grid-cols-1 lg:gap-8 gap-4 w-11/12 m-auto relative top-16">
   
    <div v-for="(PS, index) in Process">   
 
    <div class="bg-white px-4 py-8 lg:h-[250px] h-auto shadow-2xl gap-4 flex flex-col">
        
        <div class="flex justify-between">
        
            <PicturesIconPicture :style="'color: ' +  useDataStore().users?.color_1" :iconName="PS.icon" class="text-4xl " />
            <div class="bg-gray-100 w-8 h-8 justify-center items-center flex rounded-md font-bold opacity-50">
                {{ index+1 }}
            </div>
        </div>


        <div class="flex flex-col gap-2">
            <span class="lg:text-lg text-xl font-bold opacity-90 " :style="'color: ' +  useDataStore().users?.color_1"> {{ PS.title }} </span>
            <span class="text-sm font-medium opacity-90 text-gray-500"> {{ PS.description }} </span>
        </div>

    </div>
    </div>
   
   </div>
    
   </div>
</template>
