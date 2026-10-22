import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { site } from '@/data/site';
import { Link } from '@/i18n/navigation';

export default function CtaBanner() {
  const t = useTranslations();

  return (
    <section className="relative isolate overflow-hidden bg-ivory py-24 lg:py-28">
      <Image
        src="/images/gallery/couloir.svg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-20"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ivory/70" />

      <div className="container-luxe">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Lumea Clinique</p>
          <h2 className="mt-5 font-display text-display-sm text-ink">
            {t('home.cta.title')}
          </h2>
          <p className="body-luxe mx-auto mt-6 max-w-xl text-lg">{t('home.cta.text')}</p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/rendez-vous"
              className="inline-flex items-center rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-500 ease-luxe hover:shadow-lift"
            >
              {t('home.cta.primary')}
            </Link>
            <a
              href={`tel:${site.contact.phoneHref}`}
              dir="ltr"
              className="inline-flex items-center rounded-full border border-ink-line bg-white px-8 py-4 text-sm font-medium text-ink transition-all duration-500 ease-luxe hover:border-gold-400 hover:text-gold-600"
            >
              {t('home.cta.secondary')} — {site.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
