import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        // SCSS file in the project
        '@oruga-ui/oruga-next/src/scss/oruga-full-vars.scss',
    ],

    plugins: ['@/plugins/oruga.js']
})
