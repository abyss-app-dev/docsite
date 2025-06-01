import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.abyss.app', // Update this to your actual domain
  integrations: [
    // Enable Vue for Vue components
    vue(),
    tailwind(),
  ],
});
