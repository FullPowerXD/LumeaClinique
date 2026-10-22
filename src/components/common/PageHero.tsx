import Image from 'next/image';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  text?: string;
  image?: string;
  children?: ReactNode;
  className?: string;
  size?: 'sm' | 'md';
}

export default function PageHero({
  eyebrow,
  title,
  text,
  image = '/images/gallery/hall.svg',
  children,
  className,
  size = 'md'
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden bg-ivory',
        size === 'sm' ? 'pb-16 pt-32 md:pb-20 md:pt-40' : 'pb-20 pt-36 md:pb-28 md:pt-48',
        className
      )}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white/85 via-ivory/90 to-ivory"
      />

      <div className="container-luxe">
        <div className="max-w-3xl">
          {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
          <h1 className="text-display-md">{title}</h1>
          {text ? <p className="body-luxe mt-7 max-w-2xl text-lg">{text}</p> : null}
          {children ? <div className="mt-9">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
