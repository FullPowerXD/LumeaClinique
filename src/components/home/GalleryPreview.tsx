import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { gallery } from '@/data/gallery';
import { Link } from '@/i18n/navigation';

import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function GalleryPreview() {
  const t = useTranslations();
  const items = gallery.slice(0, 6);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-luxe">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={t('home.gallery.eyebrow')}
            title={t('home.gallery.title')}
          />
          <Reveal className="shrink-0">
            <Link href="/galerie" className="link-underline uppercase tracking-[0.18em]">
              {t('home.gallery.cta')}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal
              key={item.id}
              delay={(index % 4) * 0.07}
              className={
                index === 0 ? 'col-span-2 row-span-2 lg:col-span-2' : 'col-span-1'
              }
            >
              <figure className="group relative h-56 overflow-hidden rounded-3xl lg:h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 text-sm text-white opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
