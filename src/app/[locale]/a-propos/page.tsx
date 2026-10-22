import type { Metadata } from 'next';
import Image from 'next/image';
import { Compass, Gem, HeartHandshake, Sparkles } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { site } from '@/data/site';

import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('title'),
    description: t('text'),
    alternates: {
      canonical: `/${locale}/a-propos`,
      languages: { fr: '/fr/a-propos', en: '/en/a-propos', ar: '/ar/a-propos' }
    }
  };
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  const timeline = t.raw('about.timeline') as Array<{
    year: string;
    title: string;
    text: string;
  }>;

  const valueIcons = [Compass, Sparkles, Gem, HeartHandshake];

  return (
    <>
      <PageHero
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        text={t('about.text')}
        image="/images/gallery/architecture.svg"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={t('about.story')} title={t('about.story')} />
            <p className="body-luxe mt-7 text-lg">{t('about.storyText')}</p>

            <div className="mt-10 overflow-hidden rounded-4xl shadow-soft">
              <div className="relative aspect-[16/10] bg-ivory">
                <Image
                  src="/images/gallery/architecture.svg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <SectionHeading eyebrow={t('about.values')} title={t('about.values')} />

            <ul className="mt-9 space-y-4">
              {['1', '2', '3', '4'].map((key, index) => {
                const Icon = valueIcons[index] ?? Compass;

                return (
                  <li key={key}>
                    <Reveal delay={index * 0.06}>
                      <div className="flex items-start gap-5 rounded-3xl border border-ink-line/70 bg-ivory/40 p-6">
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-50 text-gold-600">
                          <Icon className="h-5 w-5" />
                        </span>
                        <p className="text-sm leading-relaxed text-ink">
                          {t(`about.valuesItems.${key}`)}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-luxe">
          <SectionHeading
            align="center"
            eyebrow={t('about.timelineHeading')}
            title={t('about.timelineHeading')}
          />

          <ol className="mt-16 space-y-8">
            {timeline.map((entry, index) => (
              <li key={entry.year}>
                <Reveal delay={index * 0.05}>
                  <div className="grid gap-4 rounded-4xl border border-ink-line/70 bg-white p-7 md:grid-cols-12 md:items-center md:gap-8">
                    <p className="font-display text-3xl text-gold-500 md:col-span-2">
                      {entry.year}
                    </p>
                    <div className="md:col-span-4">
                      <h3 className="font-display text-xl text-ink">{entry.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-ink-soft md:col-span-6">
                      {entry.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe">
          <SectionHeading
            align="center"
            eyebrow={t('about.figures')}
            title={t('about.figures')}
          />

          <dl className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.stats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-4xl border border-ink-line/70 bg-ivory/40 p-8 text-center"
              >
                <dt className="text-2xs font-semibold uppercase tracking-[0.22em] text-ink-mute">
                  {t(stat.labelKey)}
                </dt>
                <dd className="mt-4 font-display text-4xl text-ink">
                  {stat.value.toLocaleString(locale)}
                  {stat.suffix}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 rounded-4xl bg-ink px-9 py-12 text-center">
            <h2 className="font-display text-2xl text-white">{t('about.team')}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/65">
              {t('about.teamText')}
            </p>
            <a
              href={`/${locale}/praticiens`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-white transition-all duration-500 ease-luxe hover:shadow-glow"
            >
              {t('about.cta')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
