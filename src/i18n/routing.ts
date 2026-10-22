import { defineRouting } from 'next-intl/routing';

export const locales = ['fr', 'en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

export const rtlLocales: Locale[] = ['ar'];

export const localeMeta: Record<Locale, { label: string; dir: 'ltr' | 'rtl'; htmlLang: string; flag: string }> = {
  fr: { label: 'Français', dir: 'ltr', htmlLang: 'fr', flag: 'FR' },
  en: { label: 'English', dir: 'ltr', htmlLang: 'en', flag: 'EN' },
  ar: { label: 'العربية', dir: 'rtl', htmlLang: 'ar', flag: 'AR' }
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true
});

export function isRtl(locale: string): boolean {
  return rtlLocales.includes(locale as Locale);
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

export function getDirection(locale: string): 'ltr' | 'rtl' {
  return isRtl(locale) ? 'rtl' : 'ltr';
}
