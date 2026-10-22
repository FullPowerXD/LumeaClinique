import type { Metadata } from 'next';
import { AlertTriangle, Phone } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { site } from '@/data/site';

import AppointmentForm from '@/components/forms/AppointmentForm';
import PageHero from '@/components/common/PageHero';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'appointment' });

  return {
    title: t('title'),
    description: t('text'),
    alternates: {
      canonical: `/${locale}/rendez-vous`,
      languages: { fr: '/fr/rendez-vous', en: '/en/rendez-vous', ar: '/ar/rendez-vous' }
    }
  };
}

export default async function AppointmentPage({
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
        eyebrow={t('appointment.eyebrow')}
        title={t('appointment.title')}
        text={t('appointment.text')}
        image="/images/gallery/reception.svg"
        size="sm"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <AppointmentForm />
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-7">
              <div className="rounded-4xl border border-gold-200 bg-gold-50 p-8">
                <AlertTriangle className="h-8 w-8 text-gold-500" />
                <p className="mt-5 text-sm leading-relaxed text-gold-700">
                  {t('appointment.urgentNote')}
                </p>
                <a
                  href={`tel:${site.contact.emergencyHref}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-400 hover:text-gold-700"
                >
                  <Phone className="h-4 w-4" />
                  {site.contact.emergency}
                </a>
              </div>

              <div className="rounded-4xl border border-ink-line/70 bg-ivory/50 p-8">
                <h2 className="font-display text-xl text-ink">{t('common.schedule')}</h2>
                <ul className="mt-5 divide-y divide-ink-line/60">
                  {site.openingHours.map((hour) => (
                    <li
                      key={hour.day}
                      className="flex items-center justify-between py-3 text-sm"
                    >
                      <span className="text-ink-soft">{hour.day}</span>
                      <span className="font-medium text-ink">
                        {hour.open && hour.close ? `${hour.open} – ${hour.close}` : '—'}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
