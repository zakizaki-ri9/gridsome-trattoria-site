# Astro + Cloudflare Pages SEO・環境変数ガイドライン

本ガイドラインは、AstroプロジェクトをCloudflare Pagesにデプロイする際の、動的なURL生成（SEO対策）のベストプラクティスを定めたものです。

## 1. サイト基本URLの動的設定

### 重要: `CF_PAGES_URL` は本番URLではない
Cloudflare Pages が自動注入する `CF_PAGES_URL` は、本番デプロイであっても `https://<commit-hash>.<project>.pages.dev` 形式のデプロイ固有URLが設定される。正規の本番URL（`https://<project>.pages.dev` や独自ドメイン）は**自動提供されない**。

### 推奨: リポジトリ定数 `SITE_URL` を使う
`src/consts.ts` に本番用の正規URLを定数として定義し、`astro.config.mjs` から import する。`CF_PAGES_BRANCH` により本番 / プレビューを判定する。

```typescript
// src/consts.ts
export const SITE_URL = 'https://trattoria-e-bar-porto-yamanashi.pages.dev';
```

```javascript
// astro.config.mjs
import { SITE_URL } from './src/consts';

// 本番ブランチでは定数の正規URLを使用し、プレビュー環境ではCF_PAGES_URLを使用する
const isProduction = !process.env.CF_PAGES_BRANCH || process.env.CF_PAGES_BRANCH === 'master';

export default defineConfig({
  // 本番ブランチではリポジトリ定数 SITE_URL、プレビューでは CF_PAGES_URL を使用
  site: isProduction ? SITE_URL : process.env.CF_PAGES_URL,
});
```

この構成により:
- **本番デプロイ**: `SITE_URL` 定数が使われ、正規URLでサイトマップ等が生成される
- **プレビュー環境**: `CF_PAGES_URL` が使われ、プレビュー固有のURLで確認できる
- **ローカル開発**: `CF_PAGES_BRANCH` が未設定のため本番扱いとなり、`SITE_URL` が使われる
- **プラットフォーム移行時**: `src/consts.ts` の定数を1箇所変更するだけで対応可能

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
