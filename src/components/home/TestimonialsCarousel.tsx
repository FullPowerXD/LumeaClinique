'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { testimonials } from '@/data/testimonials';

export default function TestimonialsCarousel() {
  const t = useTranslations();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const active = testimonials[index];

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-ink py-24 text-white lg:py-32">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold-300">{t('home.testimonials.eyebrow')}</p>
          <h2 className="mt-4 font-display text-display-sm text-white">
            {t('home.testimonials.title')}
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-2">
            <Quote className="h-12 w-12 text-gold-400/40" />
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={active.id}
                initial={{ opacity: 0, x: direction * 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -32 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <blockquote className="mt-7 font-display text-2xl font-light leading-[1.6] text-white/90 md:text-[1.75rem]">
                  « {active.quote} »
                </blockquote>

                <figcaption className="mt-9 flex items-center gap-4">
                  <span className="relative h-12 w-12 overflow-hidden rounded-full bg-champagne">
                    <Image
                      src={active.avatar}
                      alt=""
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-white">{active.name}</span>
                    <span className="block text-xs text-white/50">
                      {active.role} · {active.service}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3 lg:col-span-2 lg:flex-col lg:items-end lg:justify-end">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label={t('common.previous')}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-400 hover:border-gold-400 hover:text-gold-300"
              >
                <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label={t('common.next')}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-400 hover:border-gold-400 hover:text-gold-300"
              >
                <ChevronRight className="h-4 w-4 rtl:rotate-180" />
              </button>
            </div>

            <div className="flex gap-1.5">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={item.name}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? 'w-8 bg-gold-400' : 'w-1.5 bg-white/25'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
