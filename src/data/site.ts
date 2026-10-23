import type { OpeningHour, PaymentMethod } from '@/types';

/**
 * Central configuration for the clinic.
 * Replace the placeholder values with the real ones before going live.
 */
export const site = {
  name: 'LUMEA CLINIQUE',
  shortName: 'LUMEA',
  legalName: 'Lumea Clinique SARL',
  baseline: "L'excellence médicale, sublimée par la lumière",
  description:
    "Lumea Clinique est une clinique privée de médecine, de chirurgie et d'esthétique, pensée comme un écrin : lumière naturelle, matériel de pointe et praticiens sélectionnés.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.lumea-clinique.com',

  contact: {
    phone: '+216 71 000 000',
    phoneHref: '+21671000000',
    emergency: '+216 71 000 001',
    emergencyHref: '+21671000001',
    whatsapp: '+216 71 000 002',
    whatsappHref: '21671000002',
    email: 'bonjour@lumea-clinique.com',
    emailHref: 'mailto:bonjour@lumea-clinique.com',
    vipEmail: 'vip@lumea-clinique.com',
    vipEmailHref: 'mailto:vip@lumea-clinique.com'
  },

  address: {
    street: '12, avenue de la Lumière, Les Berges du Lac',
    city: 'Tunis',
    region: 'Tunis',
    postalCode: '1052',
    country: 'Tunisie',
    countryCode: 'TN',
    full: '12, avenue de la Lumière, Les Berges du Lac 1052, Tunis, Tunisie',
    lat: 36.8499,
    lng: 10.2389,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=36.8499,10.2389',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=36.8499,10.2389&travelmode=driving'
  },

  social: {
    instagram: 'https://instagram.com/lumeaclinique',
    facebook: 'https://facebook.com/lumeaclinique',
    linkedin: 'https://linkedin.com/company/lumeaclinique',
    youtube: 'https://youtube.com/@lumeaclinique',
    tiktok: 'https://tiktok.com/@lumeaclinique'
  },

  openingHours: [
    { day: 'Lundi', short: 'Lun.', open: '08:00', close: '19:00' },
    { day: 'Mardi', short: 'Mar.', open: '08:00', close: '19:00' },
    { day: 'Mercredi', short: 'Mer.', open: '08:00', close: '19:00' },
    { day: 'Jeudi', short: 'Jeu.', open: '08:00', close: '19:00' },
    { day: 'Vendredi', short: 'Ven.', open: '08:00', close: '18:00' },
    { day: 'Samedi', short: 'Sam.', open: '09:00', close: '14:00' },
    { day: 'Dimanche', short: 'Dim.', open: null, close: null }
  ] as OpeningHour[],

  emergencyHours: [
    { day: 'Urgences', short: '24/7', open: null, close: null, alwaysOpen: true }
  ] as OpeningHour[],

  paymentMethods: [
    { id: 'cash', label: 'Espèces', icon: 'banknote' },
    { id: 'visa', label: 'Visa', icon: 'credit-card' },
    { id: 'mastercard', label: 'Mastercard', icon: 'credit-card' },
    { id: 'amex', label: 'American Express', icon: 'credit-card' },
    { id: 'transfer', label: 'Virement bancaire', icon: 'landmark' },
    { id: 'cheque', label: 'Chèque', icon: 'file-text' },
    { id: 'insurance', label: 'Tiers payant', icon: 'shield-check' }
  ] as PaymentMethod[],

  stats: [
    { id: 'years', value: 18, suffix: '', labelKey: 'home.stats.years' },
    { id: 'practitioners', value: 32, suffix: '', labelKey: 'home.stats.practitioners' },
    { id: 'patients', value: 48000, suffix: '+', labelKey: 'home.stats.patients' },
    { id: 'procedures', value: 12000, suffix: '+', labelKey: 'home.stats.procedures' }
  ],

  whyItems: [
    { id: 'hygiene', icon: 'sparkles', titleKey: 'home.why.items.1', textKey: 'home.why.items.1' },
    { id: 'equipment', icon: 'scan-line', titleKey: 'home.why.items.2', textKey: 'home.why.items.2' },
    { id: 'team', icon: 'user-round-check', titleKey: 'home.why.items.3', textKey: 'home.why.items.3' },
    { id: 'vip', icon: 'gem', titleKey: 'home.why.items.4', textKey: 'home.why.items.4' }
  ],

  navigation: [
    { id: 'departments', href: '/departements', labelKey: 'nav.departments', mega: true },
    { id: 'practitioners', href: '/praticiens', labelKey: 'nav.practitioners', mega: true },
    { id: 'vip', href: '/vip', labelKey: 'nav.vip' },
    { id: 'practical', href: '/infos-pratiques', labelKey: 'nav.practical', mega: true },
    { id: 'about', href: '/a-propos', labelKey: 'nav.about' },
    { id: 'gallery', href: '/galerie', labelKey: 'nav.gallery' },
    { id: 'contact', href: '/contact', labelKey: 'nav.contact' }
  ]
} as const;

export const globalStats = site.stats;
export const whyItems = site.whyItems;
export const paymentMethods = site.paymentMethods;
