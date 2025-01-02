// https://nuxt.com/docs/api/configuration/nuxt-config
/*export default defineNuxtConfig({
  head: {
    htmlAttrs: {
      lang: 'es',  // Aquí defines el idioma para la página
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'title', name: 'title', content: 'Conkal' },
      { hid: 'ogTitle', property: 'og:title', content: 'Conkal' },
      // Otros metadatos...
    ],
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
 
})*/



export default defineNuxtConfig({
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'detail', // Nombre de la ruta
        path: '/detail/:id', // Ruta dinámica con parámetro
        component: resolve(__dirname, 'pages/detail.vue'), // Componente que manejará la ruta
      });
    }
  },
  modules: [
    'nuxt-keen-slider'
  ],
  app: {
 head: {
      htmlAttrs: {
        lang: 'es',  // Establecer el idioma de la página
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'title', name: 'title', content: 'Conkal' },
        { hid: 'ogTitle', property: 'og:title', content: 'Conkal' },
        // Otros metadatos que desees incluir...
      ],
     
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false
})