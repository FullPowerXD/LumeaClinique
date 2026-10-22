import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2';
}

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'left',
  className,
  as: Tag = 'h2'
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow ? (
        <p className="eyebrow mb-4 flex items-center gap-3">
          {align === 'center' ? null : <span className="gold-rule" />}
          {eyebrow}
        </p>
      ) : null}

      <Tag className="section-title">{title}</Tag>

      {text ? <p className="body-luxe mt-6">{text}</p> : null}
    </div>
  );
}
