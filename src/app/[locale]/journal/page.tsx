import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Clock } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { blogCategories, blogPosts } from '@/data/blog';
import { Link } from '@/i18n/navigation';

import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/ui/Reveal';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });

  return {
    title: t('title'),
    description: t('text'),
    alternates: {
      canonical: `/${locale}/journal`,
      languages: { fr: '/fr/journal', en: '/en/journal', ar: '/ar/journal' }
    }
  };
}

export default async function BlogPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const [featured, ...rest] = blogPosts;

  const categoryLabel = (category: string) => {
    const key = `blog.categoryLabels.${category}`;

    return t.has(key) ? t(key) : category;
  };

  return (
    <>
      <PageHero
        eyebrow={t('blog.eyebrow')}
        title={t('blog.title')}
        text={t('blog.text')}
        image="/images/blog/radiologie.svg"
      >
        <ul className="flex flex-wrap gap-2">
          {blogCategories.map((category) => (
            <li
              key={category}
              className="rounded-full border border-gold-200 bg-gold-50 px-4 py-1.5 text-xs text-gold-700"
            >
              {categoryLabel(category)}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe">
          {featured ? (
            <Reveal>
              <Link
                href={`/journal/${featured.slug}`}
                className="group grid gap-8 overflow-hidden rounded-4xl border border-ink-line/70 bg-ivory/40 p-6 transition-all duration-700 ease-luxe hover:shadow-lift lg:grid-cols-2 lg:p-8"
              >
                <span className="relative block aspect-[16/10] overflow-hidden rounded-3xl bg-ivory">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-[1.05]"
                  />
                </span>

                <span className="flex flex-col justify-center">
                  <span className="text-2xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                    {categoryLabel(featured.category)}
                  </span>
                  <span className="mt-4 font-display text-3xl leading-tight text-ink">
                    {featured.title}
                  </span>
                  <span className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {featured.excerpt}
                  </span>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
                    {t('common.readMore')}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ) : null}

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 3) * 0.08}>
                <Link
                  href={`/journal/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-4xl border border-ink-line/70 bg-white shadow-soft transition-all duration-700 ease-luxe hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="relative block aspect-[16/10] overflow-hidden bg-ivory">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-[1.05]"
                    />
                  </span>

                  <span className="flex flex-1 flex-col p-7">
                    <span className="text-2xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                      {categoryLabel(post.category)}
                    </span>
                    <span className="mt-4 font-display text-xl leading-snug text-ink transition-colors duration-400 group-hover:text-gold-600">
                      {post.title}
                    </span>
                    <span className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
                      {post.excerpt}
                    </span>

                    <span className="mt-auto flex items-center justify-between pt-6 text-xs text-ink-mute">
                      <span>{post.date}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readingTime} {t('blog.readTime')}
                      </span>
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
