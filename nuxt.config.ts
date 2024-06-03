// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'JCI',
       "meta": [
    {
      "name": "viewport",
      "content": "width=device-width, initial-scale=1"
    },
    {
      "charset": "utf-8"
    }
  ],

      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel:"icon", type:"image/png", href:"/logos/seguela_logo.png"},
        // { rel:"icon", type:"image/jpeg", href:"/logos/abidjan_lagune_logo.jpeg"},
        // { rel:"icon", type:"image/png", href:"/logos/u_cocody_logo.png"},
        // { rel:"icon", type:"image/png", href:"/logos/abidjan_premium_logo.png"},
        { rel: 'stylesheet', href: 'https://use.typekit.net/vjy4axf.css' }
      ],

    }},
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", '@pinia/nuxt', "@nuxt/image", 'nuxt-time', 'nuxt-swiper'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})