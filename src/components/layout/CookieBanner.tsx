'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

const STORAGE_KEY = 'lumea-cookie-consent';

export default function CookieBanner() {
  const t = useTranslations();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const timer = window.setTimeout(() => setVisible(true), 1200);
        return () => window.clearTimeout(timer);
      }
    } catch {
      /* storage unavailable — keep the banner hidden */
    }
  }, []);

  const decide = (value: 'accepted' | 'rejected' | 'settings') => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-live="polite"
          className="no-print fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-4xl border border-ink-line/70 bg-white/95 p-6 shadow-lift backdrop-blur-xl sm:inset-x-6"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-600">
              <Cookie className="h-5 w-5" />
            </span>

            <div className="flex-1">
              <h2 className="font-display text-lg text-ink">{t('cookieBanner.title')}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {t('cookieBanner.text')}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => decide('accepted')}
              className="rounded-full bg-gold-gradient px-6 py-3 text-xs font-semibold text-white transition-all duration-400 hover:shadow-glow"
            >
              {t('cookieBanner.accept')}
            </button>
            <button
              type="button"
              onClick={() => decide('rejected')}
              className="rounded-full border border-ink-line px-6 py-3 text-xs font-semibold text-ink transition-colors duration-400 hover:border-gold-400 hover:text-gold-600"
            >
              {t('cookieBanner.reject')}
            </button>
            <button
              type="button"
              onClick={() => decide('settings')}
              className="px-3 py-3 text-xs font-medium text-ink-soft underline-offset-4 transition-colors hover:text-gold-600 hover:underline"
            >
              {t('cookieBanner.settings')}
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
