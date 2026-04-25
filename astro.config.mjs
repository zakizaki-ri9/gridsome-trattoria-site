// @ts-check
import { defineConfig, envField } from 'astro/config';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/consts';

// 本番ブランチでは定数の正規URLを使用し、プレビュー環境ではCF_PAGES_URLを使用する
const isProduction = !process.env.CF_PAGES_BRANCH || process.env.CF_PAGES_BRANCH === 'master';

// https://astro.build/config
export default defineConfig({
  site: isProduction ? SITE_URL : process.env.CF_PAGES_URL,
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
