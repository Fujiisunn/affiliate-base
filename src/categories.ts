// ===========================================================================
//  カテゴリー定義(SEO/サイト構造の土台)
// ===========================================================================
//  記事の frontmatter には、ここで定義した「スラッグ(slug)」を category に書く。
//   例)  category: streaming
//  - URL はスラッグ(英語)で生成され、きれいで共有しやすい(/category/streaming/)。
//  - label がサイト上の表示名、description がカテゴリーページの説明文(SEO)。
//  - 記事が1本もないカテゴリーはページ化されない(薄いページを作らないため)。
//  - 新カテゴリーを増やすときは、この配列に1行足すだけ。
//  - order が小さいほど一覧で上に表示される。
// ===========================================================================

export interface Category {
  slug: string;
  label: string;
  description: string;
  order: number;
}

export const CATEGORIES: Category[] = [
  {
    slug: 'geino',
    label: '芸能・エンタメ',
    description:
      '芸能人・アイドル・俳優・アーティストなど、有名人の話題や気になる疑問をわかりやすくまとめています。',
    order: 1,
  },
  {
    slug: 'influencer',
    label: 'インフルエンサー',
    description:
      'YouTuber・配信者・TikTokerなど、SNSで話題のインフルエンサーに関する情報や疑問を解説します。',
    order: 2,
  },
  {
    slug: 'streaming',
    label: 'ライブ・動画配信',
    description:
      'ライブ配信・見逃し配信・動画サービスの視聴方法や、テレビで見る方法などをやさしく解説します。',
    order: 3,
  },
  {
    slug: 'trouble',
    label: 'アプリ・不具合',
    description:
      'アプリやサービスの不具合・エラー・障害の発生状況と、その対処法をわかりやすくまとめます。',
    order: 4,
  },
  {
    slug: 'trend',
    label: '話題・トレンド',
    description:
      'いま気になるニュースや流行など、ジャンルを問わず話題のトピックを取り上げます。',
    order: 5,
  },
];

const BY_SLUG = new Map(CATEGORIES.map((c) => [c.slug, c]));

/** スラッグからカテゴリー定義を取得(未定義ならスラッグ自体をlabelにしたフォールバックを返す)。 */
export function getCategory(slug: string): Category {
  return (
    BY_SLUG.get(slug) ?? {
      slug,
      label: slug,
      description: `「${slug}」に関する記事の一覧です。`,
      order: 999,
    }
  );
}

/** スラッグ → 表示名。 */
export function categoryLabel(slug: string): string {
  return getCategory(slug).label;
}
