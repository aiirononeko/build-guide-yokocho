# ◉ build guide yokocho — ビルドガイド横丁

自作キーボードのビルドガイドを横丁のように歩いて探せる、キュレーション型ポータルサイトです。

**https://yokocho.build**

## これは何？

ビルドガイド横丁は、自作キーボードのビルドガイドへの **メタデータとリンク** を集めたフィールドガイドです。ガイド本体をホストするのではなく、設計者が公開しているガイドへの道案内を提供します。

- キーボード名・設計者名でのリアルタイム検索
- タグによる多軸フィルタリング（分割、40%、カラムスタッガード など）
- PRベースのコミュニティ運営

## Tech Stack

- [Astro](https://astro.build/) v6 — 静的サイト生成
- TypeScript + Zod — 型安全なコンテンツ管理
- [Cloudflare Workers](https://workers.cloudflare.com/) — ホスティング
- [Satori](https://github.com/vercel/satori) + Resvg — OG画像の自動生成

## Getting Started

```bash
# 依存パッケージのインストール
pnpm install

# 開発サーバーの起動 (http://localhost:4321/)
pnpm dev

# プロダクションビルド (OG画像生成 + 静的ビルド)
pnpm build

# ビルド結果のプレビュー
pnpm preview
```

## キーボードを掲載する

`src/content/guides/` に JSON ファイルを追加して PR を送るだけです。

```json
{
  "name": "Corne Classic",
  "designer": "foostan",
  "description": "初代Corneキーボード。3x6カラムスタッガード+3キーの分割構成。",
  "url": "https://github.com/foostan/crkbd/blob/main/docs/corne-classic/buildguide_jp.md",
  "tags": ["分割", "40%", "カラムスタッガード", "MX互換"],
  "shopLinks": [],
  "addedAt": "2026-04-13"
}
```

詳しくは [CONTRIBUTING.md](./CONTRIBUTING.md) を参照してください。

## プロジェクト構成

```
src/
├── content/
│   └── guides/           # キーボードガイドの JSON データ
├── components/
│   └── GuideCard.astro   # ガイドカードコンポーネント
├── layouts/
│   └── Layout.astro      # 共通レイアウト (meta, OGP, スタイル)
├── pages/
│   ├── index.astro       # メインページ (検索・フィルタ・一覧)
│   └── sitemap.xml.ts    # サイトマップ生成
└── content.config.ts     # Content Collections スキーマ定義
scripts/
└── generate-og.ts        # OG画像生成スクリプト
```

## License

ISC
