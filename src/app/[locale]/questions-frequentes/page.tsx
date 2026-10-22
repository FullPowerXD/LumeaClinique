import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { appointmentFaq, generalFaq, vipFaq } from '@/data/faq';
import { Link } from '@/i18n/navigation';

import Accordion from '@/components/common/Accordion';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/ui/Reveal';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faq' });

  return {
    title: t('title'),
    description: t('text'),
    alternates: {
      canonical: `/${locale}/questions-frequentes`,
      languages: {
        fr: '/fr/questions-frequentes',
        en: '/en/questions-frequentes',
        ar: '/ar/questions-frequentes'
      }
    }
  };
}

export default async function FaqPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  const sections = [
    { key: 'general', items: generalFaq },
    { key: 'vip', items: vipFaq },
    { key: 'appointment', items: appointmentFaq }
  ];

  return (
    <>
      <PageHero
        eyebrow={t('faq.eyebrow')}
        title={t('faq.title')}
        text={t('faq.text')}
        image="/images/gallery/reception.svg"
        size="sm"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe space-y-16">
          {sections.map((section) => (
            <div key={section.key} className="mx-auto max-w-3xl">
              <h2 className="font-display text-2xl text-ink">
                {t(`faq.${section.key}`)}
              </h2>
              <Accordion items={section.items} className="mt-7" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-24">
        <div className="container-luxe">
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-4xl bg-ink px-9 py-12 text-center">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15">
                <MessageCircle className="h-6 w-6 text-gold-300" />
              </span>
              <h2 className="mt-7 font-display text-2xl text-white">
                {t('faq.stillQuestions')}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/65">
                {t('faq.stillQuestionsText')}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-white transition-all duration-500 ease-luxe hover:shadow-glow"
              >
                {t('faq.contactCta')}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
