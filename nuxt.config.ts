export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-pack/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-pack/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-pack/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon-pack/site.webmanifest' },
        { rel: 'mask-icon', href: '/favicon-pack/safari-pinned-tab.svg', color: '#c7a142' },
      ],
    },
  },

  modules: [
    '@unocss/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    'nuxt-og-image',
  ],

  site: {
    url: 'https://numon.vercel.app',
  },

  colorMode: {
    classSuffix: '',
  },

  devtools: {
    enabled: false,
  },

  sitemap: {
    xsl: false,
  },

  compatibilityDate: '2024-07-07',
});
