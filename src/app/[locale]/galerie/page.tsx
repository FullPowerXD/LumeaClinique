import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { gallery } from '@/data/gallery';

import GalleryGrid from '@/components/gallery/GalleryGrid';
import PageHero from '@/components/common/PageHero';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'gallery' });

  return {
    title: t('title'),
    description: t('text'),
    alternates: {
      canonical: `/${locale}/galerie`,
      languages: { fr: '/fr/galerie', en: '/en/galerie', ar: '/ar/galerie' }
    }
  };
}

export default async function GalleryPage({
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
        eyebrow={t('gallery.eyebrow')}
        title={t('gallery.title')}
        text={t('gallery.text')}
        image="/images/gallery/architecture.svg"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe">
          <GalleryGrid items={gallery} />
        </div>
      </section>
    </>
  );
}
