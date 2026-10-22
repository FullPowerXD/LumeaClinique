import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { blogPosts } from '@/data/blog';
import { Link } from '@/i18n/navigation';

import CtaBanner from '@/components/home/CtaBanner';
import DepartmentsGrid from '@/components/home/DepartmentsGrid';
import GalleryPreview from '@/components/home/GalleryPreview';
import Hero from '@/components/home/Hero';
import NewsletterForm from '@/components/home/NewsletterForm';
import PractitionersShowcase from '@/components/home/PractitionersShowcase';
import StatsBar from '@/components/home/StatsBar';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import WhyLumea from '@/components/home/WhyLumea';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: '/fr', en: '/en', ar: '/ar' }
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `/${locale}`
    }
  };
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const latest = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />
      <StatsBar />

      <section className="bg-white py-24 lg:py-28">
        <div className="container-luxe">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow={t('home.intro.eyebrow')}
                title={t('home.intro.title')}
              />
              <p className="body-luxe mt-7 text-lg">{t('home.intro.text')}</p>
            </div>

            <ul className="space-y-5">
              {(['point1', 'point2', 'point3'] as const).map((key, index) => (
                <Reveal key={key} delay={index * 0.08}>
                  <li className="flex items-start gap-4 rounded-3xl border border-ink-line/70 bg-ivory/60 px-7 py-6">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-100 text-xs font-semibold text-gold-700">
                      {index + 1}
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-ink">{t(`home.intro.${key}`)}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <DepartmentsGrid />
      <PractitionersShowcase />
      <WhyLumea />
      <TestimonialsCarousel />
      <GalleryPreview />

      <section className="bg-ivory py-24 lg:py-32">
        <div className="container-luxe">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={t('home.blog.eyebrow')}
              title={t('home.blog.title')}
            />
            <Reveal className="shrink-0">
              <Link href="/journal" className="link-underline uppercase tracking-[0.18em]">
                {t('home.blog.cta')}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {latest.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.08}>
                <article className="group h-full">
                  <Link href={`/journal/${post.slug}`} className="block h-full">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-6 text-2xs font-semibold uppercase tracking-[0.24em] text-gold-600">
                      {post.category}
                    </p>
                    <h3 className="mt-3 font-display text-xl leading-snug text-ink transition-colors duration-400 group-hover:text-gold-600">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-soft">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-ink-mute">
                      {post.readingTime} {t('blog.readTime')}
                    </p>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <NewsletterForm />
    </>
  );
}
