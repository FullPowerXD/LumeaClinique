import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Bus,
  Car,
  Clock,
  CreditCard,
  FileText,
  MapPin,
  Navigation,
  ParkingCircle,
  Train
} from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { generalFaq } from '@/data/faq';
import { insurances } from '@/data/insurances';
import { site } from '@/data/site';

import Accordion from '@/components/common/Accordion';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'practical' });

  return {
    title: t('title'),
    description: t('text'),
    alternates: {
      canonical: `/${locale}/infos-pratiques`,
      languages: {
        fr: '/fr/infos-pratiques',
        en: '/en/infos-pratiques',
        ar: '/ar/infos-pratiques'
      }
    }
  };
}

export default async function PracticalPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  const transportOptions = t.raw('practical.transportOptions') as Array<{
    label: string;
    detail: string;
  }>;

  const documents = t.raw('practical.documentsList') as string[];

  return (
    <>
      <PageHero
        eyebrow={t('practical.eyebrow')}
        title={t('practical.title')}
        text={t('practical.text')}
        image="/images/gallery/entrance.svg"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={t('practical.access')} title={t('practical.address')} />

            <div className="mt-8 overflow-hidden rounded-4xl border border-ink-line/70">
              <div className="relative aspect-[16/9] bg-ivory">
                <Image
                  src="/images/gallery/entrance.svg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-ink backdrop-blur">
                  <MapPin className="h-3.5 w-3.5 text-gold-500" />
                  {site.address.full}
                </span>
              </div>
              <div className="flex flex-wrap gap-4 bg-ivory/60 p-6">
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-white transition-all duration-500 ease-luxe hover:shadow-glow"
                >
                  <MapPin className="h-4 w-4" />
                  {t('practical.map')}
                </a>
                <a
                  href={site.address.directionsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-white px-6 py-3 text-sm font-medium text-ink transition-all duration-500 ease-luxe hover:border-gold-400 hover:text-gold-600"
                >
                  <Navigation className="h-4 w-4" />
                  {t('practical.directions')}
                </a>
              </div>
            </div>

            <h3 className="mt-12 font-display text-xl text-ink">
              {t('practical.transport')}
            </h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {transportOptions.map((option, index) => {
                const Icon = [Car, Bus, Train][index] ?? Car;

                return (
                  <li
                    key={option.label}
                    className="rounded-3xl border border-ink-line/70 bg-ivory/40 p-6"
                  >
                    <Icon className="h-5 w-5 text-gold-500" />
                    <p className="mt-4 text-sm font-medium text-ink">{option.label}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                      {option.detail}
                    </p>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12 flex items-start gap-5 rounded-3xl border border-gold-200 bg-gold-50 p-7">
              <ParkingCircle className="h-7 w-7 shrink-0 text-gold-500" />
              <div>
                <h4 className="font-display text-lg text-ink">{t('practical.parking')}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {t('practical.parkingText')}
                </p>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-28 space-y-7">
              <div className="rounded-4xl border border-ink-line/70 bg-white p-8 shadow-soft">
                <h3 className="flex items-center gap-3 font-display text-xl text-ink">
                  <Clock className="h-5 w-5 text-gold-500" />
                  {t('practical.openingHours')}
                </h3>
                <ul className="mt-6 divide-y divide-ink-line/60">
                  {site.openingHours.map((hour) => (
                    <li key={hour.day} className="flex items-center justify-between py-3.5 text-sm">
                      <span className="text-ink-soft">{hour.day}</span>
                      <span className="font-medium text-ink">
                        {hour.open && hour.close ? `${hour.open} – ${hour.close}` : '—'}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 rounded-3xl bg-ink p-6 text-white">
                  <p className="text-2xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                    {t('practical.emergencyHours')}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {t('practical.emergencyHoursText')}
                  </p>
                  <a
                    href={`tel:${site.contact.emergencyHref}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-300"
                  >
                    {site.contact.emergency}
                  </a>
                </div>
              </div>

              <div className="rounded-4xl border border-ink-line/70 bg-white p-8 shadow-soft">
                <h3 className="flex items-center gap-3 font-display text-xl text-ink">
                  <FileText className="h-5 w-5 text-gold-500" />
                  {t('practical.documents')}
                </h3>
                <ul className="mt-6 space-y-3">
                  {documents.map((document) => (
                    <li key={document} className="flex items-start gap-3 text-sm text-ink-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                      {document}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-24">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={t('practical.payment')} title={t('practical.payment')} />
            <ul className="mt-8 space-y-3">
              {site.paymentMethods.map((method) => (
                <li
                  key={method.id}
                  className="flex items-center gap-4 rounded-2xl border border-ink-line/70 bg-white px-5 py-4 text-sm text-ink"
                >
                  <CreditCard className="h-4 w-4 text-gold-500" />
                  {method.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading eyebrow={t('practical.insurance')} title={t('practical.insurance')} />
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              {t('practical.insuranceText')}
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {insurances.map((insurance) => (
                <li
                  key={insurance.id}
                  className="flex items-center gap-3 rounded-2xl border border-ink-line/70 bg-white px-4 py-3"
                >
                  <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg bg-ivory">
                    <Image
                      src={insurance.logo}
                      alt=""
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </span>
                  <span className="text-xs font-medium text-ink">{insurance.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={t('practical.faq')} title={t('practical.faq')} />
            <Accordion items={generalFaq} className="mt-10" />
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-4xl bg-ink p-9 text-white">
                <h3 className="font-display text-xl text-white">{t('practical.contact')}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {t('contact.text')}
                </p>
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-400 hover:border-gold-300 hover:text-gold-300"
                >
                  {site.contact.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
