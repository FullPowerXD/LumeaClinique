import type { Config } from 'tailwindcss';

/**
 * LUMEA CLINIQUE — Design tokens
 * White-first luxury healthcare. Gold is an accent, never a field.
 */
const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/data/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2.5rem', xl: '3.5rem' },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1440px' }
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        ivory: '#FBF7F0',
        champagne: '#F4E9D8',
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FBF5E3',
          100: '#F5D77A',
          200: '#EBCB6A',
          300: '#D4AF37',
          400: '#C09A28',
          500: '#9C7A1E',
          600: '#84641A',
          700: '#6B4F14',
          800: '#523B0E',
          900: '#3A2A09'
        },
        ink: {
          DEFAULT: '#2B2B2B',
          soft: '#6B6B6B',
          mute: '#9A9A9A',
          line: '#E8E2D8'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Montserrat', 'Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.18em' }],
        'display-sm': ['clamp(1.75rem, 1.2rem + 2.2vw, 2.75rem)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2.25rem, 1.4rem + 3.4vw, 4rem)', { lineHeight: '1.06', letterSpacing: '-0.015em' }],
        'display-lg': ['clamp(2.75rem, 1.5rem + 5vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }]
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem'
      },
      boxShadow: {
        soft: '0 2px 24px -8px rgba(43, 43, 43, 0.10)',
        lift: '0 18px 48px -18px rgba(43, 43, 43, 0.16)',
        glow: '0 0 0 1px rgba(212, 175, 55, 0.28), 0 16px 40px -18px rgba(212, 175, 55, 0.45)',
        inset: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.7)'
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #EBCB6A 0%, #D4AF37 45%, #B58F26 100%)',
        'gold-soft': 'linear-gradient(135deg, #FBF5E3 0%, #F5D77A 100%)',
        'ivory-fade': 'linear-gradient(180deg, #FFFFFF 0%, #FBF7F0 100%)',
        'sheen': 'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.55) 45%, transparent 70%)'
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(0.82) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.12) rotate(45deg)' }
        },
        'gold-dust': {
          '0%': { opacity: '0', transform: 'translateY(0) scale(0.6)' },
          '20%': { opacity: '0.85' },
          '100%': { opacity: '0', transform: 'translateY(-90px) scale(1)' }
        },
        'soft-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'sheen-sweep': {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' }
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.7' },
          '70%': { transform: 'scale(1.35)', opacity: '0' },
          '100%': { transform: 'scale(1.35)', opacity: '0' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'star-twinkle': 'star-twinkle 3.2s ease-in-out infinite',
        'gold-dust': 'gold-dust 6s ease-in-out infinite',
        'soft-float': 'soft-float 7s ease-in-out infinite',
        'sheen-sweep': 'sheen-sweep 2.4s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.24, 0, 0.38, 1) infinite'
      }
    }
  },
  plugins: []
};

export default config;
