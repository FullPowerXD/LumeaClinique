import type { Hotel } from '@/types';

export const hotels: Hotel[] = [
  {
    slug: 'maison-lumiere',
    name: 'Maison Lumière',
    category: 'Hôtel',
    distance: '4 min à pied',
    image: '/images/hotels/maison-lumiere.svg',
    description:
      "Hôtel particulier de dix chambres, à deux pas de la clinique. Calme absolu, service discret et terrasses ombragées au bord de l'eau.",
    perks: ['Petit-déjeuner inclus', 'Transfert clinique offert', 'Chambres calmes']
  },
  {
    slug: 'hotel-lac-bleu',
    name: 'Hôtel Lac Bleu',
    category: 'Hôtel',
    distance: '7 min en voiture',
    image: '/images/hotels/hotel-lac-bleu.svg',
    description:
      'Hôtel contemporain face au lac, avec salle de sport, business center et room service disponible 24 h/24.',
    perks: ['Salle de sport', 'Room service 24 h/24', 'Parking gratuit']
  },
  {
    slug: 'residence-les-cedres',
    name: 'Résidence Les Cèdres',
    category: 'Résidence',
    distance: '12 min en voiture',
    image: '/images/hotels/residence-les-cedres.svg',
    description:
      "Appartements avec cuisine, idéaux pour les séjours longs et les familles accompagnées.",
    perks: ['Kitchen équipée', 'Laundry service', 'Idéal familles']
  },
  {
    slug: 'hotel-palmeraie',
    name: 'Hôtel La Palmeraie',
    category: 'Hôtel',
    distance: '9 min en voiture',
    image: '/images/hotels/hotel-palmeraie.svg',
    description:
      'Hôtel de charme au cœur d\'un jardin de palmiers. Ambiance feutrée, patio ombragé et table de cuisine de saison.',
    perks: ['Jardin privatif', 'Restaurant sur place', 'Navette clinique']
  },
  {
    slug: 'residence-ambergue',
    name: 'Résidence l\'Ambergue',
    category: 'Résidence',
    distance: '6 min en voiture',
    image: '/images/hotels/residence-ambergue.svg',
    description:
      "Résidence de standing avec studios et appartements, service de conciergerie sur place et entrée sécurisée 24 h/24.",
    perks: ['Conciergerie sur place', 'Entrée sécurisée', 'Navette clinique']
  },
  {
    slug: 'guesthouse-olivier',
    name: "Guesthouse de l'Olivier",
    category: 'Maison d\'hôtes',
    distance: '15 min en voiture',
    image: '/images/hotels/guesthouse-olivier.svg',
    description:
      "Maison d'hôtes familiale dans un quartier résidentiel calme. Accueil chaleureux, petit-déjeuner maison et jardin ombragé.",
    perks: ['Petit-déjeuner maison', 'Jardin ombragé', 'Accueil personnalisé']
  }
];

export function getHotel(slug: string): Hotel | undefined {
  return hotels.find((h) => h.slug === slug);
}
