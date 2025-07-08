// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-svgo', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://ekklesiainternational.org',
    name: 'EKKLESIA WORSHIP CENTER'
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  ui: {
    colorMode: false
  }
})