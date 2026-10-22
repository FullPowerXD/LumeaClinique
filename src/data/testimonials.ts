import type { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 't01',
    name: 'Sarah M.',
    country: 'Tunis',
    role: 'Mère de famille',
    rating: 5,
    quote:
      "Toute l'équipe nous a accueillis avec une douceur rare. Ma sage-femme nous a expliqué chaque étape, et le retour à la maison s'est fait dans un calme absolu. Je me suis sentie accompagnée, jamais seule.",
    service: 'Maternité',
    avatar: '/images/testimonials/avatar-01.svg'
  },
  {
    id: 't02',
    name: 'Karim T.',
    country: 'Sousse',
    role: 'Cadre dirigeant',
    rating: 5,
    quote:
      "J'ai choisi Lumea pour la discrétion et la précision. Consultations et accueil rapides, comptes rendus clairs, et une équipe qui appelle pour donner des nouvelles. Rien n'est laissé au hasard.",
    service: 'Chirurgie',
    avatar: '/images/testimonials/avatar-02.svg'
  },
  {
    id: 't03',
    name: 'Amel B.',
    country: 'Tunis',
    role: 'Enseignante',
    rating: 5,
    quote:
      "Le service d'imagerie est remarquable. Les images sont expliquées par le radiologue lui-même, en mots simples. On sort de l'examen en comprenant ce qui a été fait et pourquoi.",
    service: 'Imagerie',
    avatar: '/images/testimonials/avatar-03.svg'
  },
  {
    id: 't04',
    name: 'James W.',
    country: 'Royaume-Uni',
    role: 'Expatriate',
    rating: 5,
    quote:
      "Living abroad, I needed continuity of care in a language I could use. Dr Nouri received me in English, coordinated my imaging and my follow-up in one place. Remarkably smooth.",
    service: 'Imagerie',
    avatar: '/images/testimonials/avatar-04.svg'
  },
  {
    id: 't05',
    name: 'Nour S.',
    country: 'Tunis',
    role: 'Avocate',
    rating: 5,
    quote:
      "J'ai été reçue en urgence un dimanche soir. En moins de quarante minutes, un médecin m'a reçu, m'a expliquée la situation et a organisé la suite. Un vrai sentiment de sécurité.",
    service: 'Urgences',
    avatar: '/images/testimonials/avatar-05.svg'
  },
  {
    id: 't06',
    name: 'Lina F.',
    country: 'Bizerte',
    role: 'Entrepreneure',
    rating: 5,
    quote:
      "La conciergerie s'est occupée de mon hébergement, de mes transferts et de mon visa. Je n'ai eu qu'à me présenter à l'accueil. C'est exactement ce que je cherchais.",
    service: 'Conciergerie VIP',
    avatar: '/images/testimonials/avatar-06.svg'
  }
];

export function getTestimonialsByService(service: string): Testimonial[] {
  return testimonials.filter((t) => t.service === service);
}
