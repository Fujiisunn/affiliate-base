# affiliate-base

アフィリエイトメディア用の共通基盤(Astro)。`manjaro-media1` のエンジン部分だけを抜き出した素体。
新しいメディアを作るときは、このディレクトリを複製して中身を差し替える。

## 含まれるもの(基盤)

- Astro 5 + Content Collections(`src/content/config.ts` に記事スキーマ)
- レイアウト / 共通コンポーネント(Header / Footer / Sidebar / ArticleCard)
- ページ:トップ / 記事詳細 / 運営者情報 / お問い合わせ / プライバシー
- GitHub Pages デプロイ用ワークフロー(`.github/workflows/deploy.yml`)
- SEO 基盤(`BaseLayout.astro`:canonical / OGP / Twitter Card / JSON-LD 構造化データ)
- `sitemap-index.xml` 自動生成(`@astrojs/sitemap`)/ RSS フィード `/rss.xml`(`@astrojs/rss`)
- `public/robots.txt`(Sitemap 行つき)
- CSS 骨格(`src/styles/global.css`:レイアウト + 記事本文パーツ。色は CSS 変数で集中管理)

※ マンジャロ固有の記事・サムネ・料金比較表(ClinicCompare)・ドメイン設定(CNAME)は含めていない。

## SEO / RSS

- 各ページの `<head>` は `BaseLayout.astro` が生成。記事詳細は `type="article"` を渡すと記事用 OGP と Article 構造化データが出る。
- **OGP 画像**:既定は `favicon.svg`。SNS のカードは SVG を表示しないものが多いため、本番では PNG/JPG(1200×630 推奨)を用意し、記事 frontmatter の `thumb` か `BaseLayout` の `image` に絶対 URL/相対パスで指定する。
- **サイト URL の差し替え**:`astro.config.mjs` の `site`/`base` と、`public/robots.txt` の `Sitemap:` 行をセットで本番 URL に直す(現状は `https://Fujiisunn.github.io/affiliate-base/`)。
- RSS フィードは `/rss.xml`、サイトマップは `/sitemap-index.xml`。`draft: true` の記事は両方とも除外される。

## 新メディア立ち上げ手順

1. このフォルダを複製してリネーム
2. `src/consts.ts` … サイト名・説明文
3. `astro.config.mjs` … `site` と `BASE`(サブパス配信なら `/<repo>`、独自ドメインなら `/`)
4. `src/styles/global.css` の `:root` … ブランドカラー(`--color-primary` ほか)
5. `src/components/Sidebar.astro` / `Header.astro` … カテゴリー・ナビ
6. `src/content/config.ts` … `category` のデフォルト
7. `src/content/articles/sample.md` を複製して記事を作成
8. `public/favicon.svg` / ロゴ・OGP を差し替え

## コマンド

```bash
npm install
npm run dev          # 開発サーバー
npm run build        # 本番ビルド
npm run preview      # ビルド結果をローカルで確認
```
