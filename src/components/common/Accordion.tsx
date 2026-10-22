'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

import type { FaqItem } from '@/types';
import { cn } from '@/lib/utils';

interface AccordionProps {
  items: FaqItem[];
  defaultOpen?: number | null;
  className?: string;
}

export default function Accordion({ items, defaultOpen = null, className }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={cn('divide-y divide-ink-line/70 border-y border-ink-line/70', className)}>
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-6 text-start transition-colors duration-300 hover:text-gold-600"
            >
              <span className="font-display text-lg leading-snug text-ink md:text-xl">
                {item.question}
              </span>
              <span
                className={cn(
                  'mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-line text-ink transition-all duration-500 ease-luxe',
                  isOpen && 'rotate-45 border-gold-400 bg-gold-50 text-gold-600'
                )}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-7 pe-12 text-[0.95rem] leading-[1.85] text-ink-soft">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
