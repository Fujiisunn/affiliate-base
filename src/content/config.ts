import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    // 記事URLの連番ID(/news/<postId>/)。記事ごとに重複しない番号を必ず振る。
    postId: z.number(),
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional().default('記事'),
    draft: z.boolean().optional().default(false),
    thumb: z.string().optional(),
    thumbHeadline: z.string().optional(),
    thumbAccent: z.string().optional(),
  }),
});

export const collections = { articles };
