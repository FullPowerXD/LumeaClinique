import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'light';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-500 ease-luxe disabled:cursor-not-allowed disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary:
    'bg-gold-gradient text-white shadow-glow hover:shadow-lift hover:brightness-[1.04] active:scale-[0.99]',
  secondary:
    'bg-ink text-white hover:bg-ink/90 hover:shadow-lift active:scale-[0.99]',
  outline:
    'border border-gold-400/60 text-ink hover:border-gold-500 hover:bg-gold-50 active:scale-[0.99]',
  ghost: 'text-ink hover:bg-ivory hover:text-gold-600',
  light: 'bg-white text-ink hover:bg-ivory shadow-soft'
};

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-[0.8rem]',
  lg: 'px-9 py-4.5 text-[0.82rem]'
};

export function buttonClasses(
  variant: Variant = 'primary',
  size: Size = 'md',
  className?: string
) {
  return cn(base, variants[variant], sizes[size], className);
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

interface ButtonLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  variant?: Variant;
  size?: Size;
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}
