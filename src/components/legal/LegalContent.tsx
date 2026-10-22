import { getTranslations } from 'next-intl/server';

import { site } from '@/data/site';
import { Link } from '@/i18n/navigation';

import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageHero from '@/components/common/PageHero';

export type LegalTopic = 'notice' | 'privacy' | 'cookies' | 'tiers';

export const legalSlugs: Record<LegalTopic, string> = {
  notice: 'mentions-legales',
  privacy: 'confidentialite',
  cookies: 'cookies',
  tiers: 'conditions'
};

export default async function LegalContent({ topic }: { topic: LegalTopic }) {
  const t = await getTranslations();
  const contents = t.raw('legal.contents') as Record<
    LegalTopic,
    { title: string; paragraphs: string[] }
  >;

  const content = contents[topic];

  return (
    <>
      <PageHero
        eyebrow={t('legal.eyebrow')}
        title={content?.title ?? t('legal.title')}
        text={t('legal.updated')}
        image="/images/gallery/reception.svg"
        size="sm"
      >
        <Breadcrumbs
          items={[
            { label: t('nav.home'), href: '/' },
            { label: content?.title ?? t('legal.title') }
          ]}
        />
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-16">
          <nav className="lg:col-span-4">
            <ul className="sticky top-28 space-y-2">
              {(Object.keys(legalSlugs) as LegalTopic[]).map((key) => (
                <li key={key}>
                  <Link
                    href={`/${legalSlugs[key]}`}
                    className="block rounded-2xl px-5 py-3.5 text-sm text-ink-soft transition-colors duration-400 hover:bg-ivory hover:text-gold-600"
                  >
                    {t(`legal.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-8">
            <h1 className="font-display text-3xl text-ink">{content?.title}</h1>

            <div className="prose-luxe mt-8">
              {content?.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-ink-line/70 bg-ivory/50 p-7 text-sm text-ink-soft">
              <p>
                <span className="font-semibold text-ink">{site.legalName}</span> —{' '}
                {site.address.full} — {site.contact.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
