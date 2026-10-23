import Image from 'next/image';
import { Languages, Stethoscope } from 'lucide-react';

import type { Practitioner } from '@/types';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

const languageLabels: Record<string, string> = {
  fr: 'FR',
  en: 'EN',
  ar: 'AR',
  it: 'IT',
  de: 'DE',
  es: 'ES',
  ru: 'RU',
  tr: 'TR',
  pt: 'PT',
  zh: 'ZH'
};

interface PractitionerCardProps {
  practitioner: Practitioner;
  className?: string;
  compact?: boolean;
}

export default function PractitionerCard({
  practitioner,
  className,
  compact = false
}: PractitionerCardProps) {

  return (
    <Link
      href={`/praticiens/${practitioner.slug}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-4xl border border-ink-line/70 bg-white shadow-soft transition-all duration-700 ease-luxe hover:-translate-y-1 hover:shadow-lift',
        className
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
        <Image
          src={practitioner.photo}
          alt={practitioner.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectPosition: practitioner.photoPosition }}
          className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-[1.05]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-ink transition-colors duration-400 group-hover:text-gold-600">
          {practitioner.name}
        </h3>
        <p className="mt-1.5 text-xs text-gold-600">{practitioner.role}</p>

        {!compact ? (
          <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ink-soft">
            {practitioner.shortBio}
          </p>
        ) : null}

        <div className="mt-auto flex items-center gap-4 pt-5 text-[0.68rem] text-ink-mute">
          <span className="inline-flex items-center gap-1.5">
            <Stethoscope className="h-3.5 w-3.5" />
            {practitioner.specialties[0]}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Languages className="h-3.5 w-3.5" />
            {practitioner.languages.map((l) => languageLabels[l] ?? l).join(' · ')}
          </span>
        </div>
      </div>
    </Link>
  );
}
