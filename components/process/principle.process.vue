<script setup lang="ts">
import { useDataStore } from '@/stores/data.store';
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion';

const defaultValue = 'item-1';

const accordionItems = [
   {
      value: 'item-1',
      title: 'Crédo',
      content: `
      « Nous croyons :
Que la foi en Dieu donne à la vie son véritable sens ;
Que la fraternité humaine transcende la souveraineté des nations ;
Que la liberté des individus et de l’entreprise assure mieux la justice économique ;
Que l’autorité doit s’appuyer sur la loi et non sur l’arbitraire ;
Que la personne humaine est la plus précieuse des richesses ;
Et que servir l’humanité constitue l’œuvre la plus noble d’une vie. »`,
   },
   {
      value: 'item-2',
      title: 'Mission ',
      content: `Offrir aux jeunes des opportunités de développement du leadership en leur donnant la capacité de créer des changements positifs.`,
   },
   {
      value: 'item-3',
      title: 'Vision',
      content: `Être le principal réseau mondial de jeunes leaders.`,
   },
   {
      value: 'item-4',
      title: 'Pensée du Père fondateur',
      content: `« Des profondeurs de l’âme de cette organisation sur laquelle les fondements de la Personnalité et du Civisme sont assises, j’ai confiance qu’un jour émergera un message qui permettra aux hommes de s’acheminer vers l’établissement d’une Paix durable dans le monde »`,
   },
];

const A = [
   {
      icon: '',
      name: 'Organisations',
      count: '25M',
   },
];
</script>

<template>
   <div class="bg-blue-500/20 relative">
      <!--  -->

      <div class="relative z-20 w-full ">
         <NuxtImg
            class=" w-full object-cover object-top absolute h-[60vh] "
            src="https://seguela.jci-ci.org/images/bg-jci.jpg"
         />
      </div>

      <div class="inline-flex bg-black/50 z-40 absolute h-full w-full"></div>

      <!--  -->
      <div class="pb-40 pt-24 w-11/12 m-auto relative z-40">
         <div class="lg:w-7/12 w-11/12">
            <span class="lg:text-6xl text-5xl font-black text-white">
               Déclaration des principes de la JCI</span
            >
         </div>
      </div>

      <div class=" w-full h-full z-40 relative " :style="'background-color: ' +  useDataStore().users?.color_1">
         <div class="grid lg:grid-cols-2 grid-cols-1 w-11/12 m-auto">
            <!-- Image -->
            <div class="bg-gray-700 relative lg:h-[350px] h-[250px] -top-20" v-if="useDataStore().users">
               <NuxtImg
                  :src="useDataStore().users?.about_image_2"
                  class="h-full object-cover w-full"
               />
            </div>

            <!--  -->
            <div class="relative -top-20">
               <div class="bg-white h-20 flex items-center px-8">
                  <span class="text-xl font-bold">Les principles</span>
               </div>

               <div class="px-8 py-8 text-white">
                  <Accordion
                     type="single"
                     class="w-full"
                     collapsible
                     :default-value="defaultValue"
                  >
                     <AccordionItem
                        v-for="item in accordionItems"
                        :key="item.value"
                        :value="item.value"
                     >
                        <AccordionTrigger class="lg:text-2xl text-xl">{{
                           item.title
                        }}</AccordionTrigger>
                        <AccordionContent class="text-base">
                           {{ item.content }}
                        </AccordionContent>
                     </AccordionItem>
                  </Accordion>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
