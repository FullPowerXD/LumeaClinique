import { Gem, ScanLine, Sparkles, UserRoundCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { site } from '@/data/site';

import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const icons = {
  sparkles: Sparkles,
  'scan-line': ScanLine,
  'user-round-check': UserRoundCheck,
  gem: Gem
} as const;

export default function WhyLumea() {
  const t = useTranslations();

  const items = ['1', '2', '3', '4'] as const;
  const iconKeys = ['sparkles', 'scan-line', 'user-round-check', 'gem'] as const;

  return (
    <section id="philosophie" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-champagne/40 blur-3xl"
      />

      <div className="container-luxe relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow={t('home.why.eyebrow')}
              title={t('home.why.title')}
            />

            <ul className="mt-10 space-y-6">
              {items.map((key, index) => {
                const Icon = icons[iconKeys[index]];

                return (
                  <Reveal key={key} delay={index * 0.08}>
                    <li className="flex gap-5">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="pt-3 text-[0.95rem] leading-[1.85] text-ink-soft">
                        {t(`home.why.items.${key}`)}
                      </p>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-5xl shadow-lift">
              <img
                src="/images/gallery/consultation.svg"
                alt=""
                className="h-full w-full object-cover"
                width={900}
                height={1100}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="font-display text-2xl text-white">{site.baseline}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
