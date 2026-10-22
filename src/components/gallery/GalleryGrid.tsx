'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import type { GalleryItem } from '@/types';
import { cn } from '@/lib/utils';

interface GalleryGridProps {
  items: GalleryItem[];
}

const categoryKey: Record<string, string> = {
  Architecture: 'architecture',
  Consultation: 'consultation',
  Technologie: 'technology',
  Chambres: 'rooms',
  Maternité: 'maternity',
  Soins: 'care',
  Équipe: 'team'
};

export default function GalleryGrid({ items }: GalleryGridProps) {
  const t = useTranslations('gallery');

  const categories = useMemo(
    () => Array.from(new Set(items.map((item) => item.category))),
    [items]
  );

  const [active, setActive] = useState('all');

  const visible = active === 'all' ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setActive('all')}
          className={cn(
            'rounded-full border px-6 py-2.5 text-xs font-medium transition-all duration-500 ease-luxe',
            active === 'all'
              ? 'border-gold-400 bg-gold-50 text-gold-700'
              : 'border-ink-line bg-white text-ink-soft hover:border-gold-400 hover:text-gold-600'
          )}
        >
          {t('all')}
        </button>

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              'rounded-full border px-6 py-2.5 text-xs font-medium transition-all duration-500 ease-luxe',
              active === category
                ? 'border-gold-400 bg-gold-50 text-gold-700'
                : 'border-ink-line bg-white text-ink-soft hover:border-gold-400 hover:text-gold-600'
            )}
          >
            {categoryKey[category] ? t(categoryKey[category]) : category}
          </button>
        ))}
      </div>

      <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((item) => (
          <figure
            key={item.id}
            className={cn(
              'group relative overflow-hidden rounded-3xl bg-ivory shadow-soft',
              item.span === 'wide' && 'sm:col-span-2',
              item.span === 'tall' && 'row-span-2'
            )}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-[1.06]"
            />
            <figcaption
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-5 pb-4 pt-10 text-xs font-medium text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            >
              {item.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
