import type { Practitioner } from '@/types';

/**
 * Practitioner directory.
 * Add or edit an entry here — the directory filters, search, sitemap and
 * department pages are all derived from this array.
 */
export const practitioners: Practitioner[] = [
  {
    id: 'p01',
    slug: 'amira-benali',
    name: 'Dr Amira Benali',
    title: 'Dr Amira Benali',
    role: 'Gynécologue-obstétricienne',
    departmentSlug: 'maternite',
    specialties: ['Gynécologie', 'Obstétrique', 'Suivi de grossesse'],
    languages: ['fr', 'en', 'ar'],
    gender: 'femme',
    photo: '/images/practitioners/amira-benali.svg',
    photoPosition: 'center 20%',
    shortBio:
      'Gynécologue-obstétricienne depuis 14 ans, elle accompagne plus de 2 000 accouchements à Lumea avec une approche douce et Evidence-based.',
    bio: [
      "Le Dr Amira Benali dirige le pôle de maternité de Lumea Clinique. Elle a exercé pendant huit ans en France, au sein d'une maternité de niveau 3, avant de revenir à Tunis créer son projet de soins centré sur la lumière et l'accompagnement.",
      "Sa pratique s'appuie sur un projet de naissance personnalisé, un suivi continu et un dialogue constant avec les patientes. Elle est particulièrement attentive aux accompagnements de l'allaitement et au soutien périnatal.",
      "Elle est instructrice en simulation obstétricale et forme chaque année les sage-femmes de l'équipe aux situations d'urgence."
    ],
    education: [
      { year: '2009', title: 'Diplôme d\'études spécialisées en gynécologie-obstétrique', institution: 'Faculté de médecine de Tunis' },
      { year: '2012', title: 'Diplôme interuniversitaire en médecine fœtale', institution: 'Université Paris Cité' },
      { year: '2015', title: 'Formation en allaitement et périnéologie', institution: 'Institut de périnatalogie, Lyon' }
    ],
    experience: [
      { year: '2010 – 2018', title: 'Gynécologue-obstétricienne hospitalière', institution: 'CHU de Tunis' },
      { year: '2018 – aujourd\'hui', title: 'Responsable du pôle maternité', institution: 'Lumea Clinique' }
    ],
    procedures: [
      'Consultation de suivi de grossesse',
      'Échographie obstétricale 3D/4D',
      'Préparation à la naissance',
      'Consultation d\'allaitement',
      'Accompagnement post-partum'
    ],
    memberships: ['Société Tunisienne de Gynécologie-Obstétrique', 'Collège National de Gynécologie Médicale'],
    consultations: [
      { day: 'Lundi', hours: '09:00 – 13:00' },
      { day: 'Mardi', hours: '14:00 – 18:00' },
      { day: 'Jeudi', hours: '09:00 – 13:00' }
    ],
    availability: 'disponible',
    yearsOfPractice: 14,
    order: 1
  },
  {
    id: 'p02',
    slug: 'karim-haddad',
    name: 'Dr Karim Haddad',
    title: 'Dr Karim Haddad',
    role: 'Chirurgien général et vasculaire',
    departmentSlug: 'chirurgie',
    specialties: ['Chirurgie générale', 'Chirurgie vasculaire', 'Varices'],
    languages: ['fr', 'en', 'ar'],
    gender: 'homme',
    photo: '/images/practitioners/karim-haddad.svg',
    photoPosition: 'center 18%',
    shortBio:
      'Chirurgien général et vasculaire, spécialiste des techniques mini-invasives et de la phlébologie interventionnelle.',
    bio: [
      "Le Dr Karim Haddad est chirurgien général et vasculaire. Il est formé à la chirurgie cœlioscopique et aux techniques endoveineuses par radiofréquence, pratiquées à Lumea depuis 2019.",
      "Il privilégie les approches peu invasives : coelioscopie, radiofréquence veineuse, fibroscopie. Son approche de l'hémorroïde, de la hernie et des varices associe précision chirurgicale et reprise d'activité rapide.",
      "Il coordonne le bloc opératoire de la clinique et forme les équipes à la sécurité du patient en chirurgie ambulatoire."
    ],
    education: [
      { year: '2007', title: 'Diplôme d\'études spécialisées en chirurgie générale', institution: 'Faculté de médecine de Sfax' },
      { year: '2010', title: 'Diplôme d\'études spécialisées en chirurgie vasculaire', institution: 'Université de Strasbourg' },
      { year: '2018', title: 'Certification en phlébologie interventionnelle', institution: 'European Society for Vascular Surgery' }
    ],
    experience: [
      { year: '2008 – 2016', title: 'Chirurgien assistant et praticien hospitalier', institution: 'CHU de Sfax' },
      { year: '2016 – aujourd\'hui', title: 'Chirurgien général et vasculaire', institution: 'Lumea Clinique' }
    ],
    procedures: [
      'Cœlioscopie digestive',
      'Cholécystectomie',
      'Traitement des varices par radiofréquence',
      'Réparation des hernies',
      'Endoscopie digestive'
    ],
    memberships: ['Société Tunisienne de Chirurgie', 'European Society for Vascular Surgery'],
    consultations: [
      { day: 'Lundi', hours: '08:30 – 12:00' },
      { day: 'Mercredi', hours: '08:30 – 12:00' },
      { day: 'Vendredi', hours: '08:30 – 11:30' }
    ],
    availability: 'disponible',
    yearsOfPractice: 16,
    order: 2
  },
  {
    id: 'p03',
    slug: 'leila-nouri',
    name: 'Dr Leila Nouri',
    title: 'Dr Leila Nouri',
    role: 'Radiologue, imagerie médicale',
    departmentSlug: 'imagerie',
    specialties: ['Radiologie', 'Imagerie mammaire', 'Imagerie pelvienne'],
    languages: ['fr', 'en', 'ar', 'es'],
    gender: 'femme',
    photo: '/images/practitioners/leila-nouri.svg',
    photoPosition: 'center 16%',
    shortBio:
      'Radiologue, spécialiste de l\'imagerie mammaire et pelvienne. Elle rédige et commente chaque compte rendu.',
    bio: [
      "Le Dr Leila Nouri dirige le plateau d'imagerie. Elle a effectué une partie de sa carrière en Espagne, où elle s'est spécialisée en imagerie mammaire et en imagerie pelvienne.",
      "Elle travaille en imagerie mammaire, pelvienne et gynécologique, avec une attention particulière à l'IRM pelvienne. Son approche se distingue par des comptes rendus rédigés, commentés et transmis au médecin traitant sous 48 heures.",
      "Elle est Coordinatrice du programme de dépistage du cancer du sein de la clinique."
    ],
    education: [
      { year: '2008', title: 'Diplôme de radiologue', institution: 'Faculté de médecine de Tunis' },
      { year: '2012', title: 'Fellowship en imagerie mammaire', institution: 'Hospital Universitario, Espagne' },
      { year: '2016', title: 'Diplôme européen en imagerie pelvienne', institution: 'ESUR' }
    ],
    experience: [
      { year: '2009 – 2017', title: 'Radiologue hospitalière', institution: 'Hôpital Charles Nicolle' },
      { year: '2017 – aujourd\'hui', title: 'Responsable du plateau d\'imagerie', institution: 'Lumea Clinique' }
    ],
    procedures: [
      'IRM pelvienne et gynécologique',
      'Mammographie et tomosynthèse 3D',
      'Échographie de contraste',
      'Scanner et radiologie interventionnelle',
      'Ostéodensitométrie'
    ],
    memberships: ['Société Tunisienne de Radiologie', 'European Society of Breast Imaging'],
    consultations: [
      { day: 'Mardi', hours: '08:00 – 12:00' },
      { day: 'Jeudi', hours: '13:30 – 17:30' }
    ],
    availability: 'limite',
    yearsOfPractice: 15,
    order: 3
  },
  {
    id: 'p04',
    slug: 'sofia-mansouri',
    name: 'Dr Sofia Mansouri',
    title: 'Dr Sofia Mansouri',
    role: 'Médecin urgentiste',
    departmentSlug: 'urgences',
    specialties: ['Urgences', 'Traumatologie', 'Médecine d\'urgence'],
    languages: ['fr', 'en', 'ar', 'it'],
    gender: 'femme',
    photo: '/images/practitioners/sofia-mansouri.svg',
    photoPosition: 'center 14%',
    shortBio:
      'urgentiste, elle dirige l\'équipe de garde des urgences 24 h/24 et forme les équipes à la prise en charge des situations critiques.',
    bio: [
      "Le Dr Sofia Mansouri est médecin urgentiste depuis 2013. Elle assure la coordination médicale du service d'urgences ouvert 24 heures sur 24.",
      "Elle a travaillé sept ans au service d'accueil et de triage des urgences d'un hôpital universitaire, où elle a coordonné des situations de trauma majeur et de réanimation.",
      "Elle développe les protocoles de triage de la clinique et anime les formations de réanimation cardio-pulmonaire pour l'ensemble des équipes soignantes."
    ],
    education: [
      { year: '2011', title: 'Diplôme de médecine générale', institution: 'Faculté de médecine de Tunis' },
      { year: '2014', title: 'Diplôme d\'études spécialisées en médecine d\'urgence', institution: 'Université de Marseille' },
      { year: '2019', title: 'Certification en réanimation cardio-pulmonaire', institution: 'European Resuscitation Council' }
    ],
    experience: [
      { year: '2014 – 2021', title: 'Médecin urgentiste hospitalier', institution: 'CHU de Marseille' },
      { year: '2021 – aujourd\'hui', title: 'Responsable médicale des urgences', institution: 'Lumea Clinique' }
    ],
    procedures: [
      'Triage et évaluation clinique',
      'Traumatologie et immobilisation',
      'Réanimation cardio-pulmonaire',
      'Gestion des urgences pédiatriques',
      'Diagnostic et surveillance ECG'
    ],
    memberships: ['Société Française de Médecine d\'Urgence', 'European Resuscitation Council'],
    consultations: [
      { day: 'Relecture', hours: 'Permanence — 24 h/24' }
    ],
    availability: 'complet',
    yearsOfPractice: 12,
    order: 4
  },
  {
    id: 'p05',
    slug: 'nadia-el-khoury',
    name: 'Dr Nadia El Khoury',
    title: 'Dr Nadia El Khoury',
    role: 'Dermatologue et médecin esthétique',
    departmentSlug: 'services',
    specialties: ['Dermatologie', 'Médecine esthétique', 'Laser'],
    languages: ['fr', 'en', 'ar'],
    gender: 'femme',
    photo: '/images/practitioners/nadia-el-khoury.svg',
    photoPosition: 'center 18%',
    shortBio:
      'Dermatologue et médecin esthétique. Elle pratique la médecine esthétique médicale, sans intervention chirurgicale.',
    bio: [
      "Le Dr Nadia El Khoury exerce en dermatologie et en médecine esthétique. Elle a construit une offre centrée sur la médecine esthétique médicale : actes non invasifs et injectables, réalisés avec des produits dont la traçabilité est documentée.",
      "Sa consultation commence toujours par une analyse de peau et un bilan des habitudes, afin d'identifier ce qui peut être corrigé et ce qui doit être préservé.",
      "Elle est formatrice en injection de produits de comblement et en médecine esthétique, et intervient régulièrement lors de masterclass internationales."
    ],
    education: [
      { year: '2009', title: 'Diplôme de spécialiste en dermatologie', institution: 'Faculté de médecine de Sousse' },
      { year: '2014', title: 'Diplôme interuniversitaire en médecine esthétique', institution: 'Université Paris Descartes' },
      { year: '2019', title: 'Formation en injectables et radiofréquence', institution: 'Institut de médecine esthétique, Paris' }
    ],
    experience: [
      { year: '2010 – 2018', title: 'Dermatologue hospitalière', institution: 'CHU de Sousse' },
      { year: '2018 – aujourd\'hui', title: 'Dermatologue et médecin esthétique', institution: 'Lumea Clinique' }
    ],
    procedures: [
      'Injections d\'acide hyaluronique',
      'Traitement du visage par radiofréquence',
      'Laser_fractionné',
      'Traitement de l\'acné et des cicatrices',
      'Consultation de dermatologie'
    ],
    memberships: ['Société Tunisienne de Dermatologie', 'Société Française de Médecine Esthétique'],
    consultations: [
      { day: 'Lundi', hours: '13:00 – 18:00' },
      { day: 'Mercredi', hours: '09:00 – 13:00' },
      { day: 'Samedi', hours: '09:00 – 13:00' }
    ],
    availability: 'disponible',
    yearsOfPractice: 13,
    order: 5
  },
  {
    id: 'p06',
    slug: 'youssef-sbaihi',
    name: 'Dr Youssef Sbaihi',
    title: 'Dr Youssef Sbaihi',
    role: 'Chirurgien orthopédiste',
    departmentSlug: 'chirurgie',
    specialties: ['Orthopédie', 'Traumatologie', 'Arthroscopie'],
    languages: ['fr', 'en', 'ar', 'de'],
    gender: 'homme',
    photo: '/images/practitioners/youssef-sbaihi.svg',
    photoPosition: 'center 16%',
    shortBio:
      'Chirurgien orthopédiste, spécialiste de l\'arthroscopie et de la traumatologie du membre supérieur.',
    bio: [
      "Le Dr Youssef Sbaihi est chirurgien orthopédiste, spécialiste de l'arthroscopie de l'épaule et du genou, ainsi que de la traumatologie du membre supérieur.",
      "Formé en Allemagne, il a perfectionné ses techniques dans deux centres universitaires avant de rejoindre Lumea. Il privilégie la chirurgie arthroscopique, moins invasive, et un parcours de rééducation guidé.",
      "Il travaille en binôme avec les kinésithérapeutes de la clinique pour organiser la reprise de l'appui et du mouvement."
    ],
    education: [
      { year: '2009', title: 'Diplôme d\'études spécialisées en chirurgie orthopédique', institution: 'Université de Tunis' },
      { year: '2013', title: 'Fellowship en arthroscopie de l\'épaule', institution: 'Charité, Berlin' },
      { year: '2018', title: 'Certification en chirurgie de la main', institution: 'FESSH' }
    ],
    experience: [
      { year: '2010 – 2019', title: 'Chirurgien orthopédiste', institution: 'Hôpital académique de Fribourg' },
      { year: '2019 – aujourd\'hui', title: 'Chirurgien orthopédiste', institution: 'Lumea Clinique' }
    ],
    procedures: [
      'Arthroscopie de l\'épaule et du genou',
      'Ligamentoplastie du ACL',
      'Réparation des tendons de la coiffe',
      'Traitement des fractures',
      'Infiltrations guidées par échographie'
    ],
    memberships: ['Société Tunisienne de Chirurgie Orthopédique', 'ESSKA'],
    consultations: [
      { day: 'Mardi', hours: '09:00 – 13:00' },
      { day: 'Jeudi', hours: '09:00 – 13:00' }
    ],
    availability: 'limite',
    yearsOfPractice: 14,
    order: 6
  },
  {
    id: 'p07',
    slug: 'ines-charfi',
    name: 'Dr Inès Charfi',
    title: 'Dr Inès Charfi',
    role: 'Pédiatre',
    departmentSlug: 'maternite',
    specialties: ['Pédiatrie', 'Néonatologie', 'Pédiatrie préventive'],
    languages: ['fr', 'en', 'ar', 'es'],
    gender: 'femme',
    photo: '/images/practitioners/ines-charfi.svg',
    photoPosition: 'center 18%',
    shortBio:
      'Pédiatre. Elle assure la garde pédiatrique de nuit et le suivi du nourrisson après la sortie de maternité.',
    bio: [
      "Le Dr Inès Charfi est pédiatre et assure la garde des urgences pédiatriques. Elle accompagne les familles dès la sortie de la maternité et jusqu'aux premiers bilans de santé.",
      "Elle est reconnue pour le temps de consultation qu'elle consacre à l'explication aux parents, et pour la mise en place d'un suivi structuré de la vaccination et de l'alimentation du nourrisson.",
      "Elle coanime les séances de préparation à l'accueil de l'enfant hospitalisé."
    ],
    education: [
      { year: '2012', title: 'Diplôme de pédiatre', institution: 'Faculté de médecine de Tunis' },
      { year: '2015', title: 'Diplôme interuniversitaire en nutrition pédiatrique', institution: 'Université de Bordeaux' },
      { year: '2019', title: 'Formation en soins intensifs pédiatriques', institution: 'Hôpital Necker-Enfants Malades' }
    ],
    experience: [
      { year: '2013 – 2020', title: 'Pédiatre hospitalière', institution: 'Hôpital Saint-Joseph' },
      { year: '2020 – aujourd\'hui', title: 'Pédiatre et responsable de la garde pédiatrique', institution: 'Lumea Clinique' }
    ],
    procedures: [
      'Consultation pédiatrique',
      'Suivi du nourrisson et du nouveau-né',
      'Vaccination et dépistage',
      'Urgences pédiatriques',
      'Consultation de nutrition'
    ],
    memberships: ['Société Tunisienne de Pédiatrie', 'European Society for Paediatric Gastroenterology'],
    consultations: [
      { day: 'Lundi', hours: '09:00 – 12:30' },
      { day: 'Mercredi', hours: '14:00 – 17:30' },
      { day: 'Samedi', hours: '09:00 – 12:00' }
    ],
    availability: 'disponible',
    yearsOfPractice: 11,
    order: 7
  },
  {
    id: 'p08',
    slug: 'marie-rossi',
    name: 'Dr Marie Rossi',
    title: 'Dr Marie Rossi',
    role: 'Médecine générale, médecine esthétique',
    departmentSlug: 'services',
    specialties: ['Médecine générale', 'Médecine esthétique', 'Nutrition'],
    languages: ['fr', 'en', 'it', 'es'],
    gender: 'femme',
    photo: '/images/practitioners/marie-rossi.svg',
    photoPosition: 'center 20%',
    shortBio:
      'Médecine générale et médecine esthétique. Elle consulte en français, anglais, italien et espagnol.',
    bio: [
      "Le Dr Marie Rossi exerce en médecine générale à Lumea et en médecine esthétique. Son parcours l'a conduite vers la médecine préventive et l'accompagnement dans la durée.",
      "Elle reçoit les patients qui souhaitent un suivi de long terme : bilans de santé, prévention, gestion du sommeil, de la fatigue et de la composition corporelle.",
      "Elle propose des consultations en français, en anglais, en italien et en espagnol, pour accueillir patients expatriés et familles expatriées."
    ],
    education: [
      { year: '2013', title: 'Diplôme de médecine générale', institution: 'Université de Paris' },
      { year: '2017', title: 'Diplôme interuniversitaire en médecine esthétique', institution: 'Université de Lyon' },
      { year: '2021', title: 'Diplôme en médecine du sport et nutrition clinique', institution: 'Université de Genève' }
    ],
    experience: [
      { year: '2014 – 2020', title: 'Médecin généraliste', institution: 'Cabinet libéral, Paris' },
      { year: '2020 – aujourd\'hui', title: 'Médecine générale et médecine esthétique', institution: 'Lumea Clinique' }
    ],
    procedures: [
      'Consultation de médecine générale',
      'Bilan de santé et prévention',
      'Injections et soins du visage',
      'Accompagnement nutritionnel',
      'Téléconsultation'
    ],
    memberships: ['Conseil national de l\'Ordre des médecins', 'Société Française de Médecine Esthétique'],
    consultations: [
      { day: 'Lundi', hours: '09:00 – 13:00' },
      { day: 'Mardi', hours: '09:00 – 13:00' },
      { day: 'Vendredi', hours: '14:00 – 18:00' }
    ],
    availability: 'disponible',
    yearsOfPractice: 10,
    order: 8
  },
  {
    id: 'p09',
    slug: 'omar-tazi',
    name: 'Dr Omar Tazi',
    title: 'Dr Omar Tazi',
    role: 'Urologue',
    departmentSlug: 'chirurgie',
    specialties: ['Urologie', 'Endoscopie', 'Lithotomie'],
    languages: ['fr', 'en', 'ar', 'es'],
    gender: 'homme',
    photo: '/images/practitioners/omar-tazi.svg',
    photoPosition: 'center 18%',
    shortBio:
      'Urologue, spécialiste de l\'endoscopie et de la lithotomie. Consultations en français, anglais, arabe et espagnol.',
    bio: [
      "Le Dr Omar Tazi est urologue. Il est spécialiste de l'endoscopie urinaire, de la lithotomie et de la chirurgie ambulatoire du rein.",
      "Il privilégie les prises en charge ambulatoires : la plupart de ses interventions se réalisent sous anesthésie locale ou générale courte, avec un retour à domicile le jour même.",
      "Il travaille avec l'équipe d'urologie de Lumea sur le dépistage du cancer de la prostate et le suivi des patients porteurs de sondes."
    ],
    education: [
      { year: '2008', title: 'Diplôme d\'études spécialisées en urologie', institution: 'Faculté de médecine de Tunis' },
      { year: '2012', title: 'Formation en endourologie', institution: 'CHU de Lille' },
      { year: '2019', title: 'Certification en chirurgie robotique', institution: 'European Society of Urology' }
    ],
    experience: [
      { year: '2009 – 2018', title: 'Urologue hospitalier', institution: 'CHU de Tunis' },
      { year: '2018 – aujourd\'hui', title: 'Urologue', institution: 'Lumea Clinique' }
    ],
    procedures: [
      'Cystoscopie',
      'Lithotomie urinaire',
      'Chirurgie de la prostate',
      'Circoncision et chirurgie du pénis',
      'Suivi des patients sous sonde'
    ],
    memberships: ['Société Tunisienne d\'Urologie', 'European Association of Urology'],
    consultations: [
      { day: 'Mercredi', hours: '14:00 – 18:00' },
      { day: 'Vendredi', hours: '09:00 – 12:30' }
    ],
    availability: 'disponible',
    yearsOfPractice: 15,
    order: 9
  },
  {
    id: 'p10',
    slug: 'helene-meyer',
    name: 'Dr Hélène Meyer',
    title: 'Dr Hélène Meyer',
    role: 'Cardiologue',
    departmentSlug: 'imagerie',
    specialties: ['Cardiologie', 'Échographie cardiaque', 'Holter'],
    languages: ['fr', 'en', 'de'],
    gender: 'femme',
    photo: '/images/practitioners/helene-meyer.svg',
    photoPosition: 'center 16%',
    shortBio:
      'Cardiologue. Elle interprète les ECG, les échographies cardiaques et les résultats du Holter avec une approche orientée prévention.',
    bio: [
      "Le Dr Hélène Meyer est cardiologue. Elle interprète les ECG, les échographies cardiaques et les enregistrements longs, et assure le suivi des patients hypertendus ou porteurs d'une pathologie cardiaque.",
      "Elle a exercé pendant dix ans en Allemagne et en Suisse, avant de rejoindre Lumea Clinique. Elle est reconnue pour la clarté de ses explanations aux patients.",
      "Elle travaille en collaboration avec le service d'imagerie pour la réalisation des examens cardiaques et avec le service d'urgences pour la gestion des urgences cardiologiques."
    ],
    education: [
      { year: '2009', title: 'Diplôme de spécialiste en cardiologie', institution: 'Université de Strasbourg' },
      { year: '2014', title: 'Fellowship en échographie cardiaque', institution: 'Hôpital Universitaire de Zurich' },
      { year: '2018', title: 'Certification en rythmologie', institution: 'EHRA' }
    ],
    experience: [
      { year: '2010 – 2019', title: 'Cardiologue', institution: 'Inselspital, Berne' },
      { year: '2019 – aujourd\'hui', title: 'Cardiologue', institution: 'Lumea Clinique' }
    ],
    procedures: [
      'Consultation de cardiologie',
      'Électrocardiogramme',
      'Échographie cardiaque',
      'Holter ECG 24 / 72 heures',
      'Épreuve d\'effort'
    ],
    memberships: ['Société Tunisienne de Cardiologie', 'ESC'],
    consultations: [
      { day: 'Mardi', hours: '14:00 – 18:00' },
      { day: 'Jeudi', hours: '08:30 – 12:00' }
    ],
    availability: 'limite',
    yearsOfPractice: 14,
    order: 10
  }
];

export function getPractitioner(slug: string): Practitioner | undefined {
  return practitioners.find((p) => p.slug === slug);
}

export function getPractitionersByDepartment(departmentSlug: string): Practitioner[] {
  return practitioners.filter((p) => p.departmentSlug === departmentSlug);
}

export function getFeaturedPractitioners(limit = 6): Practitioner[] {
  return [...practitioners].sort((a, b) => a.order - b.order).slice(0, limit);
}

export const allSpecialties = Array.from(
  new Set(practitioners.flatMap((p) => p.specialties))
).sort((a, b) => a.localeCompare(b, 'fr'));

export const allLanguages = Array.from(
  new Set(practitioners.flatMap((p) => p.languages))
).sort((a, b) => a.localeCompare(b, 'fr'));
