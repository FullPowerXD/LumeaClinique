import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';

import { isLocale, routing } from '@/i18n/routing';
import { site } from '@/data/site';
import criticalFonts from '@/styles/font-preload.json';

import '../globals.css';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/layout/FloatingActions';
import CookieBanner from '@/components/layout/CookieBanner';
import Preloader from '@/components/layout/Preloader';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: site.name,
      template: `%s — ${site.name}`
    },
    description: site.description,
    applicationName: site.name,
    keywords: [
      'clinique privée Tunis',
      'maternité Tunis',
      'urgences 24h',
      'chirurgie ambulatoire',
      'imagerie médicale',
      'médecine esthétique'
    ],
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: '/fr',
        en: '/en',
        ar: '/ar'
      }
    },
    openGraph: {
      type: 'website',
      locale: 'fr_TN',
      alternateLocale: ['en_US', 'ar_TN'],
      url: site.url,
      siteName: site.name,
      title: site.name,
      description: site.description
    },
    twitter: {
      card: 'summary_large_image',
      title: site.name,
      description: site.description
    },
    icons: {
      icon: '/icon.svg',
      apple: '/icon.svg'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    category: 'health'
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#D4AF37',
  colorScheme: 'light'
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations();
  const messages = await getMessages();
  const isArabic = locale === 'ar';

  return (
    <html lang={locale} dir={isArabic ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        {criticalFonts.map((file) => (
          <link
            key={file}
            rel="preload"
            href={`/fonts/${file}`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}
      </head>
      <body className="min-h-screen bg-white font-sans text-ink">
        <NextIntlClientProvider messages={messages}>
          <Preloader />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-white"
          >
            {t('common.skipToContent')}
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingActions />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
