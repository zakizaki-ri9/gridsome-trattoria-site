# Web調査レポート: Cloudflare Pages における pnpm サポート状況

## 調査メタデータ
- **調査日**: 2026-04-05
- **トピック**: Cloudflare Pages が pnpm をネイティブサポートしているか
- **調査深度**: 深く狭く（公式ドキュメント中心）
- **情報源の信頼性**: Cloudflare 公式ドキュメント（一次情報）

## 調査課題
npm → pnpm 移行にあたり、Cloudflare Pages のビルド環境で pnpm が追加設定なしで利用できるかを確認する。

## 概要と結論

**Cloudflare Pages は pnpm をネイティブサポートしている。**

### エビデンス: Cloudflare Pages Build Image 公式ドキュメント

出典: https://developers.cloudflare.com/pages/configuration/build-image/

#### ビルドイメージ v3（最新、2025年5月時点でデフォルト）

| Tool | Default version | Supported versions | Environment variable |
|:---|:---|:---|:---|
| **pnpm** | 10.11.1 | Any version | `PNPM_VERSION` |

#### ビルドイメージ v2

| Tool | Default version | Supported versions | Environment variable |
|:---|:---|:---|:---|
| **pnpm** | 8.7.1 | Any version | `PNPM_VERSION` |

### パッケージマネージャーの自動検出

Cloudflare Pages のビルドシステムは、リポジトリのルートにあるロックファイルを基にパッケージマネージャーを**自動検出**する:

- `pnpm-lock.yaml` → pnpm を使用
- `yarn.lock` → yarn を使用
- いずれもなし → npm をデフォルトで使用

### ビルドキャッシュ

v2/v3 ビルドシステムは npm, yarn, pnpm, bun のキャッシュディレクトリを自動的にキャッシュする機能を備えている。

### v3 の制限事項（注意点）

> Detecting pnpm version detection based `pnpm-lock.yaml` file version.

v3ではロックファイルのバージョンからpnpmバージョンを自動推定する機能は**未サポート**。ただし `PNPM_VERSION` 環境変数でバージョン指定が可能。`package.json` の `packageManager` フィールドからの検出も未対応。

## 実践的な知見

### pnpm を Cloudflare Pages で利用するために必要な設定

1. **`pnpm-lock.yaml` をリポジトリにコミットする** — これだけで pnpm が自動選択される
2. **ビルドコマンドはそのまま `npm run build` でOK** — pnpm が検出された場合、Cloudflare が自動的に `pnpm install` を実行した上でビルドコマンドを実行する。ただし念のため `pnpm run build` に変更するのが望ましい
3. **`SKIP_DEPENDENCY_INSTALL` は不要** — pnpm がネイティブサポートされているため
4. **`corepack enable` も不要** — ビルドイメージに pnpm がプリインストールされているため
5. **`PNPM_VERSION` 環境変数（任意）** — 特定のバージョンを固定したい場合のみ設定

### 従来の方法（非推奨・不要になった）

以下は pnpm がネイティブサポートされる**以前**に必要だった手順であり、現在は不要:

```bash
# ❌ 不要（かつての workaround）
SKIP_DEPENDENCY_INSTALL=1
corepack enable && corepack prepare pnpm@latest --activate && pnpm install && pnpm run build
```

## 推奨事項

本プロジェクト (gridsome-trattoria-site) の pnpm 移行にあたっては:

1. `pnpm-lock.yaml` を生成しリポジトリにコミットする
2. ビルドコマンドを `pnpm run build` に変更する（推奨だが `npm run build` のままでも動作する）
3. `package-lock.json` を削除する
4. `SKIP_DEPENDENCY_INSTALL` や `corepack` の設定は**一切不要**

## 情報源

- [Cloudflare Pages Build Image - 公式ドキュメント](https://developers.cloudflare.com/pages/configuration/build-image/) — v3ビルドイメージにpnpm 10.11.1がプリインストールされていることを明記
- [Cloudflare Pages Build Configuration - 公式ドキュメント](https://developers.cloudflare.com/pages/configuration/build-configuration/) — ビルドコマンドとディレクトリの設定方法
- [Cloudflare Pages Build Caching - 公式ドキュメント](https://developers.cloudflare.com/pages/configuration/build-caching/) — pnpmキャッシュのサポート
