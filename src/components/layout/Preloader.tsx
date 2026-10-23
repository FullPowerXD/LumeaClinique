'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="no-print fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #F8EDD6 0%, #F2E0B6 50%, #F8EDD6 100%)' }}
        >
          {/* ── Floral ornament – top ── */}
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute top-0 inset-x-0 flex justify-center"
          >
            <svg
              width="520"
              height="200"
              viewBox="0 0 520 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* centre bloom */}
              <g transform="translate(260,0)">
                <ellipse cx="0" cy="54" rx="14" ry="38" fill="white" fillOpacity="0.55" transform="rotate(0)" />
                <ellipse cx="0" cy="54" rx="14" ry="38" fill="white" fillOpacity="0.55" transform="rotate(45)" />
                <ellipse cx="0" cy="54" rx="14" ry="38" fill="white" fillOpacity="0.55" transform="rotate(90)" />
                <ellipse cx="0" cy="54" rx="14" ry="38" fill="white" fillOpacity="0.55" transform="rotate(135)" />
                <circle cx="0" cy="0" r="10" fill="white" fillOpacity="0.7" />
              </g>
              {/* left bloom */}
              <g transform="translate(155,10)">
                <ellipse cx="0" cy="40" rx="10" ry="28" fill="white" fillOpacity="0.40" transform="rotate(0)" />
                <ellipse cx="0" cy="40" rx="10" ry="28" fill="white" fillOpacity="0.40" transform="rotate(60)" />
                <ellipse cx="0" cy="40" rx="10" ry="28" fill="white" fillOpacity="0.40" transform="rotate(120)" />
                <circle cx="0" cy="0" r="7" fill="white" fillOpacity="0.55" />
              </g>
              {/* right bloom */}
              <g transform="translate(365,10)">
                <ellipse cx="0" cy="40" rx="10" ry="28" fill="white" fillOpacity="0.40" transform="rotate(0)" />
                <ellipse cx="0" cy="40" rx="10" ry="28" fill="white" fillOpacity="0.40" transform="rotate(60)" />
                <ellipse cx="0" cy="40" rx="10" ry="28" fill="white" fillOpacity="0.40" transform="rotate(120)" />
                <circle cx="0" cy="0" r="7" fill="white" fillOpacity="0.55" />
              </g>
              {/* far-left small bloom */}
              <g transform="translate(68,28)">
                <ellipse cx="0" cy="28" rx="7" ry="20" fill="white" fillOpacity="0.30" transform="rotate(0)" />
                <ellipse cx="0" cy="28" rx="7" ry="20" fill="white" fillOpacity="0.30" transform="rotate(72)" />
                <ellipse cx="0" cy="28" rx="7" ry="20" fill="white" fillOpacity="0.30" transform="rotate(144)" />
                <circle cx="0" cy="0" r="5" fill="white" fillOpacity="0.40" />
              </g>
              {/* far-right small bloom */}
              <g transform="translate(452,28)">
                <ellipse cx="0" cy="28" rx="7" ry="20" fill="white" fillOpacity="0.30" transform="rotate(0)" />
                <ellipse cx="0" cy="28" rx="7" ry="20" fill="white" fillOpacity="0.30" transform="rotate(72)" />
                <ellipse cx="0" cy="28" rx="7" ry="20" fill="white" fillOpacity="0.30" transform="rotate(144)" />
                <circle cx="0" cy="0" r="5" fill="white" fillOpacity="0.40" />
              </g>
              {/* connecting vine */}
              <path
                d="M68 28 Q155 70 260 60 Q365 70 452 28"
                stroke="white"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              {/* small leaf dots along vine */}
              {[110, 170, 210, 260, 310, 350, 410].map((x, i) => (
                <circle key={i} cx={x} cy={64 - Math.abs(x - 260) * 0.04} r="2.5" fill="white" fillOpacity="0.35" />
              ))}
            </svg>
          </motion.div>

          {/* ── Logo + text ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <Image
              src="/logo/lumea-clinique.png"
              alt="Lumea Clinique"
              width={120}
              height={120}
              className="h-[7.5rem] w-[7.5rem] object-contain drop-shadow-md"
              priority
            />


            {/* Gold shimmer line */}
            <span
              className="h-px w-36 overflow-hidden rounded-full"
              style={{ background: 'rgba(176,140,56,0.18)' }}
            >
              <motion.span
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-full w-1/2"
                style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
              />
            </span>
          </motion.div>

          {/* ── Floral ornament – bottom (mirrored) ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute bottom-0 inset-x-0 flex justify-center"
          >
            <svg
              width="520"
              height="200"
              viewBox="0 0 520 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ transform: 'scaleY(-1)' }}
            >
              <g transform="translate(260,0)">
                <ellipse cx="0" cy="54" rx="14" ry="38" fill="white" fillOpacity="0.45" transform="rotate(0)" />
                <ellipse cx="0" cy="54" rx="14" ry="38" fill="white" fillOpacity="0.45" transform="rotate(45)" />
                <ellipse cx="0" cy="54" rx="14" ry="38" fill="white" fillOpacity="0.45" transform="rotate(90)" />
                <ellipse cx="0" cy="54" rx="14" ry="38" fill="white" fillOpacity="0.45" transform="rotate(135)" />
                <circle cx="0" cy="0" r="10" fill="white" fillOpacity="0.6" />
              </g>
              <g transform="translate(155,10)">
                <ellipse cx="0" cy="40" rx="10" ry="28" fill="white" fillOpacity="0.32" transform="rotate(0)" />
                <ellipse cx="0" cy="40" rx="10" ry="28" fill="white" fillOpacity="0.32" transform="rotate(60)" />
                <ellipse cx="0" cy="40" rx="10" ry="28" fill="white" fillOpacity="0.32" transform="rotate(120)" />
                <circle cx="0" cy="0" r="7" fill="white" fillOpacity="0.45" />
              </g>
              <g transform="translate(365,10)">
                <ellipse cx="0" cy="40" rx="10" ry="28" fill="white" fillOpacity="0.32" transform="rotate(0)" />
                <ellipse cx="0" cy="40" rx="10" ry="28" fill="white" fillOpacity="0.32" transform="rotate(60)" />
                <ellipse cx="0" cy="40" rx="10" ry="28" fill="white" fillOpacity="0.32" transform="rotate(120)" />
                <circle cx="0" cy="0" r="7" fill="white" fillOpacity="0.45" />
              </g>
              <g transform="translate(68,28)">
                <ellipse cx="0" cy="28" rx="7" ry="20" fill="white" fillOpacity="0.25" transform="rotate(0)" />
                <ellipse cx="0" cy="28" rx="7" ry="20" fill="white" fillOpacity="0.25" transform="rotate(72)" />
                <ellipse cx="0" cy="28" rx="7" ry="20" fill="white" fillOpacity="0.25" transform="rotate(144)" />
                <circle cx="0" cy="0" r="5" fill="white" fillOpacity="0.35" />
              </g>
              <g transform="translate(452,28)">
                <ellipse cx="0" cy="28" rx="7" ry="20" fill="white" fillOpacity="0.25" transform="rotate(0)" />
                <ellipse cx="0" cy="28" rx="7" ry="20" fill="white" fillOpacity="0.25" transform="rotate(72)" />
                <ellipse cx="0" cy="28" rx="7" ry="20" fill="white" fillOpacity="0.25" transform="rotate(144)" />
                <circle cx="0" cy="0" r="5" fill="white" fillOpacity="0.35" />
              </g>
              <path
                d="M68 28 Q155 70 260 60 Q365 70 452 28"
                stroke="white"
                strokeOpacity="0.30"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              {[110, 170, 210, 260, 310, 350, 410].map((x, i) => (
                <circle key={i} cx={x} cy={64 - Math.abs(x - 260) * 0.04} r="2.5" fill="white" fillOpacity="0.30" />
              ))}
            </svg>
          </motion.div>

          {/* ── Subtle corner petals ── */}
          {[
            { top: '6%', left: '4%', rotate: '-20deg', size: 48, op: 0.18 },
            { top: '6%', right: '4%', rotate: '20deg', size: 48, op: 0.18 },
            { bottom: '6%', left: '4%', rotate: '20deg', size: 42, op: 0.14 },
            { bottom: '6%', right: '4%', rotate: '-20deg', size: 42, op: 0.14 }
          ].map((pos, i) => (
            <motion.svg
              key={i}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: pos.op, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              width={pos.size}
              height={pos.size}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="pointer-events-none absolute"
              style={{ top: (pos as any).top, left: (pos as any).left, right: (pos as any).right, bottom: (pos as any).bottom, transform: `rotate(${pos.rotate})` }}
            >
              <ellipse cx="24" cy="38" rx="8" ry="20" fill="white" />
              <ellipse cx="24" cy="38" rx="8" ry="20" fill="white" transform="rotate(72 24 24)" />
              <ellipse cx="24" cy="38" rx="8" ry="20" fill="white" transform="rotate(144 24 24)" />
              <ellipse cx="24" cy="38" rx="8" ry="20" fill="white" transform="rotate(216 24 24)" />
              <ellipse cx="24" cy="38" rx="8" ry="20" fill="white" transform="rotate(288 24 24)" />
              <circle cx="24" cy="24" r="5" fill="white" />
            </motion.svg>
          ))}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
