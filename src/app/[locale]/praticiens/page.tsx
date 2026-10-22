import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { practitioners } from '@/data/practitioners';

import PageHero from '@/components/common/PageHero';
import PractitionerDirectory from '@/components/practitioners/PractitionerDirectory';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'practitioners' });

  return {
    title: t('title'),
    description: t('text'),
    alternates: {
      canonical: `/${locale}/praticiens`,
      languages: { fr: '/fr/praticiens', en: '/en/praticiens', ar: '/ar/praticiens' }
    }
  };
}

export default async function PractitionersPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <>
      <PageHero
        eyebrow={t('practitioners.eyebrow')}
        title={t('practitioners.title')}
        text={t('practitioners.text')}
        image="/images/practitioners/p01.svg"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe">
          <PractitionerDirectory practitioners={practitioners} />
        </div>
      </section>
    </>
  );
}
