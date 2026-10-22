import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, Phone } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { departments } from '@/data/departments';
import { getPractitionersByDepartment } from '@/data/practitioners';
import { site } from '@/data/site';
import { Link } from '@/i18n/navigation';

import Accordion from '@/components/common/Accordion';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import PageHero from '@/components/common/PageHero';
import PractitionerCard from '@/components/practitioners/PractitionerCard';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export function generateStaticParams() {
  return departments.map((department) => ({ slug: department.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const department = departments.find((d) => d.slug === slug);

  if (!department) {
    return {};
  }

  return {
    title: department.name,
    description: department.intro,
    alternates: {
      canonical: `/${locale}/departements/${slug}`,
      languages: {
        fr: `/fr/departements/${slug}`,
        en: `/en/departements/${slug}`,
        ar: `/ar/departements/${slug}`
      }
    },
    openGraph: {
      title: department.name,
      description: department.intro,
      images: [{ url: department.image }]
    }
  };
}

export default async function DepartmentDetailPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const department = departments.find((d) => d.slug === slug);

  if (!department) {
    notFound();
  }

  const t = await getTranslations();
  const team = getPractitionersByDepartment(department.slug);
  const others = departments.filter((d) => d.slug !== department.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: `${department.name} — ${site.name}`,
    description: department.intro,
    medicalSpecialty: department.name,
    image: `${site.url}${department.image}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode
    },
    telephone: site.contact.phone,
    availableService: department.procedures.map((procedure) => ({
      '@type': 'MedicalProcedure',
      name: procedure.name,
      description: procedure.description
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow={department.shortName}
        title={department.name}
        text={department.tagline}
        image={department.image}
      >
        <div className="mb-2">
          <Breadcrumbs
            items={[
              { label: t('nav.home'), href: '/' },
              { label: t('nav.departments'), href: '/departements' },
              { label: department.name }
            ]}
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/rendez-vous"
            className="inline-flex items-center rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-500 ease-luxe hover:shadow-lift"
          >
            {t('common.bookAppointment')}
          </Link>
          {department.emergency ? (
            <a
              href={`tel:${site.contact.emergencyHref}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-white px-8 py-4 text-sm font-medium text-ink transition-all duration-500 ease-luxe hover:border-gold-400 hover:text-gold-600"
            >
              <Phone className="h-4 w-4" />
              {t('departments.emergencyCta')}
            </a>
          ) : null}
        </div>
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={t('departments.philosophy')} title={department.name} />

            <div className="mt-7 space-y-5">
              {department.philosophy.map((paragraph) => (
                <p key={paragraph} className="body-luxe text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="mt-14 font-display text-2xl text-ink">
              {t('departments.procedures')}
            </h2>
            <ul className="mt-7 space-y-4">
              {department.procedures.map((procedure) => (
                <li
                  key={procedure.slug}
                  className="rounded-3xl border border-ink-line/70 bg-ivory/50 p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg text-ink">{procedure.name}</h3>
                    <span className="text-xs text-gold-600">{procedure.duration}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {procedure.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-28 space-y-8">
              <div className="rounded-4xl border border-ink-line/70 bg-white p-8 shadow-soft">
                <h2 className="font-display text-xl text-ink">
                  {t('departments.equipment')}
                </h2>
                <ul className="mt-6 space-y-5">
                  {department.equipment.map((item) => (
                    <li key={item.slug} className="flex gap-4">
                      <span className="relative mt-1 h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-ivory">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-ink">{item.name}</span>
                        <span className="mt-1 block text-xs leading-relaxed text-ink-soft">
                          {item.description}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-4xl bg-ink p-8 text-white">
                <h2 className="font-display text-xl text-white">
                  {t('departments.journey')}
                </h2>
                <ol className="mt-6 space-y-5">
                  {department.journey.map((step, index) => (
                    <li key={step.step} className="flex gap-4">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-400/40 text-xs font-semibold text-gold-300">
                        {index + 1}
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-white">
                          {step.title}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-white/60">
                          {step.description}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {team.length > 0 ? (
        <section className="bg-ivory py-20 lg:py-24">
          <div className="container-luxe">
            <SectionHeading
              eyebrow={t('departments.team')}
              title={t('departments.team')}
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((practitioner, index) => (
                <Reveal key={practitioner.id} delay={(index % 4) * 0.07}>
                  <PractitionerCard practitioner={practitioner} compact className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-20 lg:py-24">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={t('departments.faq')} title={t('departments.faq')} />
            <Accordion items={department.faq} className="mt-10" />
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-4xl bg-gold-50 p-9">
              <CheckCircle2 className="h-9 w-9 text-gold-500" />
              <h3 className="mt-6 font-display text-xl text-ink">
                {t('home.cta.title')}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {t('home.cta.text')}
              </p>
              <Link
                href="/rendez-vous"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-white transition-all duration-500 ease-luxe hover:shadow-glow"
              >
                {t('common.bookAppointment')}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-line/70 bg-ivory py-16">
        <div className="container-luxe">
          <p className="text-2xs font-semibold uppercase tracking-[0.24em] text-gold-600">
            {t('departments.relatedDepartments')}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/departements/${other.slug}`}
                className="rounded-full border border-ink-line bg-white px-6 py-3 text-sm text-ink transition-all duration-500 ease-luxe hover:border-gold-400 hover:text-gold-600"
              >
                {other.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
