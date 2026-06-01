import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// === 新メディア立ち上げ時に編集 ===
// GitHub Pages サブパス配信なら BASE = '/<repo-name>'、
// カスタムドメイン(ルート配信)なら BASE = '/'。
// site も本番URLに差し替える。
const BASE = '/affiliate-base';

export default defineConfig({
  site: 'https://Fujiisunn.github.io',
  base: BASE,
  trailingSlash: 'always',
  integrations: [mdx()],
});
