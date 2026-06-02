import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// === 新メディア立ち上げ時に編集 ===
// GitHub Pages サブパス配信なら BASE = '/<repo-name>'、
// カスタムドメイン(ルート配信)なら BASE = '/'。
// site も本番URLに差し替える。
const BASE = '/';

export default defineConfig({
  site: 'https://topicknow.com',
  base: BASE,
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
});
