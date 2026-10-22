'use client';

import { ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function NewsletterForm() {
  const t = useTranslations();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    setEmail('');
  };

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-gold-500/10 blur-3xl"
      />

      <div className="container-luxe relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-display-sm text-white">
              {t('home.newsletter.title')}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
              {t('home.newsletter.text')}
            </p>
          </div>

          <div>
            {sent ? (
              <p className="inline-flex items-center gap-3 rounded-3xl border border-gold-400/30 bg-white/5 px-7 py-6 text-sm text-gold-200">
                <Check className="h-5 w-5" />
                {t('common.success')}
              </p>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="newsletter-email" className="sr-only">
                    {t('home.newsletter.placeholder')}
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={t('home.newsletter.placeholder')}
                    className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-white/40 focus:border-gold-400"
                  />
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-white transition-all duration-500 ease-luxe hover:shadow-glow"
                  >
                    {t('home.newsletter.button')}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </button>
                </div>
                <p className="text-xs leading-relaxed text-white/45">
                  {t('home.newsletter.consent')}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
