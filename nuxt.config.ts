// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content", "nuxt-icon", "@nuxt/image-edge"],
    colorMode: { classSuffix: "" },
    css: ["@fontsource/inter/variable-full.css"],
    content: {
        markdown: {
            mdc: true,
        },
        highlight: {
            theme: {
                // Default theme (same as single string)
                default: "github-light",
                // Theme used if `html.dark`
                dark: "github-dark",
                // Theme used if `html.sepia`
                sepia: "monokai",
            },
        },
    },
});
