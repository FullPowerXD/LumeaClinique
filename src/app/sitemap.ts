import type { MetadataRoute } from 'next';

import { blogPosts } from '@/data/blog';
import { departments } from '@/data/departments';
import { practitioners } from '@/data/practitioners';
import { routing } from '@/i18n/routing';
import { site } from '@/data/site';

const staticRoutes = [
  '',
  '/departements',
  '/praticiens',
  '/vip',
  '/infos-pratiques',
  '/rendez-vous',
  '/a-propos',
  '/galerie',
  '/journal',
  '/questions-frequentes',
  '/contact',
  '/mentions-legales',
  '/confidentialite',
  '/cookies',
  '/conditions'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${site.url}/${locale}${route}`,
        lastModified,
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route === '/departements' ? 0.9 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((candidate) => [
              candidate,
              `${site.url}/${candidate}${route}`
            ])
          )
        }
      });
    }

    for (const department of departments) {
      entries.push({
        url: `${site.url}/${locale}/departements/${department.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((candidate) => [
              candidate,
              `${site.url}/${candidate}/departements/${department.slug}`
            ])
          )
        }
      });
    }

    for (const practitioner of practitioners) {
      entries.push({
        url: `${site.url}/${locale}/praticiens/${practitioner.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((candidate) => [
              candidate,
              `${site.url}/${candidate}/praticiens/${practitioner.slug}`
            ])
          )
        }
      });
    }

    for (const post of blogPosts) {
      entries.push({
        url: `${site.url}/${locale}/journal/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'yearly',
        priority: 0.5,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((candidate) => [
              candidate,
              `${site.url}/${candidate}/journal/${post.slug}`
            ])
          )
        }
      });
    }
  }

  return entries;
}
