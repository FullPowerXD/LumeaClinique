import Image from 'next/image';

import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  withWordmark?: boolean;
  priority?: boolean;
}

export default function Logo({
  variant = 'dark',
  className,
  withWordmark = true,
  priority = false
}: LogoProps) {
  const isLight = variant === 'light';

  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center">
        <Image
          src={isLight ? '/logo/lumea-mark-light.svg' : '/logo/lumea-mark.svg'}
          alt="Lumea Clinique"
          width={44}
          height={44}
          priority={priority}
          className="h-11 w-11"
        />
      </span>

      {withWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display text-[1.35rem] font-medium tracking-[0.16em]',
              isLight ? 'text-white' : 'text-ink'
            )}
          >
            LUMEA
          </span>
          <span
            className={cn(
              'mt-1 text-[0.58rem] font-medium uppercase tracking-[0.42em]',
              isLight ? 'text-white/70' : 'text-gold-600'
            )}
          >
            Clinique
          </span>
        </span>
      ) : null}
    </span>
  );
}
