// @ts-check
import { defineConfig, envField } from 'astro/config';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.CF_PAGES_URL || 'https://trattoria-e-bar-porto-yamanashi.pages.dev',
  env: {
    schema: {
      PUBLIC_GA_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    sitemap(),
  ],
});
