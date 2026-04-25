# Astro + Cloudflare Pages SEO・環境変数ガイドライン

本ガイドラインは、AstroプロジェクトをCloudflare Pagesにデプロイする際の、動的なURL生成（SEO対策）のベストプラクティスを定めたものです。

## 1. サイト基本URLの動的設定
Cloudflare Pagesは、本番環境とプレビュー環境（ブランチデプロイ）で異なるURLを自動生成します。OGP画像やサイトマップのURLを各環境に自動適応させるため、`astro.config.mjs` の `site` 設定は静的な文字列ではなく、環境変数を参照します。

```javascript
// astro.config.mjs
export default defineConfig({
  // 独自ドメインがある場合は CUSTOM_DOMAIN を優先し、なければ CF_PAGES_URL を使用
  site: process.env.CUSTOM_DOMAIN || process.env.CF_PAGES_URL || 'http://localhost:4321',
});
```

*※ `CF_PAGES_URL` はCloudflareビルド時に自動付与されます。独自ドメインを導入した場合は、Pagesのダッシュボードから `CUSTOM_DOMAIN` 環境変数を手動で設定してください。*

## 2. robots.txt の動的生成
`public/robots.txt` は静的アセットのため環境変数をパースできません。Astroのエンドポイント機能を利用し、ビルド時にその時の `site`（つまり環境に応じたURL）を活用して出力するようにします。

```typescript
// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const robotsTxt = `
User-agent: *
Allow: /
Sitemap: ${new URL('sitemap-index.xml', site).href}
`.trim();

  return new Response(robotsTxt, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
```

## 3. SEOコンポーネント（JSON-LD等）での活用
`Astro.site` グローバル変数は `astro.config.mjs` で定義された `site` を引き継ぎます。
メタタグ構築やJSON-LDなどに絶対URLが必要な場合は、これを利用して生成します。

```astro
// Layout.astro 等
const siteURL = Astro.site;
const ogImageURL = new URL('/ogpimg.jpg', siteURL);

// JSON-LD内で活用
"image": ogImageURL.toString(),
"url": siteURL.toString(),
```

このアプローチにより、「プレビュー環境ではプレビュー用の絶対URL」「本番環境では本番用の絶対URL」が正しく生成され、検証の容易さとSEOの正確性の両立が担保されます。
