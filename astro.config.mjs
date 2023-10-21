import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro'
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://328654e4.nolimit.pages.dev/',

  integrations: [robotsTxt(), AstroPWA()],
});