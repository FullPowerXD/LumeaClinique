import { ChevronRight } from 'lucide-react';

import { Link } from '@/i18n/navigation';

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="no-print">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-soft">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors duration-300 hover:text-gold-600"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gold-600">{item.label}</span>
            )}
            {index < items.length - 1 ? (
              <ChevronRight className="h-3 w-3 text-ink-mute rtl:rotate-180" />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
