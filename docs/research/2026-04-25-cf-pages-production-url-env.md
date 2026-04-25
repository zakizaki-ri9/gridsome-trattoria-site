---
title: Cloudflare Pages ビルド時環境変数に本番URLは存在するか
date: 2026-04-25
reliability: High (Cloudflare公式ドキュメント直接確認)
depth: Deep & Narrow
---

## 調査課題
Cloudflare Pages のビルド時に自動注入されるシステム環境変数の中に、プレビューURLではなく「本番URL（正規ドメイン）」を提供するものが存在するか。

## 結論
**本番URLを直接提供するシステム環境変数は存在しない。**

## 調査結果

### Cloudflare Pages が自動注入するシステム環境変数（全5つ）

公式ドキュメント（https://developers.cloudflare.com/pages/configuration/build-configuration/#environment-variables）に記載されている、ビルド時に自動注入されるシステム環境変数は以下の5つのみである。

| 環境変数名 | 値 | 備考 |
|---|---|---|
| `CI` | `true` | CI環境であることを示すフラグ |
| `CF_PAGES` | `1` | Cloudflare Pages上で動作していることを示すフラグ |
| `CF_PAGES_COMMIT_SHA` | `<sha1-hash>` | 現在のコミットのSHAハッシュ |
| `CF_PAGES_BRANCH` | `<branch-name>` | 現在ビルドされているブランチ名（例: `master`, `feature/xxx`） |
| `CF_PAGES_URL` | `<url-of-current-deployment>` | **現在のデプロイメントのURL**（コミットハッシュ付きのプレビューURL） |

### `CF_PAGES_URL` の挙動
- 本番デプロイであっても `https://<commit-hash>.<project>.pages.dev` 形式のURLが設定される
- `https://<project>.pages.dev` という正規の本番URLは**提供されない**
- 独自ドメインが設定されている場合でも、その独自ドメインのURLは**提供されない**

### 推奨される対応パターン
Cloudflare公式およびコミュニティのベストプラクティスとして、以下の2つの方法が推奨されている。

#### パターン1: `CF_PAGES_BRANCH` で分岐する
```javascript
site: process.env.CF_PAGES_BRANCH === 'master'
  ? 'https://trattoria-e-bar-porto-yamanashi.pages.dev'
  : (process.env.CF_PAGES_URL || 'http://localhost:4321'),
```
- メリット: Cloudflare側で追加の環境変数設定が不要
- デメリット: 本番URLのハードコードが残る

#### パターン2: ダッシュボードでカスタム環境変数を設定する
Cloudflare Pages のダッシュボード（Settings > Environment variables）から、Productionにのみ `SITE_URL` 等のカスタム環境変数を手動で設定し、それを優先的に参照する。
```javascript
site: process.env.SITE_URL || process.env.CF_PAGES_URL || 'http://localhost:4321',
```
- メリット: コードにURLをハードコードしなくてよい。独自ドメイン導入時も設定変更のみで対応可能
- デメリット: ダッシュボードでの初期設定が必要

## 情報源
- [Cloudflare Pages Build Configuration - Environment variables](https://developers.cloudflare.com/pages/configuration/build-configuration/#environment-variables)（公式ドキュメント、最終更新: 2026-04-21）

## 推奨事項
本プロジェクトでは**パターン1のバリアント（リポジトリ定数 + `CF_PAGES_BRANCH` 分岐）**を採用した。

### 採用方式
`src/consts.ts` に本番URLを定数として定義し、`astro.config.mjs` で `CF_PAGES_BRANCH` を用いて本番/プレビューを判定する。

```javascript
// src/consts.ts
export const SITE_URL = 'https://trattoria-e-bar-porto-yamanashi.pages.dev';

// astro.config.mjs
import { SITE_URL } from './src/consts';
const isProduction = !process.env.CF_PAGES_BRANCH || process.env.CF_PAGES_BRANCH === 'master';
site: isProduction ? SITE_URL : process.env.CF_PAGES_URL,
```

### 採用理由
1. プラットフォーム移行時に `src/consts.ts` の定数を1箇所変更するだけで済む
2. Cloudflareダッシュボードへの依存を避け、リポジトリ内で設定を完結できる
3. コードレビューでURL変更を追跡可能

> **注**: パターン2（ダッシュボードでのカスタム環境変数）は、コード変更なしでURLを変更できるメリットがあるため、比較資料として上記に残している。
