import type { Metadata } from 'next';
import { Clock, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { site } from '@/data/site';

import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/forms/ContactForm';
import PageHero from '@/components/common/PageHero';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: t('title'),
    description: t('text'),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { fr: '/fr/contact', en: '/en/contact', ar: '/ar/contact' }
    }
  };
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  const socials = [
    { key: 'instagram', href: site.social.instagram, icon: Instagram },
    { key: 'facebook', href: site.social.facebook, icon: Instagram },
    { key: 'linkedin', href: site.social.linkedin, icon: Instagram },
    { key: 'youtube', href: site.social.youtube, icon: Instagram },
    { key: 'tiktok', href: site.social.tiktok, icon: Instagram }
  ];

  return (
    <>
      <PageHero
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        text={t('contact.text')}
        image="/images/gallery/reception.svg"
        size="sm"
      >
        <Breadcrumbs
          items={[
            { label: t('nav.home'), href: '/' },
            { label: t('nav.contact') }
          ]}
        />
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-28 space-y-7">
              <div className="rounded-4xl border border-ink-line/70 bg-white p-8 shadow-soft">
                <h2 className="font-display text-xl text-ink">{t('contact.info')}</h2>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    <a
                      href={site.address.mapsUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm leading-relaxed text-ink-soft transition-colors duration-400 hover:text-gold-600"
                    >
                      {site.address.full}
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    <a
                      href={`tel:${site.contact.phoneHref}`}
                      className="text-sm text-ink-soft transition-colors duration-400 hover:text-gold-600"
                    >
                      {site.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    <a
                      href={site.contact.emailHref}
                      className="text-sm text-ink-soft transition-colors duration-400 hover:text-gold-600"
                    >
                      {site.contact.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-4xl border border-ink-line/70 bg-white p-8 shadow-soft">
                <h2 className="flex items-center gap-3 font-display text-xl text-ink">
                  <Clock className="h-5 w-5 text-gold-500" />
                  {t('contact.hours')}
                </h2>
                <ul className="mt-6 divide-y divide-ink-line/60">
                  {site.openingHours.map((hour) => (
                    <li key={hour.day} className="flex items-center justify-between py-3 text-sm">
                      <span className="text-ink-soft">{hour.day}</span>
                      <span className="font-medium text-ink">
                        {hour.open && hour.close ? `${hour.open} – ${hour.close}` : '—'}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-4xl border border-ink-line/70 bg-white p-8 shadow-soft">
                <h2 className="font-display text-xl text-ink">{t('contact.followUs')}</h2>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <li key={social.key}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-line text-ink transition-all duration-400 hover:border-gold-400 hover:text-gold-600"
                        aria-label={social.key}
                      >
                        <social.icon className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="rounded-3xl border border-gold-200 bg-gold-50 px-6 py-5 text-xs leading-relaxed text-gold-700">
                {t('contact.emergencyNote')}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
