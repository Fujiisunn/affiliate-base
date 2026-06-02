import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts.ts';

const base = import.meta.env.BASE_URL;

export async function GET(context) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  const sorted = articles.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // context.site は astro.config.mjs の site(オリジン)。link に base を含めて絶対URL化する。
    site: context.site,
    items: sorted.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `${base}news/${article.data.postId}/`,
      categories: article.data.category ? [article.data.category] : [],
    })),
    customData: `<language>ja</language>`,
  });
}
