// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  alias: {
    css: "/<rootDir>/assets/css"
  },
  css: ["@/assets/css/main.css"],

  app: {
    // baseURL: process.env.BASE_URL || "http://localhost:3000"
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  components: [{ path: "~/shared/icons", prefix: 'Icon' }, "~/components"],
  modules:
    ["@pinia/nuxt", '@pinia-plugin-persistedstate/nuxt', [
      '@nuxtjs/i18n',
      {
        vueI18n: './i18n'
      }
    ], "@nuxt/ui", "nuxt-auth-utils", "nuxt-security"],
  pinia: {
    storesDirs: ["./stores/**"]
  },
  security: {
    headers: {
      // xFrameOptions: false,
      // crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',

      //Para poder acessar o login do google e oauth0
      // crossOriginEmbedderPolicy: 'require-corp',
      contentSecurityPolicy: {
        'img-src': ["'self'", "data:", 'https://reqres.in/img/faces/', "https://lh3.googleusercontent.com/", 'https://gc.kis.v2.scr.kaspersky-labs.com/'],
      },
    },
  },
  runtimeConfig: {
    session: {
      cookie: {
        sameSite: 'lax'
      }
    },
    oauth: {
      Google: {
        clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
      },
      OAUTH: {
        clientId: process.env.NUXT_OAUTH_AUTH0_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_AUTH0_CLIENT_SECRET,
        domain: process.env.NUXT_OAUTH_AUTH0_DOMAIN,
      },
    },
  },
})