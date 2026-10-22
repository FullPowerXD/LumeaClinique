import { useTranslations } from 'next-intl';

import { site } from '@/data/site';

export default function StatsBar() {
  const t = useTranslations();

  return (
    <section className="border-y border-ink-line/60 bg-ivory">
      <div className="container-luxe">
        <dl className="grid grid-cols-2 divide-ink-line/60 lg:grid-cols-4 lg:divide-x lg:divide-y-0 rtl:lg:divide-x-reverse">
          {site.stats.map((stat) => (
            <div key={stat.id} className="px-4 py-9 text-center lg:px-8">
              <dt className="sr-only">{t(stat.labelKey)}</dt>
              <dd>
                <span className="block font-display text-4xl font-light text-ink md:text-5xl">
                  {stat.value.toLocaleString('fr-FR')}
                  <span className="text-gold-500">{stat.suffix}</span>
                </span>
                <span className="mt-2 block text-2xs font-semibold uppercase tracking-[0.22em] text-ink-soft">
                  {t(stat.labelKey)}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
