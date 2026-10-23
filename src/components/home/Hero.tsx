'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

export default function Hero() {
  const t = useTranslations();

  return (
    <section
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #F8EDD6 0%, #F0DCA8 40%, #F5E8CC 70%, #FAF0DC 100%)' }}
    >
      {/* ── Floral ornament – top-right ── */}
      <div className="pointer-events-none absolute right-0 top-0 z-0" aria-hidden>
        <svg width="560" height="340" viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* large centre bloom */}
          <g transform="translate(420, 40)">
            <ellipse cx="0" cy="70" rx="20" ry="56" fill="white" fillOpacity="0.55" transform="rotate(0)"/>
            <ellipse cx="0" cy="70" rx="20" ry="56" fill="white" fillOpacity="0.55" transform="rotate(45)"/>
            <ellipse cx="0" cy="70" rx="20" ry="56" fill="white" fillOpacity="0.55" transform="rotate(90)"/>
            <ellipse cx="0" cy="70" rx="20" ry="56" fill="white" fillOpacity="0.55" transform="rotate(135)"/>
            <circle cx="0" cy="0" r="14" fill="white" fillOpacity="0.75"/>
          </g>
          {/* medium bloom left */}
          <g transform="translate(270, 20)">
            <ellipse cx="0" cy="52" rx="14" ry="38" fill="white" fillOpacity="0.42" transform="rotate(0)"/>
            <ellipse cx="0" cy="52" rx="14" ry="38" fill="white" fillOpacity="0.42" transform="rotate(60)"/>
            <ellipse cx="0" cy="52" rx="14" ry="38" fill="white" fillOpacity="0.42" transform="rotate(120)"/>
            <circle cx="0" cy="0" r="9" fill="white" fillOpacity="0.55"/>
          </g>
          {/* medium bloom far right */}
          <g transform="translate(540, 110)">
            <ellipse cx="0" cy="46" rx="12" ry="34" fill="white" fillOpacity="0.38" transform="rotate(0)"/>
            <ellipse cx="0" cy="46" rx="12" ry="34" fill="white" fillOpacity="0.38" transform="rotate(60)"/>
            <ellipse cx="0" cy="46" rx="12" ry="34" fill="white" fillOpacity="0.38" transform="rotate(120)"/>
            <circle cx="0" cy="0" r="8" fill="white" fillOpacity="0.50"/>
          </g>
          {/* small bloom */}
          <g transform="translate(350, 140)">
            <ellipse cx="0" cy="34" rx="9" ry="24" fill="white" fillOpacity="0.30" transform="rotate(0)"/>
            <ellipse cx="0" cy="34" rx="9" ry="24" fill="white" fillOpacity="0.30" transform="rotate(72)"/>
            <ellipse cx="0" cy="34" rx="9" ry="24" fill="white" fillOpacity="0.30" transform="rotate(144)"/>
            <circle cx="0" cy="0" r="6" fill="white" fillOpacity="0.42"/>
          </g>
          {/* tiny accent */}
          <g transform="translate(480, 190)">
            <ellipse cx="0" cy="24" rx="6" ry="16" fill="white" fillOpacity="0.22" transform="rotate(0)"/>
            <ellipse cx="0" cy="24" rx="6" ry="16" fill="white" fillOpacity="0.22" transform="rotate(72)"/>
            <ellipse cx="0" cy="24" rx="6" ry="16" fill="white" fillOpacity="0.22" transform="rotate(144)"/>
            <circle cx="0" cy="0" r="4" fill="white" fillOpacity="0.32"/>
          </g>
          {/* vine connecting blooms */}
          <path d="M270 20 Q350 80 420 40 Q480 10 540 110" stroke="white" strokeOpacity="0.28" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
          <path d="M350 140 Q400 160 480 190" stroke="white" strokeOpacity="0.22" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
          {/* petal dots */}
          {[300, 360, 410, 460].map((x, i) => (
            <circle key={i} cx={x} cy={40 + i * 18} r="3" fill="white" fillOpacity="0.28"/>
          ))}
        </svg>
      </div>

      {/* ── Floral ornament – bottom-left ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-0" aria-hidden>
        <svg width="380" height="260" viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(60, 220)">
            <ellipse cx="0" cy="56" rx="16" ry="44" fill="white" fillOpacity="0.40" transform="rotate(0)"/>
            <ellipse cx="0" cy="56" rx="16" ry="44" fill="white" fillOpacity="0.40" transform="rotate(45)"/>
            <ellipse cx="0" cy="56" rx="16" ry="44" fill="white" fillOpacity="0.40" transform="rotate(90)"/>
            <ellipse cx="0" cy="56" rx="16" ry="44" fill="white" fillOpacity="0.40" transform="rotate(135)"/>
            <circle cx="0" cy="0" r="11" fill="white" fillOpacity="0.55"/>
          </g>
          <g transform="translate(180, 240)">
            <ellipse cx="0" cy="42" rx="11" ry="30" fill="white" fillOpacity="0.30" transform="rotate(0)"/>
            <ellipse cx="0" cy="42" rx="11" ry="30" fill="white" fillOpacity="0.30" transform="rotate(60)"/>
            <ellipse cx="0" cy="42" rx="11" ry="30" fill="white" fillOpacity="0.30" transform="rotate(120)"/>
            <circle cx="0" cy="0" r="7" fill="white" fillOpacity="0.42"/>
          </g>
          <g transform="translate(10, 180)">
            <ellipse cx="0" cy="30" rx="8" ry="22" fill="white" fillOpacity="0.25" transform="rotate(0)"/>
            <ellipse cx="0" cy="30" rx="8" ry="22" fill="white" fillOpacity="0.25" transform="rotate(72)"/>
            <ellipse cx="0" cy="30" rx="8" ry="22" fill="white" fillOpacity="0.25" transform="rotate(144)"/>
            <circle cx="0" cy="0" r="5" fill="white" fillOpacity="0.35"/>
          </g>
          <path d="M10 180 Q60 200 60 220 Q120 240 180 240" stroke="white" strokeOpacity="0.22" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ── Subtle gold radial glow ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 78% 30%, rgba(255,255,255,0.45) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(212,175,55,0.12) 0%, transparent 70%)'
        }}
      />

      {/* ── Content ── */}
      <div className="container-luxe relative z-10 py-28">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 text-2xs font-semibold uppercase tracking-[0.32em]"
            style={{ color: '#9C7A1E' }}
          >
            <span className="h-px w-10" style={{ background: '#C9A227' }} />
            {t('home.hero.eyebrow')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-display text-display-lg font-light"
            style={{ color: '#2C2010' }}
          >
            {t('home.hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl text-lg leading-relaxed"
            style={{ color: '#5A4020' }}
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
              className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-medium transition-all duration-500 ease-luxe"
              style={{
                border: '1px solid rgba(180,140,50,0.45)',
                color: '#7A5C18',
                background: 'rgba(255,255,255,0.55)'
              }}
            >
              {t('home.hero.secondaryCta')}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.a
        href="#philosophie"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] uppercase tracking-[0.3em] transition-colors lg:flex"
        style={{ color: 'rgba(140,100,30,0.55)' }}
      >
        {t('home.hero.scrollHint')}
        <ArrowDown className="h-4 w-4 animate-soft-float" style={{ color: '#C9A227' }} />
      </motion.a>
    </section>
  );
}
