<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'


const acronymes = [
    { acronyme: 'AE', signification: 'Assistant Exécutif' },
    { acronyme: 'CAMO', signification: 'Conférence Afrique et Moyen Orient' },
    { acronyme: 'CEL', signification: 'Comité Exécutif Local' },
    { acronyme: 'CDL', signification: 'Comité Directeur Local' },
    { acronyme: 'CJ', signification: 'Conseiller Juridique' },
    { acronyme: 'CLPS', signification: 'Comité Local de Planification Stratégique' },
    { acronyme: 'CO', signification: 'Comité d’Organisation' },
    { acronyme: 'COPSEN', signification: 'Comité des Past-Presidents et Sénateur' },
    { acronyme: 'CYE', signification: 'Creative Young Entrepreneur (Jeune Entrepreneur Créatif)' },
    { acronyme: 'DC', signification: 'Directeur de Commission' },
    { acronyme: 'DP', signification: 'Directeur de Projet' },
    { acronyme: 'DR', signification: 'Directeur des Récompenses' },
    { acronyme: 'JCI', signification: 'Jeune Chambre Internationale' },
    { acronyme: 'JCI CI', signification: 'Jeune Chambre Internationale Côte d’Ivoire' },
    { acronyme: 'MP', signification: 'Membre Potentiel' },
    { acronyme: 'OLM', signification: 'Organisation Locale Membre' },
    { acronyme: 'OTS', signification: 'Officer’s Training School' },
    { acronyme: 'PEN', signification: 'Président Exécutif National' },
    { acronyme: 'PEL', signification: 'Président Exécutif Local' },
    { acronyme: 'PP', signification: 'Past-President' },
    { acronyme: 'PPN', signification: 'Past-Presidents Nationaux' },
    { acronyme: 'RISE', signification: 'Reconstruire, Investir, Soutenir, Evoluer' },
    { acronyme: 'RSL', signification: 'Rentrée Solennelle Locale' },
    { acronyme: 'RSN', signification: 'Rentrée Solennelle Nationale' },
    { acronyme: 'SG', signification: 'Secrétaire Général' },
    { acronyme: 'TG', signification: 'Trésorier Général' },
    { acronyme: 'VPE', signification: 'Vice-Président Exécutif' },
    { acronyme: 'VPEN', signification: 'Vice-Président Exécutif National' },
    { acronyme: 'VPN', signification: 'Vice-Président National' }
];



</script>

<template>
   <HeadersIndexHeader />
   <BannersTamplateBanner image="" title="Sigles" sub="Les acronymes & significations des organisations JCI" />

   <div class="mt-8 w-11/12 text-4xl mb-32 font-exo font-bold m-auto">

   <Table class="w-11/12 m-auto text-lg">
    <TableCaption>Les sigles du JCI.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]">
         Acronymes
        </TableHead>
        <TableHead class="text-right">
         Significations
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="JCI_SIg in acronymes">
        <TableCell class="font-medium">
          {{JCI_SIg.acronyme}}
        </TableCell>
       
        <TableCell class="text-right">
         {{JCI_SIg.signification}}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
  </div>
   <FootersIndexFooter />
</template>
