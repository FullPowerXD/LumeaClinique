import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { departments } from '@/data/departments';
import { Link } from '@/i18n/navigation';

import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function DepartmentsGrid() {
  const t = useTranslations();

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-luxe">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={t('home.departments.eyebrow')}
            title={t('home.departments.title')}
            text={t('home.departments.text')}
          />
          <Reveal className="shrink-0">
            <Link href="/departements" className="link-underline uppercase tracking-[0.18em]">
              {t('home.departments.cta')}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {departments.map((department, index) => (
            <Reveal key={department.slug} delay={index * 0.08}>
              <Link
                href={`/departements/${department.slug}`}
                className="group relative block h-[26rem] overflow-hidden rounded-4xl shadow-soft transition-all duration-700 ease-luxe hover:shadow-lift"
              >
                <Image
                  src={department.image}
                  alt={department.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.4s] ease-luxe group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-2xs font-semibold uppercase tracking-[0.28em] text-gold-200">
                    {department.shortName}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-light text-white">
                    {department.name}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
                    {department.tagline}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-200">
                    {t('common.discover')}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
