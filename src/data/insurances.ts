import type { Insurance } from '@/types';

/**
 * Accepted insurers and mutuelles.
 * The "convenience service" page and the appointment wizard read this list.
 */
export const insurances: Insurance[] = [
  {
    id: 'i01',
    slug: 'cnss',
    name: 'CNSS',
    type: 'assurance',
    country: 'Tunisie',
    coverage:
      'Tierce paiement des consultations, examens d\'imagerie, actes de chirurgie ambulatoire et honouraires médicaux dans la limite du tarif de la convention nationale.',
    logo: '/images/insurances/cnss.svg'
  },
  {
    id: 'i02',
    slug: 'cnam-tunisie',
    name: 'CNAM — Caisse Nationale d\'Assurance Maladie',
    type: 'assurance',
    country: 'Tunisie',
    coverage:
      'Consultations, actes de médecine générale, hospitalisation et examens complémentaires selon la grille tarifaire de la CNAM. Dossier de prise en charge accepté à l\'accueil.',
    logo: '/images/insurances/cnam.svg'
  },
  {
    id: 'i03',
    slug: 'cnss-cle',
    name: 'CNSS — Caisse de Liquidation de la Santé',
    type: 'assurance',
    country: 'Tunisie',
    coverage:
      'Traitement des dossiers de remboursement, entente préalable pour les actes coûteux et accompaniment administratif des patients assurés.',
    logo: '/images/insurances/cnss-cle.svg'
  },
  {
    id: 'i04',
    slug: 'mutuelle-essalem',
    name: 'Mutuelle Essalem',
    type: 'mutuelle',
    country: 'Tunisie',
    coverage:
      'Complémentaire santé : consultations, soins dentaires, analyse, hospitalisation et pharmacie, avec carte de tiers payant acceptée à l\'accueil.',
    logo: '/images/insurances/essalem.svg'
  },
  {
    id: 'i05',
    slug: 'mutuelle-cotomix',
    name: 'Mutuelle Cotomix',
    type: 'mutuelle',
    country: 'Tunisie',
    coverage:
      'Prise en charge complémentaire des consultations, de l\'hospitalisation privée et des examens d\'imagerie pour les contrats supplementingaires.',
    logo: '/images/insurances/cotomix.svg'
  },
  {
    id: 'i06',
    slug: 'mutuelle-comar',
    name: 'Mutuelle Comar',
    type: 'mutuelle',
    country: 'Tunisie',
    coverage:
      'Couverture santé des salariés et de leurs ayants droit : consultations, laboratoires, soins infirmiers et maintien de salaire selon le contrat.',
    logo: '/images/insurances/comar.svg'
  },
  {
    id: 'i07',
    slug: 'mutuelle-axa',
    name: 'AXA Santé',
    type: 'mutuelle',
    country: 'Tunisie / International',
    coverage:
      'Prise en charge directe des consultations et actes médicaux pour les adhérents des assurances AXA, dans le réseau Lumea Clinique.',
    logo: '/images/insurances/axa.svg'
  },
  {
    id: 'i08',
    slug: 'mutuelle-star',
    name: 'STAR Assurances',
    type: 'mutuelle',
    country: 'Tunisie',
    coverage:
      'Complémentaire santé régionale : consultations spécialisées, examens d\'imagerie et actes ambulatoires avec entente préalable simplifiée.',
    logo: '/images/insurances/star.svg'
  },
  {
    id: 'i09',
    slug: 'mutuelle-biat',
    name: 'BIAT Assurance',
    type: 'mutuelle',
    country: 'Tunisie',
    coverage:
      'Contrats santé professionnels et entreprises : tiers payant, conventions négociées et prise en charge des consultations et de l\'hospitalisation.',
    logo: '/images/insurances/biat.svg'
  },
  {
    id: 'i10',
    slug: 'mutuelle-pacifica',
    name: 'Pacifica',
    type: 'mutuelle',
    country: 'Tunisie',
    coverage:
      'Mutuelle complémentaire générale couvrant les consultations spécialisées, l\'imagerie médicale et la prévention pour les familles adhérentes.',
    logo: '/images/insurances/pacifica.svg'
  },
  {
    id: 'i11',
    slug: 'assurance-maladie-privee',
    name: 'Assurances privées — Santé internationale',
    type: 'assurance',
    country: 'International',
    coverage:
      'Prise en charge des consultations et de l\'hospitalisation pour les assureurs privés internationaux, avec facturation directe en devise étrangère.',
    logo: '/images/insurances/private.svg'
  },
  {
    id: 'i12',
    slug: 'mutuelle-ami',
    name: 'Mutuelle AMI',
    type: 'mutuelle',
    country: 'Tunisie',
    coverage:
      'Couverture des consultations, soins de sages-femmes, préparation à l\'accouchement et accompagnement post-partum pour les adhérentes.',
    logo: '/images/insurances/ami.svg'
  }
];

export function getInsurance(slug: string): Insurance | undefined {
  return insurances.find((i) => i.slug === slug);
}

export const insuranceTypes = {
  mutuelle: 'Mutuelles et complémentaires santé',
  assurance: 'Assurances maladie'
} as const;
