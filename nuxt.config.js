import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Humans Devnet Faucet',
    title: 'Humans Devnet Faucet',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/axios'
    ],
    [
      '@nuxtjs/recaptcha', {
        //siteKey: '6Lfvc08dAAAAAFYxguVoURPuBLzt6wXccJLmltI8', humans key
        siteKey: '6LcmcfUhAAAAAPUFU01tZhfNmwOkQ7Q6ZW0Bp5_G', //vercel key
        version: 'v2'
      },
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#1534EF',
          accent: colors.grey.darken3,
          secondary: '#E5E6E6',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          dark: '#000000'
        }
      }
    },
    //treeShake: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Server Middleware config
  serverMiddleware: [
    { path: '/api/status', handler: '~/api/status/index.js' }
  ]
}
