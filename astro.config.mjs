// @ts-check
import { defineConfig, envField } from 'astro/config';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      PUBLIC_GA_ID: envField.string({
        context: 'client',
        access: 'public',
        default: 'G-SD3E60BNQQ',
      }),
    },
  },
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
  ],
});
