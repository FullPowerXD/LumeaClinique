'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Clock, Globe, Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { Link, usePathname } from '@/i18n/navigation';
import { departments } from '@/data/departments';
import { practitioners } from '@/data/practitioners';
import { site } from '@/data/site';
import { routing, type Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

import Logo from '@/components/common/Logo';

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isHome = pathname === '/';
  const solid = scrolled || !isHome || mobileOpen;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-luxe',
        solid
          ? 'border-b border-ink-line/60 bg-white/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="container-luxe">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" aria-label="Lumea Clinique" className="shrink-0">
            <Logo variant={solid ? 'dark' : 'light'} priority />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 xl:flex" aria-label={t('nav.menu')}>
            {site.navigation.map((item) => {
              const isMega = 'mega' in item && item.mega;
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => isMega && setOpenMenu(item.id)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[0.78rem] font-medium tracking-wide transition-colors duration-300',
                      solid
                        ? active
                          ? 'text-gold-600'
                          : 'text-ink hover:text-gold-600'
                        : 'text-white/90 hover:text-gold-100'
                    )}
                  >
                    {t(item.labelKey)}
                    {isMega ? (
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-500',
                          openMenu === item.id && 'rotate-180'
                        )}
                      />
                    ) : null}
                  </Link>

                  <AnimatePresence>
                    {isMega && openMenu === item.id ? (
                      <MegaMenu id={item.id} onClose={() => setOpenMenu(null)} />
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher solid={solid} />

            <a
              href={`tel:${site.contact.emergencyHref}`}
              className={cn(
                'hidden items-center gap-2 rounded-full border px-4 py-2.5 text-[0.72rem] font-semibold tracking-wide transition-colors duration-300 lg:inline-flex',
                solid
                  ? 'border-ink-line text-ink hover:border-gold-400 hover:text-gold-600'
                  : 'border-white/40 text-white hover:border-white/70'
              )}
            >
              <Phone className="h-3.5 w-3.5" />
              {site.contact.emergency}
            </a>

            <Link
              href="/rendez-vous"
              className={cn(
                'hidden rounded-full px-6 py-3 text-[0.75rem] font-semibold tracking-wide transition-all duration-500 ease-luxe sm:inline-flex',
                solid
                  ? 'bg-gold-gradient text-white shadow-glow hover:shadow-lift'
                  : 'bg-white text-ink hover:bg-champagne'
              )}
            >
              {t('common.bookAppointment')}
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              aria-expanded={mobileOpen}
              className={cn(
                'inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 xl:hidden',
                solid
                  ? 'border-ink-line text-ink'
                  : 'border-white/40 text-white'
              )}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink-line/60 bg-white xl:hidden"
          >
            <div className="container-luxe max-h-[80vh] overflow-y-auto py-6">
              <nav className="flex flex-col" aria-label={t('nav.menu')}>
                {site.navigation.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="border-b border-ink-line/50 py-4 font-display text-xl text-ink transition-colors hover:text-gold-600"
                  >
                    {t(item.labelKey)}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/rendez-vous"
                  className="rounded-full bg-gold-gradient px-7 py-4 text-center text-sm font-semibold text-white"
                >
                  {t('common.bookAppointment')}
                </Link>
                <a
                  href={`tel:${site.contact.emergencyHref}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-line px-7 py-4 text-sm font-medium text-ink"
                >
                  <Phone className="h-4 w-4" />
                  {site.contact.emergency}
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function MegaMenu({ id, onClose }: { id: string; onClose: () => void }) {
  const t = useTranslations();

  if (id === 'departments') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-full z-50 w-[46rem] -translate-x-1/2 pt-4"
        onMouseLeave={onClose}
      >
        <div className="rounded-4xl border border-ink-line/70 bg-white p-8 shadow-lift">
          <div className="grid grid-cols-2 gap-4">
            {departments.map((dept) => (
              <Link
                key={dept.slug}
                href={`/departements/${dept.slug}`}
                className="group rounded-3xl border border-ink-line/60 p-5 transition-all duration-500 ease-luxe hover:border-gold-300 hover:bg-gold-50"
              >
                <span className="font-display text-lg text-ink group-hover:text-gold-600">
                  {dept.name}
                </span>
                <span className="mt-1.5 block text-xs leading-relaxed text-ink-soft">
                  {dept.tagline}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-ink-line/60 pt-5">
            <p className="text-xs text-ink-soft">{t('departments.allDepartments')}</p>
            <Link
              href="/departements"
              className="link-underline text-xs font-semibold uppercase tracking-[0.18em]"
            >
              {t('common.viewAll')}
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  if (id === 'practitioners') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-full z-50 w-[42rem] -translate-x-1/2 pt-4"
        onMouseLeave={onClose}
      >
        <div className="rounded-4xl border border-ink-line/70 bg-white p-8 shadow-lift">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
            {practitioners.slice(0, 10).map((p) => (
              <li key={p.id}>
                <Link
                  href={`/praticiens/${p.slug}`}
                  className="flex flex-col border-b border-ink-line/40 py-3 transition-colors hover:text-gold-600"
                >
                  <span className="text-sm font-medium text-ink">{p.name}</span>
                  <span className="text-xs text-ink-soft">{p.role}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-ink-line/60 pt-5">
            <Link
              href="/praticiens"
              className="link-underline text-xs font-semibold uppercase tracking-[0.18em]"
            >
              {t('common.viewAll')}
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="absolute right-0 top-full z-50 w-80 pt-4"
      onMouseLeave={onClose}
    >
      <div className="rounded-4xl border border-ink-line/70 bg-white p-7 shadow-lift">
        <ul className="flex flex-col gap-4 text-sm text-ink-soft">
          <li className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
            <span>{t('practical.openingHours')}</span>
          </li>
          <li className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
            <span dir="ltr">{site.contact.phone}</span>
          </li>
          <li className="flex items-start gap-3">
            <Globe className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
            <span>{site.address.full}</span>
          </li>
        </ul>
        <Link
          href="/infos-pratiques"
          className="link-underline mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.18em]"
        >
          {t('common.learnMore')}
        </Link>
      </div>
    </motion.div>
  );
}

function LanguageSwitcher({ solid }: { solid: boolean }) {
  const t = useTranslations();
  const pathname = usePathname();
  const activeLocale = useLocale() as Locale;
  const [open, setOpen] = useState(false);
  const current = activeLocale;

  return (
    <div className="relative hidden sm:block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t('nav.switchLanguage')}
        aria-expanded={open}
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-full border text-[0.62rem] font-semibold tracking-widest transition-colors duration-300',
          solid
            ? 'border-ink-line text-ink hover:border-gold-400 hover:text-gold-600'
            : 'border-white/40 text-white hover:border-white/70'
        )}
      >
        {current.toUpperCase()}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 top-12 z-50 w-40 overflow-hidden rounded-2xl border border-ink-line/70 bg-white py-1 shadow-lift"
          >
            {routing.locales.map((locale: Locale) => (
              <li key={locale}>
                <Link
                  href={pathname}
                  locale={locale}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 text-xs text-ink transition-colors hover:bg-ivory hover:text-gold-600"
                >
                  <span>{localeMetaLabel(locale)}</span>
                  <span className="text-[0.6rem] tracking-widest text-ink-mute">
                    {locale.toUpperCase()}
                  </span>
                </Link>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function localeMetaLabel(locale: Locale): string {
  const labels: Record<Locale, string> = {
    fr: 'Français',
    en: 'English',
    ar: 'العربية'
  };
  return labels[locale];
}
