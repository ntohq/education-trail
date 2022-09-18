import { defineNuxtPlugin } from '#app';
import Oruga from '@oruga-ui/oruga-next';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Oruga)
})