'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Calendar, Phone } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { site } from '@/data/site';
import { Link } from '@/i18n/navigation';

export default function Hero() {
  const t = useTranslations();

  const dust = [
    { left: '12%', delay: '0s', size: 6 },
    { left: '28%', delay: '1.4s', size: 4 },
    { left: '46%', delay: '2.6s', size: 7 },
    { left: '63%', delay: '0.8s', size: 5 },
    { left: '78%', delay: '3.2s', size: 4 },
    { left: '88%', delay: '1.9s', size: 6 }
  ];

  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-ink">
      <Image
        src="/images/gallery/hall.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-45"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/90"
      />

      {dust.map((particle, index) => (
        <span
          key={index}
          aria-hidden
          className="pointer-events-none absolute -z-10 h-1.5 w-1.5 rounded-full bg-gold-200/70 animate-gold-dust"
          style={{
            left: particle.left,
            bottom: '18%',
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay
          }}
        />
      ))}

      <div className="container-luxe relative py-28">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 text-2xs font-semibold uppercase tracking-[0.32em] text-gold-200"
          >
            <span className="h-px w-10 bg-gold-300/70" />
            {t('home.hero.eyebrow')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-display text-display-lg font-light text-white"
          >
            {t('home.hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/75"
          >
            {t('home.hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-11 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-2.5 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-500 ease-luxe hover:shadow-lift"
            >
              <Calendar className="h-4 w-4" />
              {t('home.hero.primaryCta')}
            </Link>

            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all duration-500 ease-luxe hover:border-white/70 hover:bg-white/5"
            >
              {t('home.hero.secondaryCta')}
            </Link>

            <a
              href={`tel:${site.contact.emergencyHref}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-gold-200"
            >
              <Phone className="h-4 w-4" />
              <span dir="ltr">{site.contact.emergency}</span>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#philosophie"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-gold-200 lg:flex"
      >
        {t('home.hero.scrollHint')}
        <ArrowDown className="h-4 w-4 animate-soft-float" />
      </motion.a>
    </section>
  );
}
