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
  const content = contents['notice'];

  return {
    title: content?.title ?? t('title'),
    description: content?.paragraphs[0] ?? t('title'),
    alternates: {
      canonical: `/${locale}/mentions-legales`,
      languages: {
        fr: `/fr/mentions-legales`,
        en: `/en/mentions-legales`,
        ar: `/ar/mentions-legales`
      }
    }
  };
}

export default async function Page() {
  return <LegalContent topic="notice" />;
}
