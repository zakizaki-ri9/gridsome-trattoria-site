# TRATTORIA PORTO (トラットリア・ポルト)

山梨県甲府市にあるカジュアルイタリアンレストラン「TRATTORIA PORTO」の公式ウェブサイトソースコードです。

## 🚀 開発環境のセットアップ

### 前提条件
- Node.js (v18以降を推奨)
- pnpm (v10以降を推奨 / サプライチェーン攻撃対策済)

### インストール

依存関係のインストールには `pnpm` を使用します。

```bash
pnpm install
```

※ プロジェクトのセキュリティポリシーにより、公開から7日以内のパッケージや公開手法がダウングレードされたパッケージのインストールは意図的に制限されています（`pnpm-workspace.yaml` 参照）。

## 🧞 コマンド一覧

すべてのコマンドはプロジェクトのルートディレクトリで実行します。

| コマンド | 説明 |
| :--- | :--- |
| `pnpm install` | 依存関係のインストール |
| `pnpm run dev` | ローカル開発サーバーを起動 (デフォルト: `http://localhost:4321`) |
| `pnpm run build` | 本番環境用に静的ビルドを実行 (`./dist/` へ出力) |
| `pnpm run preview` | ビルドした成果物をローカルサーバーでプレビュー |
| `pnpm run astro ...` | Astro CLI コマンドの実行 (`pnpm run astro check` 等) |

## 🛠 技術スタック

* **フレームワーク**: Astro (SSG)
* **パッケージ管理**: pnpm (v10 ~)
* **スタイリング**: Vanilla CSS (`src/styles/global.css`)
* **ホスティング**: Cloudflare Pages
* **ギャラリー UI**: fslightbox

## 📁 ディレクトリ構造

```text
/
├── public/                 # ビルド時にそのままルートへ配置される静的ファイル
├── src/
│   ├── assets/             # 最適化対象の画像・その他アセット
│   ├── components/         # 汎用 UI コンポーネント (Header, Footer, Access 等)
│   ├── layouts/            # ページ枠組み（共通ヘッダー・メタタグ・OGP設定）
│   ├── pages/              # 各ページファイル（ファイルベース・ルーティング）
│   └── styles/             # グローバル定義の CSS
├── pnpm-workspace.yaml     # pnpm のセキュリティ設定・管理
└── astro.config.mjs        # Astro 全体設定
```


