import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Clock, User } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { blogPosts, getBlogPost, getRelatedPosts } from '@/data/blog';
import { site } from '@/data/site';
import { Link } from '@/i18n/navigation';

import Breadcrumbs from '@/components/common/Breadcrumbs';
import Reveal from '@/components/ui/Reveal';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/${locale}/journal/${slug}`,
      languages: {
        fr: `/fr/journal/${slug}`,
        en: `/en/journal/${slug}`,
        ar: `/ar/journal/${slug}`
      }
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image }]
    }
  };
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const t = await getTranslations();
  const related = getRelatedPosts(slug, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${site.url}${post.image}`,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: site.name }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="bg-white pb-20 pt-32 md:pb-24 md:pt-40">
        <div className="container-luxe">
          <Breadcrumbs
            items={[
              { label: t('nav.home'), href: '/' },
              { label: t('nav.blog'), href: '/journal' },
              { label: post.title }
            ]}
          />

          <header className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-2xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              {post.category}
            </p>
            <h1 className="mt-5 text-display-sm text-ink">{post.title}</h1>
            <p className="body-luxe mx-auto mt-6 max-w-2xl text-lg">{post.excerpt}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-ink-mute">
              <span className="inline-flex items-center gap-2">
                <User className="h-3.5 w-3.5" />
                {t('blog.author')} {post.author}
              </span>
              <span>{post.date}</span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime} {t('blog.readTime')}
              </span>
            </div>
          </header>

          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-4xl shadow-soft">
            <div className="relative aspect-[16/9] bg-ivory">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose-luxe mx-auto mt-14 max-w-3xl">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-between gap-6 border-y border-ink-line/70 py-7">
            <p className="text-sm text-ink-soft">{t('blog.share')}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`${site.url}/${locale}/journal/${post.slug}`)}`}
                className="rounded-full border border-ink-line px-6 py-2.5 text-xs font-medium text-ink transition-all duration-400 hover:border-gold-400 hover:text-gold-600"
              >
                E-mail
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${site.url}/${locale}/journal/${post.slug}`)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-ink-line px-6 py-2.5 text-xs font-medium text-ink transition-all duration-400 hover:border-gold-400 hover:text-gold-600"
              >
                Facebook
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${site.url}/${locale}/journal/${post.slug}`)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-ink-line px-6 py-2.5 text-xs font-medium text-ink transition-all duration-400 hover:border-gold-400 hover:text-gold-600"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="bg-ivory py-20 lg:py-24">
          <div className="container-luxe">
            <h2 className="font-display text-2xl text-ink">{t('blog.related')}</h2>

            <div className="mt-10 grid gap-7 md:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.08}>
                  <Link
                    href={`/journal/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-4xl border border-ink-line/70 bg-white shadow-soft transition-all duration-700 ease-luxe hover:-translate-y-1 hover:shadow-lift"
                  >
                    <span className="relative block aspect-[16/10] overflow-hidden bg-ivory">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-[1.05]"
                      />
                    </span>
                    <span className="flex flex-1 flex-col p-7">
                      <span className="text-2xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                        {item.category}
                      </span>
                      <span className="mt-4 font-display text-xl leading-snug text-ink transition-colors duration-400 group-hover:text-gold-600">
                        {item.title}
                      </span>
                      <span className="mt-auto flex items-center justify-between pt-6 text-xs text-ink-mute">
                        <span>{item.date}</span>
                        <ArrowUpRight className="h-4 w-4 text-gold-500" />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/journal" className="link-underline uppercase tracking-[0.18em]">
                {t('blog.backToBlog')}
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
