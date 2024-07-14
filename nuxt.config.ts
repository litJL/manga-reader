// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    modules: ["@nuxt/ui", "nuxt-lodash", "@vueuse/nuxt", "@nuxtjs/i18n"],
    css: ["~/assets/css/main.css"],
    i18n: {
        langDir: "./locales",
        locales: [
            {
                code: "en",
                file: "en.json",
                name: "English",
            }
        ]
    }
});