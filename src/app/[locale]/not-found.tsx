import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';

export default async function NotFound() {
  const t = await getTranslations();

  return (
    <section className="flex min-h-[70vh] items-center bg-ivory py-24">
      <div className="container-luxe text-center">
        <p className="font-display text-7xl text-gold-400">404</p>
        <h1 className="mt-6 text-display-sm text-ink">{t('notFound.title')}</h1>
        <p className="body-luxe mx-auto mt-5 max-w-xl text-lg">{t('notFound.text')}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-500 ease-luxe hover:shadow-lift"
          >
            {t('notFound.backHome')}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-ink-line bg-white px-8 py-4 text-sm font-medium text-ink transition-all duration-500 ease-luxe hover:border-gold-400 hover:text-gold-600"
          >
            {t('notFound.contact')}
          </Link>
        </div>
      </div>
    </section>
  );
}
