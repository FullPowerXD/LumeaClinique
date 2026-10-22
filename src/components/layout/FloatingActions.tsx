'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, MessageCircle, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import { site } from '@/data/site';
import { Link } from '@/i18n/navigation';

export default function FloatingActions() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="no-print fixed bottom-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2.5"
          >
            <FloatingLink
              href={`tel:${site.contact.emergencyHref}`}
              label={t('common.emergencyCall')}
              Icon={Phone}
            />
            <FloatingLink
              href={`https://wa.me/${site.contact.whatsappHref}`}
              label="WhatsApp"
              Icon={MessageCircle}
              external
            />
            <FloatingLink href="/rendez-vous" label={t('common.bookAppointment')} Icon={Calendar} />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t('common.bookAppointment')}
        aria-expanded={open}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-white shadow-glow transition-all duration-500 ease-luxe hover:shadow-lift"
      >
        {open ? <X className="h-5 w-5" /> : <Calendar className="h-5 w-5" />}
      </button>

      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 rounded-full bg-gold-400/40 animate-pulse-ring ${
          visible ? '' : 'hidden'
        }`}
      />
    </div>
  );
}

function FloatingLink({
  href,
  label,
  Icon,
  external
}: {
  href: string;
  label: string;
  Icon: typeof Phone;
  external?: boolean;
}) {
  const className =
    'inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-3 text-xs font-medium text-ink shadow-lift transition-transform duration-400 hover:-translate-y-0.5';

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        <Icon className="h-4 w-4 text-gold-500" />
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <Icon className="h-4 w-4 text-gold-500" />
      {label}
    </Link>
  );
}
