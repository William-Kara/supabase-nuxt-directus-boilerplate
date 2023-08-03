export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    '@nuxthq/ui',
    '@nuxtjs/color-mode'
  ],
  ui: {
    colors: {
      primary: 'blue'
    },
    icons: ['mdi', 'heroicons', 'heroicons-outline']
  }
})
