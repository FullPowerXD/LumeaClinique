import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, CalendarDays, Clock, GraduationCap, Languages, Stethoscope } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { departments } from '@/data/departments';
import { getPractitioner, practitioners } from '@/data/practitioners';
import { site } from '@/data/site';
import { Link } from '@/i18n/navigation';

import Breadcrumbs from '@/components/common/Breadcrumbs';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export function generateStaticParams() {
  return practitioners.map((practitioner) => ({ slug: practitioner.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const practitioner = getPractitioner(slug);

  if (!practitioner) {
    return {};
  }

  return {
    title: `${practitioner.name} — ${practitioner.role}`,
    description: practitioner.shortBio,
    alternates: {
      canonical: `/${locale}/praticiens/${slug}`,
      languages: {
        fr: `/fr/praticiens/${slug}`,
        en: `/en/praticiens/${slug}`,
        ar: `/ar/praticiens/${slug}`
      }
    },
    openGraph: {
      title: practitioner.name,
      description: practitioner.shortBio,
      images: [{ url: practitioner.photo }]
    }
  };
}

const languageLabels: Record<string, string> = {
  fr: 'Français',
  en: 'English',
  ar: 'العربية',
  it: 'Italiano',
  de: 'Deutsch',
  es: 'Español',
  ru: 'Русский',
  tr: 'Türkçe',
  pt: 'Português',
  zh: '中文'
};

export default async function PractitionerProfilePage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const practitioner = getPractitioner(slug);

  if (!practitioner) {
    notFound();
  }

  const t = await getTranslations();
  const department = departments.find((d) => d.slug === practitioner.departmentSlug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: practitioner.name,
    jobTitle: practitioner.role,
    description: practitioner.shortBio,
    image: `${site.url}${practitioner.photo}`,
    medicalSpecialty: practitioner.specialties,
    worksFor: {
      '@type': 'MedicalClinic',
      name: site.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        postalCode: site.address.postalCode,
        addressCountry: site.address.countryCode
      },
      telephone: site.contact.phone
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-ivory pb-20 pt-32 md:pb-24 md:pt-40">
        <div className="container-luxe">
          <Breadcrumbs
            items={[
              { label: t('nav.home'), href: '/' },
              { label: t('nav.practitioners'), href: '/praticiens' },
              { label: practitioner.name }
            ]}
          />

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-lift">
                  <Image
                    src={practitioner.photo}
                    alt={practitioner.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    style={{ objectPosition: practitioner.photoPosition }}
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <p className="eyebrow">{practitioner.title}</p>
                <h1 className="mt-4 text-display-sm text-ink">{practitioner.name}</h1>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-gold-600">
                  {practitioner.role}
                </p>

                <p className="body-luxe mt-7 text-lg">{practitioner.shortBio}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {practitioner.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="rounded-full border border-gold-200 bg-gold-50 px-4 py-1.5 text-xs text-gold-700"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <dl className="mt-9 grid gap-6 border-y border-ink-line/70 py-7 sm:grid-cols-3">
                  <div>
                    <dt className="flex items-center gap-2 text-2xs font-semibold uppercase tracking-[0.2em] text-ink-mute">
                      <Stethoscope className="h-3.5 w-3.5" />
                      {t('practitioners.experience')}
                    </dt>
                    <dd className="mt-2 font-display text-lg text-ink">
                      {practitioner.yearsOfPractice} ans
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-2xs font-semibold uppercase tracking-[0.2em] text-ink-mute">
                      <Languages className="h-3.5 w-3.5" />
                      {t('practitioners.languages')}
                    </dt>
                    <dd className="mt-2 text-sm text-ink">
                      {practitioner.languages
                        .map((item) => languageLabels[item] ?? item)
                        .join(' · ')}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-2xs font-semibold uppercase tracking-[0.2em] text-ink-mute">
                      <Clock className="h-3.5 w-3.5" />
                      {t('practitioners.availability')}
                    </dt>
                    <dd className="mt-2 text-sm text-ink">
                      {t(`practitioners.availabilityLabels.${practitioner.availability}`)}
                    </dd>
                  </div>
                </dl>

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <Link
                    href="/rendez-vous"
                    className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-500 ease-luxe hover:shadow-lift"
                  >
                    {t('common.bookAppointment')}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  {department ? (
                    <Link
                      href={`/departements/${department.slug}`}
                      className="link-underline uppercase tracking-[0.18em]"
                    >
                      {department.name}
                    </Link>
                  ) : null}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={t('nav.practitioners')} title={practitioner.name} />

            <div className="mt-7 space-y-5">
              {practitioner.bio.map((paragraph) => (
                <p key={paragraph} className="body-luxe text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="mt-14 font-display text-2xl text-ink">
              {t('practitioners.education')}
            </h2>
            <ul className="mt-7 space-y-6 border-s border-ink-line/70 ps-7">
              {practitioner.education.map((entry) => (
                <li key={`${entry.year}-${entry.title}`} className="relative">
                  <span
                    aria-hidden
                    className="absolute -start-[2.2rem] top-2 h-2.5 w-2.5 rounded-full bg-gold-400"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                    {entry.year}
                  </p>
                  <p className="mt-1.5 font-display text-lg text-ink">{entry.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{entry.institution}</p>
                </li>
              ))}
            </ul>

            <h2 className="mt-14 font-display text-2xl text-ink">
              {t('practitioners.procedures')}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {practitioner.procedures.map((procedure) => (
                <li
                  key={procedure}
                  className="rounded-2xl border border-ink-line/70 bg-ivory/60 px-4 py-2 text-sm text-ink"
                >
                  {procedure}
                </li>
              ))}
            </ul>

            {practitioner.memberships.length > 0 ? (
              <>
                <h2 className="mt-14 font-display text-2xl text-ink">
                  {t('practitioners.memberships')}
                </h2>
                <ul className="mt-6 space-y-2">
                  {practitioner.memberships.map((membership) => (
                    <li key={membership} className="flex items-center gap-3 text-sm text-ink-soft">
                      <GraduationCap className="h-4 w-4 text-gold-500" />
                      {membership}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-28 space-y-8">
              <div className="rounded-4xl border border-ink-line/70 bg-white p-8 shadow-soft">
                <h2 className="flex items-center gap-3 font-display text-xl text-ink">
                  <CalendarDays className="h-5 w-5 text-gold-500" />
                  {t('practitioners.consultations')}
                </h2>
                <ul className="mt-6 divide-y divide-ink-line/60">
                  {practitioner.consultations.map((slot) => (
                    <li
                      key={slot.day}
                      className="flex items-center justify-between py-4 text-sm"
                    >
                      <span className="font-medium text-ink">{slot.day}</span>
                      <span className="text-ink-soft">{slot.hours}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/rendez-vous"
                  className="mt-7 block rounded-full bg-gold-gradient px-7 py-4 text-center text-sm font-semibold text-white transition-all duration-500 ease-luxe hover:shadow-glow"
                >
                  {t('practitioners.bookWith')} {practitioner.name}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
