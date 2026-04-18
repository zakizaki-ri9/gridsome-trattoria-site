# Web調査レポート: Cloudflare Pages のビルドコマンド管理方法

## 調査メタデータ
- **調査日**: 2026-04-05
- **トピック**: Cloudflare Pages のビルドコマンド（build command）を WebUI ではなく yml/toml 等の設定ファイルで管理できるか
- **調査深度**: 深く狭く（公式ドキュメント中心）
- **情報源の信頼性**: Cloudflare 公式ドキュメント

## 調査課題
Cloudflare Pages（Git統合連携）において、Netlify の `netlify.toml` のようにビルドコマンドをソースコード上のファイルで管理・設定する方法が存在するかを明らかにする。

## 概要と結論

**結論として、標準の Git 統合を利用している場合、Cloudflare Pages のビルドコマンドをリポジトリ内の設定ファイル（yml や toml）で直接指定・管理する方法は提供されていません。**

ビルドコマンドは**一貫して Cloudflare ダッシュボードの Web UI（Settings > Builds & deployments）から設定する必要があります**。

### `wrangler.toml` の役割と限界

Cloudflare には `wrangler.toml`（現在は `wrangler.json` 等もサポート）という構成ファイルがありますが、これは主に以下の用途に限定されます。

- Cloudflare Workers または Pages Functions の設定（KV, D1, などのバインディング設定）
- ローカル開発時（`wrangler pages dev`）の設定や、CLI経由での直接アップロード時の設定
- HTTP ヘッダーやリダイレクトのルールは `_headers` および `_redirects` という別ファイルで管理される

公式ドキュメントおよびコミュニティの知見において、標準の Git デプロイフローにおける `build_command` や `build_output_dir` を `wrangler.toml` でオーバーライドする機能は2026年現在も提供されていません。

### 代替案（設定ファイルで管理したい場合）

どうしても YML ファイル等のコード（Infrastructure as Code）でビルドコマンドを管理したい場合の唯一の手段は、**「Cloudflare Pages 側の自動ビルド機能（Git連携）をオフにし、GitHub Actions などの CI/CD ツールを使用する」** ことです。

1. GitHub Actions の `.github/workflows/deploy.yml` 内で `pnpm run build` を実行する
2. 出来上がったビルド成果物（`dist` 等）を `npx wrangler pages deploy` コマンドで Cloudflare に直接アップロードする

## 推奨事項

本プロジェクトにおいては、小規模かつシンプルな運用（サイト管理者の負荷軽減）が方針として設定されています。GitHub Actions を自作して保守するコストと、Web UI で一度だけ設定するコストを比較すると、**標準の Git 統合のまま、Cloudflare ダッシュボード（Web UI）から一回だけ `pnpm run build` に変更する運用** が最も適切です。

## 情報源
- [Cloudflare Pages: Build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Cloudflare Pages: Wrangler configuration](https://developers.cloudflare.com/pages/functions/wrangler-configuration/)
