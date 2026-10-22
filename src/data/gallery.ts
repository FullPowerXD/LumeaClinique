import type { GalleryItem } from '@/types';

export const gallery: GalleryItem[] = [
  {
    id: 'g01',
    title: 'Le hall d\'accueil',
    category: 'Architecture',
    image: '/images/gallery/hall.svg',
    span: 'wide'
  },
  {
    id: 'g02',
    title: 'Salle de consultation',
    category: 'Consultation',
    image: '/images/gallery/consultation.svg',
    span: 'normal'
  },
  {
    id: 'g03',
    title: 'Bloc opératoire',
    category: 'Technologie',
    image: '/images/gallery/bloc.svg',
    span: 'normal'
  },
  {
    id: 'g04',
    title: 'Chambre de maternité',
    category: 'Chambres',
    image: '/images/gallery/chambre-maternite.svg',
    span: 'tall'
  },
  {
    id: 'g05',
    title: 'Plateau d\'imagerie',
    category: 'Technologie',
    image: '/images/gallery/imagerie.svg',
    span: 'normal'
  },
  {
    id: 'g06',
    title: 'Salle d\'allaitement',
    category: 'Maternité',
    image: '/images/gallery/allaitement.svg',
    span: 'normal'
  },
  {
    id: 'g07',
    title: 'Couloir de lumière',
    category: 'Architecture',
    image: '/images/gallery/couloir.svg',
    span: 'wide'
  },
  {
    id: 'g08',
    title: 'Espace de kinésithérapie',
    category: 'Soins',
    image: '/images/gallery/kine.svg',
    span: 'normal'
  },
  {
    id: 'g09',
    title: 'Salon de convalescence',
    category: 'Chambres',
    image: '/images/gallery/convalescence.svg',
    span: 'normal'
  },
  {
    id: 'g10',
    title: 'Salle de réunion médicale',
    category: 'Équipe',
    image: '/images/gallery/reunion.svg',
    span: 'normal'
  },
  {
    id: 'g11',
    title: 'Laboratoire d\'analyses',
    category: 'Technologie',
    image: '/images/gallery/laboratoire.svg',
    span: 'normal'
  },
  {
    id: 'g12',
    title: 'Jardin de la clinique',
    category: 'Architecture',
    image: '/images/gallery/jardin.svg',
    span: 'wide'
  }
];

export const galleryCategories = Array.from(new Set(gallery.map((g) => g.category))).sort();
