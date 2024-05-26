// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "@nuxt/eslint",
  ],
  eslint: {
    config: {
      stylistic: {
        semi: false,
        quotes: "double",
      },
    },
  },
})
