import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { getFeaturedPractitioners } from '@/data/practitioners';
import { Link } from '@/i18n/navigation';

import PractitionerCard from '@/components/practitioners/PractitionerCard';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function PractitionersShowcase() {
  const t = useTranslations();
  const practitioners = getFeaturedPractitioners(6);

  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="container-luxe">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={t('home.practitioners.eyebrow')}
            title={t('home.practitioners.title')}
            text={t('home.practitioners.text')}
          />
          <Reveal className="shrink-0">
            <Link href="/praticiens" className="link-underline uppercase tracking-[0.18em]">
              {t('home.practitioners.cta')}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practitioners.map((practitioner, index) => (
            <Reveal key={practitioner.id} delay={(index % 3) * 0.08}>
              <PractitionerCard practitioner={practitioner} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
