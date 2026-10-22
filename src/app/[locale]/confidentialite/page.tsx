import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import LegalContent from '@/components/legal/LegalContent';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  const contents = t.raw('contents') as Record<string, { title: string; paragraphs: string[] }>;
  const content = contents['privacy'];

  return {
    title: content?.title ?? t('title'),
    description: content?.paragraphs[0] ?? t('title'),
    alternates: {
      canonical: `/${locale}/confidentialite`,
      languages: {
        fr: `/fr/confidentialite`,
        en: `/en/confidentialite`,
        ar: `/ar/confidentialite`
      }
    }
  };
}

export default async function Page() {
  return <LegalContent topic="privacy" />;
}
