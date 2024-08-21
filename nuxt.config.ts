// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  alias: {
    css: "/<rootDir>/assets/css"
  },

  // app: {
  //   baseURL: process.env.BASE_URL || "http://localhost:3000"
  // },
  css: ["@/assets/css/main.css"],

  components: [{ path: "~/shared/icons", prefix: 'Icon' }, "~/components"],
  modules: ["@pinia/nuxt", '@pinia-plugin-persistedstate/nuxt', [
    '@nuxtjs/i18n',
    {
      vueI18n: './i18n'
    }
  ], "@nuxt/ui", "nuxt-security"],
  pinia: {
    storesDirs: ["./stores/**"]
  },
  security: {
    headers: {
      xFrameOptions: false
    },
  }
})