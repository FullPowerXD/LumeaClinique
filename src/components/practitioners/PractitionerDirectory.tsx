'use client';

import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import type { Practitioner } from '@/types';
import { departments } from '@/data/departments';
import { allLanguages, allSpecialties } from '@/data/practitioners';
import { cn } from '@/lib/utils';

import PractitionerCard from './PractitionerCard';

interface PractitionerDirectoryProps {
  practitioners: Practitioner[];
}

export default function PractitionerDirectory({
  practitioners
}: PractitionerDirectoryProps) {
  const t = useTranslations('practitioners');
  const tc = useTranslations('common');

  const [query, setQuery] = useState('');
  const [specialty, setSpecialty] = useState('all');
  const [department, setDepartment] = useState('all');
  const [language, setLanguage] = useState('all');

  const languageLabels: Record<string, string> = {
    fr: 'Français',
    en: 'English',
    ar: 'العربية',
    it: 'Italiano',
    de: 'Deutsch',
    es: 'Español',
    ru: 'Русский',
    tr: 'Türkçe',
    pt: 'Português',
    zh: '中文'
  };

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return practitioners.filter((practitioner) => {
      const matchesQuery =
        needle.length === 0 ||
        practitioner.name.toLowerCase().includes(needle) ||
        practitioner.role.toLowerCase().includes(needle) ||
        practitioner.specialties.some((item) => item.toLowerCase().includes(needle));

      const matchesSpecialty =
        specialty === 'all' || practitioner.specialties.includes(specialty);
      const matchesDepartment =
        department === 'all' || practitioner.departmentSlug === department;
      const matchesLanguage =
        language === 'all' || practitioner.languages.includes(language as never);

      return matchesQuery && matchesSpecialty && matchesDepartment && matchesLanguage;
    });
  }, [practitioners, query, specialty, department, language]);

  const hasFilters =
    query.length > 0 ||
    specialty !== 'all' ||
    department !== 'all' ||
    language !== 'all';

  const reset = () => {
    setQuery('');
    setSpecialty('all');
    setDepartment('all');
    setLanguage('all');
  };

  const selectClass =
    'w-full appearance-none rounded-2xl border border-ink-line bg-white px-5 py-3.5 text-sm text-ink outline-none transition-colors duration-400 focus:border-gold-400';

  return (
    <div>
      <div className="rounded-4xl border border-ink-line/70 bg-ivory/60 p-6 md:p-8">
        <div className="flex items-center gap-2 text-2xs font-semibold uppercase tracking-[0.24em] text-gold-600">
          <SlidersHorizontal className="h-4 w-4" />
          {t('filterSpecialty')}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative lg:col-span-1">
            <Search
              aria-hidden
              className="pointer-events-none absolute start-5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-mute"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={tc('searchPlaceholder')}
              className="w-full rounded-2xl border border-ink-line bg-white py-3.5 pe-5 ps-12 text-sm text-ink outline-none transition-colors duration-400 focus:border-gold-400"
              aria-label={tc('searchPlaceholder')}
            />
          </div>

          <select
            value={specialty}
            onChange={(event) => setSpecialty(event.target.value)}
            className={selectClass}
            aria-label={t('filterSpecialty')}
          >
            <option value="all">{t('filterAll')}</option>
            {allSpecialties.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            className={selectClass}
            aria-label={t('filterDepartment')}
          >
            <option value="all">{t('filterAllDepartments')}</option>
            {departments.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>

          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            className={selectClass}
            aria-label={t('filterLanguage')}
          >
            <option value="all">{t('filterAllLanguages')}</option>
            {allLanguages.map((item) => (
              <option key={item} value={item}>
                {languageLabels[item] ?? item}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink-line/70 pt-5">
          <p className="text-sm text-ink-soft">
            <span className="font-semibold text-ink">{filtered.length}</span>{' '}
            {t('results')}
          </p>

          {hasFilters ? (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600 transition-colors duration-400 hover:text-gold-700"
            >
              <X className="h-3.5 w-3.5" />
              {t('resetFilters')}
            </button>
          ) : null}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((practitioner) => (
            <PractitionerCard
              key={practitioner.id}
              practitioner={practitioner}
              className="h-full"
            />
          ))}
        </div>
      ) : (
        <div
          className={cn(
            'mt-12 rounded-4xl border border-dashed border-ink-line bg-ivory/40 p-16 text-center'
          )}
        >
          <p className="font-display text-xl text-ink">{tc('noResults')}</p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600"
          >
            {t('resetFilters')}
          </button>
        </div>
      )}
    </div>
  );
}
