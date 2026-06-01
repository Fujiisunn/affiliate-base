# affiliate-base

アフィリエイトメディア用の共通基盤(Astro)。`manjaro-media1` のエンジン部分だけを抜き出した素体。
新しいメディアを作るときは、このディレクトリを複製して中身を差し替える。

## 含まれるもの(基盤)

- Astro 5 + Content Collections(`src/content/config.ts` に記事スキーマ)
- レイアウト / 共通コンポーネント(Header / Footer / Sidebar / ArticleCard)
- ページ:トップ / 記事詳細 / 運営者情報 / お問い合わせ / プライバシー
- GitHub Pages デプロイ用ワークフロー(`.github/workflows/deploy.yml`)
- CSS 骨格(`src/styles/global.css`:レイアウト + 記事本文パーツ。色は CSS 変数で集中管理)

※ マンジャロ固有の記事・サムネ・料金比較表(ClinicCompare)・ドメイン設定(CNAME)は含めていない。

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
