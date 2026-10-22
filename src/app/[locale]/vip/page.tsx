import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Car,
  Gem,
  Globe2,
  Hotel,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { vipFaq } from '@/data/faq';
import { hotels } from '@/data/hotels';

import Accordion from '@/components/common/Accordion';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import VipForm from '@/components/forms/VipForm';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'vip' });

  return {
    title: t('title'),
    description: t('text'),
    alternates: {
      canonical: `/${locale}/vip`,
      languages: { fr: '/fr/vip', en: '/en/vip', ar: '/ar/vip' }
    }
  };
}

export default async function VipPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  const services = [
    { key: 'travel', icon: Car },
    { key: 'accommodation', icon: Hotel },
    { key: 'interpretation', icon: Globe2 },
    { key: 'coordination', icon: Stethoscope },
    { key: 'privacy', icon: ShieldCheck }
  ] as const;

  return (
    <>
      <PageHero
        eyebrow={t('vip.eyebrow')}
        title={t('vip.title')}
        text={t('vip.text')}
        image="/images/gallery/lounge.svg"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-300 bg-gold-50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">
          <Gem className="h-4 w-4" />
          {t('vip.cta')}
        </span>
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe">
          <SectionHeading
            align="center"
            eyebrow={t('vip.eyebrow')}
            title={t('vip.services')}
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.key} delay={(index % 3) * 0.08}>
                  <div className="card-luxe h-full p-8">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-50 text-gold-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-display text-xl text-ink">
                      {t(`vip.${service.key}`)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {t(`vip.serviceDescriptions.${service.key}`)}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow={t('vip.hotels')}
            title={t('vip.hotels')}
            text={t('vip.hotelsText')}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((hotel, index) => (
              <Reveal key={hotel.slug} delay={(index % 3) * 0.08}>
                <article className="group overflow-hidden rounded-4xl border border-ink-line/70 bg-white shadow-soft">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ivory">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-7">
                    <p className="text-2xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                      {hotel.category}
                    </p>
                    <h3 className="mt-3 font-display text-xl text-ink">{hotel.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {hotel.description}
                    </p>
                    <p className="mt-4 text-xs text-ink-mute">{hotel.distance}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {hotel.perks.map((perk) => (
                        <li
                          key={perk}
                          className="rounded-full bg-ivory px-3 py-1 text-[0.68rem] text-ink-soft"
                        >
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={t('vip.faq')} title={t('vip.faq')} />
            <Accordion items={vipFaq} className="mt-10" />
          </div>

          <div className="lg:col-span-5">
            <VipForm />
          </div>
        </div>
      </section>
    </>
  );
}
