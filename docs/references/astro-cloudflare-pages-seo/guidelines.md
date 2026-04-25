# Astro + Cloudflare Pages SEO・環境変数ガイドライン

本ガイドラインは、AstroプロジェクトをCloudflare Pagesにデプロイする際の、動的なURL生成（SEO対策）のベストプラクティスを定めたものです。

## 1. サイト基本URLの動的設定

### 重要: `CF_PAGES_URL` は本番URLではない
Cloudflare Pages が自動注入する `CF_PAGES_URL` は、本番デプロイであっても `https://<commit-hash>.<project>.pages.dev` 形式のデプロイ固有URLが設定される。正規の本番URL（`https://<project>.pages.dev` や独自ドメイン）は**自動提供されない**。

### 推奨: カスタム環境変数 `SITE_URL` を使う
Cloudflare Pages のダッシュボード（Settings > Environment variables）で、**Productionにのみ** `SITE_URL` 環境変数を設定する。

```
SITE_URL = https://trattoria-e-bar-porto-yamanashi.pages.dev
```

`astro.config.mjs` では以下のように優先度を設定する:

```javascript
// astro.config.mjs
export default defineConfig({
  // 1. SITE_URL（ダッシュボードで設定、本番用）を最優先
  // 2. CF_PAGES_URL（プレビュー環境用）にフォールバック
  // 3. ローカル開発用のデフォルト
  site: process.env.SITE_URL || process.env.CF_PAGES_URL || 'http://localhost:4321',
});
```

この構成により:
- **本番デプロイ**: `SITE_URL` が使われ、正規URLでサイトマップ等が生成される
- **プレビュー環境**: `CF_PAGES_URL` が使われ、プレビュー固有のURLで確認できる
- **ローカル開発**: `http://localhost:4321` が使われる

## 2. robots.txt の動的生成
`public/robots.txt` は静的アセットのため環境変数をパースできない。Astroのエンドポイント機能を利用し、ビルド時にその時の `site`（つまり環境に応じたURL）を活用して出力する。

```typescript
// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response('Sitemap site URL is not configured', { status: 500 });
  }

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
`Astro.site` グローバル変数は `astro.config.mjs` で定義された `site` を引き継ぐ。
メタタグ構築やJSON-LDなどに絶対URLが必要な場合は、これを利用して生成する。

```astro
// Layout.astro 等
const siteURL = Astro.site!;
const ogImageURL = new URL('/ogpimg.jpg', siteURL);

// JSON-LD内で活用
"image": ogImageURL.toString(),
"url": siteURL.toString(),
```
