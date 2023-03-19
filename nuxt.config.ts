// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content", "nuxt-icon"],
    colorMode: { classSuffix: "" },
    css: ["@fontsource/inter/variable-full.css"],
});
