export type LanguageCode =
  | 'fr'
  | 'en'
  | 'ar'
  | 'it'
  | 'de'
  | 'es'
  | 'ru'
  | 'tr'
  | 'pt'
  | 'zh';

export type Gender = 'femme' | 'homme';

export type Availability = 'disponible' | 'limite' | 'complet';

export interface TimelineEntry {
  year: string;
  title: string;
  institution: string;
}

export interface Practitioner {
  id: string;
  slug: string;
  name: string;
  title: string;
  role: string;
  departmentSlug: string;
  specialties: string[];
  languages: LanguageCode[];
  gender: Gender;
  photo: string;
  photoPosition?: string;
  shortBio: string;
  bio: string[];
  education: TimelineEntry[];
  experience: TimelineEntry[];
  procedures: string[];
  memberships: string[];
  consultations: { day: string; hours: string }[];
  availability: Availability;
  yearsOfPractice: number;
  order: number;
}

export interface DepartmentProcedure {
  slug: string;
  name: string;
  description: string;
  duration: string;
  icon: string;
}

export interface Equipment {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Department {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  image: string;
  tagline: string;
  intro: string;
  philosophy: string[];
  procedures: DepartmentProcedure[];
  equipment: Equipment[];
  journey: JourneyStep[];
  faq: FaqItem[];
  emergency: boolean;
  accent: string;
  order: number;
}

export interface Insurance {
  id: string;
  slug: string;
  name: string;
  type: 'mutuelle' | 'assurance';
  country: string;
  coverage: string;
  logo: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country?: string;
  role: string;
  rating: number;
  quote: string;
  service: string;
  avatar: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  author: string;
  image: string;
  content: string[];
}

export interface Hotel {
  slug: string;
  name: string;
  category: string;
  distance: string;
  image: string;
  description: string;
  perks: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  span: string;
}

export interface PaymentMethod {
  id: string;
  label: string;
  icon: string;
}

export interface OpeningHour {
  day: string;
  short: string;
  open: string | null;
  close: string | null;
  alwaysOpen?: boolean;
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  href: string;
}
