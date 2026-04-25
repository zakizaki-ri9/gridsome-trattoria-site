---
title: Astro + Cloudflare Pagesでの動的SEO設定のベストプラクティス調査
date: 2026-04-19
reliability: High (Official Astro & Cloudflare Docs, Community Best Practices)
depth: Broad & Shallow (General Best Practices for Astro on CF Pages)
---

## 調査課題
Astroを利用してCloudflare Pagesにデプロイする際、`CF_PAGES_URL`（環境変数）を利用して `astro.config.mjs` の `site` 設定や `robots.txt`、`JSON-LD` などのURLを動的に生成するアプローチが、ベストプラクティスとして公式に推奨されているか、他に考慮すべき点はないかを調査する。

## 概要
調査の結果、今回実装したアプローチ（`process.env.CF_PAGES_URL` を利用して `site` を動的化し、`robots.txt` をエンドポイントで自動生成する手法）は、**Astro + Cloudflare Pages における王道の手法（ベストプラクティス）**であることが確認できました。特に、プレビュー環境（PRごとのデプロイ等）と本番環境で正しい絶対URLを生成したい場合に非常に有効です。

## 調査結果

### 1. `process.env.CF_PAGES_URL` の活用について（ベストプラクティスと合致）
Cloudflare Pagesはビルド時に `CF_PAGES_URL` という環境変数を注入します。これには、そのビルドでの一意のデプロイURL（プレビュー環境なら `https://<hash>.<project>.pages.dev`、本番なら `https://<project>.pages.dev`）が含まれます。
Astroの `astro.config.mjs` で `site: process.env.CF_PAGES_URL` とする設定は、多くのコミュニティ記事や解説で「プレビュー環境のSitemapやOGP画像を壊さないための標準的な対応」として紹介されています。

### 2. `robots.txt` のエンドポイント化（ベストプラクティスと合致）
静的ファイル（`public/robots.txt`）はビルド時の環境変数を解釈できません。代わりに Astroのエンドポイント機能 (`src/pages/robots.txt.ts`) を使用して動的に生成する手法は、Astroの公式ドキュメントや有識者のブログでも「環境ごとにSitemapのURLを出し分けるための最適な方法」として推奨されています。

### 3. 注意点・考慮すべきエッジケース
- **独自ドメイン適用時の制約**:
  将来的に `trattoria-e-bar-porto-yamanashi.pages.dev` ではなく、全く別の独自なドメイン（例：`trattoriaporto.com`）をCloudflare側で設定した場合、`CF_PAGES_URL` は依然として `*.pages.dev` のURLを返します。
  そのため、将来独自ドメインを割り当てる場合は、Cloudflare Pagesのダッシュボードで手動の環境変数（例：`CUSTOM_DOMAIN`）を設定し、コードを `site: process.env.CUSTOM_DOMAIN || process.env.CF_PAGES_URL` のようにフォールバックさせる対応が必要になります。

## 実践的な知見
- **SSG時の挙動**: 本プロジェクトはSSGモード（静的サイト生成）であるため、`robots.txt.ts` はアクセスされるたびに実行されるわけではなく、**ビルド時にのみ実行され静的な robots.txt として出力**されます。このためパフォーマンス上のオーバーヘッドは一切生じません。
- **SEO効果**: プレビュー環境ごとに正しいメタデータが出力されるため、ローカルやプレビューでの動作確認（OGPチェッカー等）が非常に安全かつ確実に行えます。

## 情報源リスト
- [Cloudflare Pages Environment Variables Documentation]
- [Astro Dynamic Endpoints (Official Docs)]
- コミュニティ記事 (Zenn, Dev.to等でのAstro+Cloudflare連携事例)

## 推奨事項
現在実装しているコードはそのままで、スケーラビリティやSEO対策として最適に動作します。将来的にPages提供ドメイン（.pages.dev）以外の「完全な独自ドメイン」を導入するタイミングでのみ、参照する環境変数の追加対応をご検討ください。
