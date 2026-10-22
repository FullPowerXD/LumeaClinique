'use client';

import { useTranslations } from 'next-intl';

export default function LocaleError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('error');

  return (
    <section className="flex min-h-[70vh] items-center bg-ivory py-24">
      <div className="container-luxe text-center">
        <p className="font-display text-7xl text-gold-400">500</p>
        <h1 className="mt-6 text-display-sm text-ink">{t('title')}</h1>
        <p className="body-luxe mx-auto mt-5 max-w-xl text-lg">{t('text')}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-500 ease-luxe hover:shadow-lift"
          >
            {t('retry')}
          </button>
        </div>

        {error.digest ? (
          <p className="mt-8 text-xs text-ink-mute">Réf. {error.digest}</p>
        ) : null}
      </div>
    </section>
  );
}
