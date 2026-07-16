import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://missynancy.github.io',
  base: '/Luku',
  integrations: [preact()]
});