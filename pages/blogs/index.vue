<script setup ></script>

<template>
   <HeadersIndexHeader />

   <BannersTamplateBanner
      :title="`Nos articles de blog`"
      :sub="`Dernières nouvelles de la JCI ${useDataStore().users?.name}`"
   />

   <div class="w-11/12 m-auto mt-24">
   
      <CardsCardBlog />
   
   </div>

   <FootersIndexFooter />
</template>
