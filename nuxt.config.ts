export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts', 
    '@nuxt/image',
    '@nuxtjs/color-mode'
  ],
  googleFonts: {
    families: {
      'DM Sans': true
    }
  },
  image: {
    format: ['webp']
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        { src: 'https://kit.fontawesome.com/f6333c832d.js', defer: true, crossorigin:'anonymous' },
      ],
      htmlAttrs: {
        lang: 'en-US'
      }
    }
  }
})
