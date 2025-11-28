// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/color-mode'],

  css: ['~/assets/css/tailwind.css'],

  // Configuración del módulo color-mode
  colorMode: {
    preference: 'light', // 'light' | 'dark' | 'system'
    fallback: 'light',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
    storage: 'cookie'
  },
  nitro: {
    preset: 'netlify',
  },
})