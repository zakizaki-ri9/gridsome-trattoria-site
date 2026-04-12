# Cloudflare Pages pnpm サポートガイドライン

- **最終調査日**: 2026-04-05
- **関連調査**: [2026-04-05-cloudflare-pages-pnpm-support.md](../../research/2026-04-05-cloudflare-pages-pnpm-support.md)
- **公式ドキュメント**: https://developers.cloudflare.com/pages/configuration/build-image/

## 概要
Cloudflare Pages は **v2/v3 ビルドイメージで pnpm をネイティブサポート** している。
リポジトリに `pnpm-lock.yaml` が存在するだけで、自動的に pnpm が選択される。

## 利用手順（最小構成）

### 必須
1. `pnpm-lock.yaml` をリポジトリのルートにコミットする
2. ビルドコマンドを `pnpm run build` に設定する

### 任意
- `PNPM_VERSION` 環境変数でバージョンを固定（未指定時のデフォルトは v3: 10.11.1）
- ビルドキャッシュを有効化（Settings > Build caching）

### 不要（ネイティブサポートにより）
- `SKIP_DEPENDENCY_INSTALL` 環境変数
- `corepack enable` / `corepack prepare` コマンド
- ビルドコマンド内での `pnpm install`（Cloudflare が自動実行）

## チェックリスト

- [ ] `pnpm-lock.yaml` がリポジトリにコミットされているか
- [ ] `package-lock.json` が削除されているか（競合防止）
- [ ] ビルドコマンドが `pnpm run build` になっているか
- [ ] ビルドイメージが v2 以降になっているか（v1は pnpm 非対応）

## 注意事項
- v3 では `pnpm-lock.yaml` のファイルバージョンからの pnpm バージョン自動推定は未サポート
- `package.json` の `engines` や `packageManager` フィールドからの検出も未サポート
- バージョン固定が必要な場合は `PNPM_VERSION` 環境変数を使用すること
