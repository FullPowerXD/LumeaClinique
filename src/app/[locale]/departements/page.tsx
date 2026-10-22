import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Phone } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { departments } from '@/data/departments';
import { getPractitionersByDepartment } from '@/data/practitioners';
import { site } from '@/data/site';
import { Link } from '@/i18n/navigation';

import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'departments' });

  return {
    title: t('title'),
    description: t('text'),
    alternates: {
      canonical: `/${locale}/departements`,
      languages: { fr: '/fr/departements', en: '/en/departements', ar: '/ar/departements' }
    }
  };
}

export default async function DepartmentsPage({
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
        eyebrow={t('departments.eyebrow')}
        title={t('departments.title')}
        text={t('departments.text')}
        image="/images/departments/urgences.svg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/rendez-vous"
            className="inline-flex items-center rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-500 ease-luxe hover:shadow-lift"
          >
            {t('common.bookAppointment')}
          </Link>
          <a
            href={`tel:${site.contact.emergencyHref}`}
            className="inline-flex items-center gap-2 rounded-full border border-ink-line bg-white px-8 py-4 text-sm font-medium text-ink transition-all duration-500 ease-luxe hover:border-gold-400 hover:text-gold-600"
          >
            <Phone className="h-4 w-4" />
            {t('departments.emergencyCta')}
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-luxe space-y-20 lg:space-y-28">
          {departments.map((department) => {
            const team = getPractitionersByDepartment(department.slug);

            return (
              <article
                key={department.slug}
                className="grid gap-10 lg:grid-cols-12 lg:gap-14"
              >
                <div className="lg:col-span-5">
                  <Reveal>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-4xl shadow-soft">
                      <Image
                        src={department.image}
                        alt={department.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>
                </div>

                <div className="lg:col-span-7">
                  <Reveal delay={0.1}>
                    <p className="eyebrow">{department.shortName}</p>
                    <h2 className="mt-4 font-display text-display-sm text-ink">
                      {department.name}
                    </h2>
                    <p className="body-luxe mt-5 text-lg">{department.intro}</p>

                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {department.procedures.slice(0, 4).map((procedure) => (
                        <li
                          key={procedure.slug}
                          className="rounded-2xl border border-ink-line/70 bg-ivory/50 px-5 py-4 text-sm text-ink"
                        >
                          <span className="block font-medium">{procedure.name}</span>
                          <span className="mt-1 block text-xs text-ink-soft">
                            {procedure.duration}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-9 flex flex-wrap items-center gap-5">
                      <Link
                        href={`/departements/${department.slug}`}
                        className="link-underline uppercase tracking-[0.18em]"
                      >
                        {t('common.discover')}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      <span className="text-xs text-ink-mute">
                        {department.procedures.length}{' '}
                        {t('departments.procedures').toLowerCase()}
                      </span>
                    </div>
                  </Reveal>

                  {team.length > 0 ? (
                    <Reveal delay={0.18}>
                      <div className="mt-10 border-t border-ink-line/70 pt-8">
                        <p className="text-2xs font-semibold uppercase tracking-[0.24em] text-gold-600">
                          {t('departments.team')}
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-3">
                          {team.map((practitioner) => (
                            <li key={practitioner.id}>
                              <Link
                                href={`/praticiens/${practitioner.slug}`}
                                className="inline-flex items-center gap-2 rounded-full border border-ink-line/70 bg-white px-4 py-2 text-xs text-ink transition-colors duration-400 hover:border-gold-400 hover:text-gold-600"
                              >
                                {practitioner.name}
                                <span className="text-ink-mute">— {practitioner.role}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-24">
        <div className="container-luxe">
          <SectionHeading
            align="center"
            eyebrow={t('home.cta.title')}
            title={t('departments.allDepartments')}
            text={t('departments.text')}
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {departments.map((department) => (
              <Link
                key={department.slug}
                href={`/departements/${department.slug}`}
                className="rounded-full border border-ink-line bg-white px-6 py-3 text-sm text-ink transition-all duration-500 ease-luxe hover:border-gold-400 hover:text-gold-600"
              >
                {department.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
