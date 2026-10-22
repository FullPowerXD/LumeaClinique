import type { Department } from '@/types';

/**
 * Departments / services.
 * Add a new department by appending an entry here — the routing, mega-menu,
 * sitemap and filters are all derived from this array.
 */
export const departments: Department[] = [
  {
    slug: 'urgences',
    name: 'Urgences',
    shortName: 'Urgences',
    icon: 'siren',
    image: '/images/departments/urgences.svg',
    accent: '#D4AF37',
    tagline: 'Une prise en charge immédiate, à toute heure',
    intro:
      "Notre service d'urgences est ouvert 24 heures sur 24, 7 jours sur 7. Une équipe de médecins urgentistes et d'infirmiers de garde assure une_evalutation rapide, un diagnostic fiable et une orientation thérapeutique sans délai.",
    philosophy: [
      "Accueil sans rendez-vous, sans discrimination, quelle que soit l'heure d'arrivée.",
      "Triage réalisé à l'arrivée par un médecin urgentiste, selon un protocole d'équipe, en moins de 15 minutes.",
      "Plateau technique d'imagerie accessible directement depuis le service, sans transfert.",
      "Information continue de la famille, à chaque étape de la prise en charge."
    ],
    procedures: [
      {
        slug: 'consultation-urgente',
        name: 'Consultation urgente',
        description:
          "Évaluation clinique complète, constantes, ECG et orientation vers l'imagerie ou le bloc si nécessaire.",
        duration: '30 – 45 min',
        icon: 'stethoscope'
      },
      {
        slug: 'traumatologie',
        name: 'Traumatologie',
        description:
          "Soins de plaies, pansements compressifs, poses de plâtres et de contentions, évaluations musculo-articulaires.",
        duration: '45 min',
        icon: 'bandage'
      },
      {
        slug: 'fractures',
        name: 'Fractures & entorses',
        description:
          "Réduction, immobilisation, ostéosynthèse si besoin et suivi radiologique rapproché.",
        duration: 'Variable',
        icon: 'bone'
      },
      {
        slug: 'malaises',
        name: 'Malaises & urgences cardiologiques',
        description:
          "Électrocardiogramme, monitorage, bilan biologique urgent et prise en charge d'un arrêt cardio-respiratoire.",
        duration: 'Variable',
        icon: 'heart-pulse'
      },
      {
        slug: 'intoxications',
        name: 'Intoxications & allergies',
        description:
          "Traitement d'urgence des allergies sévères, des piqûres et des intoxications alimentaires ou médicamenteuses.",
        duration: 'Variable',
        icon: 'syringe'
      },
      {
        slug: 'pediatrie-urgente',
        name: 'Urgences pédiatriques',
        description:
          "Prise en charge des enfants de 0 à 15 ans, fièvre, douleurs abdominales, traumatismes et vaccinations.",
        duration: '30 – 45 min',
        icon: 'baby'
      },
      {
        slug: 'examen-post-travail',
        name: 'Visite post-travail',
        description:
          "Examen de suivi d'un accident du travail ou d'une maladie professionnelle, en lien avec le médecin-conseil.",
        duration: '30 min',
        icon: 'clipboard-check'
      },
      {
        slug: 'triage-medicament',
        name: 'Triage médicamenteux',
        description:
          "Réévaluation, ajustement posologique, gestion des effets indésirables et surveillance continue.",
        duration: '20 min',
        icon: 'pill'
      }
    ],
    equipment: [
      {
        slug: 'moniteur-multiparametrique',
        name: 'Moniteurs multiparamétriques',
        description:
          'Surveillance continue de la fréquence cardiaque, de la tension, de la saturation et de la fréquence respiratoire.',
        image: '/images/equipment/moniteur.svg'
      },
      {
        slug: 'ecg-12-dérives',
        name: 'ECG 12 dérivées',
        description:
          'Électrocardiographie numérique avec export immédiat vers le dossier patient sécurisé.',
        image: '/images/equipment/ecg.svg'
      },
      {
        slug: 'echographie-urgentiste',
        name: 'Échographie d\'urgence',
        description:
          'Échographie portable de point-of-care, disponible 24 h/24 dans la salle de déchocage.',
        image: '/images/equipment/echographie.svg'
      },
      {
        slug: 'decontamination',
        name: 'Salle de décontamination',
        description:
          'Baie dédiée, douche de décontamination et sas d\'isolement pour les situations à risque infectieux.',
        image: '/images/equipment/decontamination.svg'
      },
      {
        slug: 'reanimation',
        name: 'Chariot de réanimation',
        description:
          'Équipé d\'un défibrillateur semi-automatique, d\'un ballon-masque et d\'un aspirateur de secours.',
        image: '/images/equipment/reanimation.svg'
      },
      {
        slug: 'laboratoire-urgent',
        name: 'Laboratoire d\'urgence',
        description:
          'Prélèvements réalisés sur place, résultats de routine en moins de deux heures, gaz du sang inclus.',
        image: '/images/equipment/laboratoire.svg'
      }
    ],
    journey: [
      {
        step: '01',
        title: 'Accueil & triage',
        description:
          "Vous êtes reçu par l'accueil, puis orienté vers la salle de triage. Un médecin urgentiste vous examine dans un délai moyen de 15 minutes.",
        icon: 'door-open'
      },
      {
        step: '02',
        title: 'Examen & examens complémentaires',
        description:
          "Constantes, ECG, prise de sang et imagerie sont réalisés sur place si l'indication est posée.",
        icon: 'scan-heart'
      },
      {
        step: '03',
        title: 'Décision thérapeutique',
        description:
          "Le médecin vous explique les résultats, les options de traitement et vous invite à décider avec lui.",
        icon: 'messages-square'
      },
      {
        step: '04',
        title: 'Traitement & surveillance',
        description:
          "Soins, pansements, perfusion ou observation surveillée au lit du patient, selon votre situation.",
        icon: 'syringe'
      },
      {
        step: '05',
        title: 'Sortie, orientation ou hospitalisation',
        description:
          "Un compte rendu écrit vous est remis, avec les ordonnances et, si nécessaire, une orientation vers un service de spécialité.",
        icon: 'log-out'
      }
    ],
    faq: [
      {
        question: 'Faut-il appeler avant de venir ?',
        answer:
          "Non, l'accueil des urgences est libre 24 h/24. Vous pouvez néanmoins joindre la ligne dédiée au +216 71 000 001 pour annoncer votre arrivée et préparer votre prise en charge."
      },
      {
        question: 'Quels documents dois-je apporter ?',
        answer:
          "Votre pièce d'identité, votre carte d'assurance ou de mutuelle et, si possible, vos derniers résultats d'examens, votre ordonnance en cours et la liste de vos traitements."
      },
      {
        question: 'L\'accueil des urgences est-il gratuit ?',
        answer:
          "La première évaluation d'un patient est facturée comme une consultation. Nous acceptons les tiers payants des principales mutuelles et assurances partenaires."
      },
      {
        question: 'Peut-on rester dormir aux urgences ?',
        answer:
          "Une unité de surveillance de courte durée permet l'observation de quelques heures. Pour une hospitalisation, nous disposons de conventions avec des cliniques partenaires."
      },
      {
        question: 'Les interventions pediatriques sont-elles disponibles la nuit ?',
        answer:
          "Oui. Une garde pediatricianale est assured chaque nuit, ainsi qu'une garde de chirurgie et d'anesthésie pour les urgences interventionnelles."
      }
    ],
    emergency: true,
    order: 1
  },
  {
    slug: 'maternite',
    name: 'Maternité',
    shortName: 'Maternité',
    icon: 'baby',
    image: '/images/departments/maternite.svg',
    accent: '#EBCB6A',
    tagline: "L'éveil de la vie, dans un écrin de lumière",
    intro:
      "Notre pôle de maternité accompagne chaque projet de parenthood, de la préparation à la naissance jusqu'au suivi post-partum. Chambre lumineuse, sage-femme présente en continu et équipe obstétricale de garde : tout est pensé pour que ce moment reste serein.",
    philosophy: [
      "Un projet de naissance personnalisé, construit avec votre sage-femme et votre obstétricien.",
      "Chambres parenthoodiales spacieuses, avec lit bébé, douche et lumière naturelle.",
      "Allaitement et retour précoce à domicile accompagnés par des spécialistes.",
      "Présence parentale permanente, y compris la nuit, selon les protocoles de la maison."
    ],
    procedures: [
      {
        slug: 'consultation-preconceptionnelle',
        name: 'Consultation preconceptionnelle',
        description:
          "Bilan de santé, dépistage, vaccination, optimisation des traitements et accompagnement nutritionnel.",
        duration: '45 min',
        icon: 'calendar-heart'
      },
      {
        slug: 'suivi-grossesse',
        name: 'Suivi de grossesse',
        description:
          "Consultations mensuelles, échographies de contrôle, dépistage du diabète gestationnel et de l'hypertension.",
        duration: '30 min',
        icon: 'baby'
      },
      {
        slug: 'acupuncture-perinee',
        name: 'Préparation périnéale par acupuncture',
        description:
          "Séances de préparation respiratoire et de préparation périnéale, en complément du travail.",
        duration: '45 min',
        icon: 'flower-2'
      },
      {
        slug: 'accouchement',
        name: 'Accouchement',
        description:
          "Accueil en salle d'accouchement, accompagnement continu et sécurité maternelle et néonatale.",
        duration: 'Variable',
        icon: 'heart-handshake'
      },
      {
        slug: 'cesarienne',
        name: 'Césarienne',
        description:
          "Indication obstétricale ou médicale, prise en charge anesthésique et accompagnement néonatal immédiat.",
        duration: 'Variable',
        icon: 'activity'
      },
      {
        slug: 'allaitement',
        name: 'Consultation d\'allaitement',
        description:
          "Diagnostic et ajustement de l'allaitement, gestion des difficultés et accompagnement au sevrage.",
        duration: '45 min',
        icon: 'milk'
      },
      {
        slug: 'post-partum',
        name: 'Suivi post-partum',
        description:
          "Visite à domicile, consultation du post-partum, dépistage de la dépression périnatale et contraception.",
        duration: '30 min',
        icon: 'sunrise'
      },
      {
        slug: 'depression-post-partum',
        name: 'Soutien périnatal',
        description:
          "Évaluation, orientation et suivi psychologique pour la mère, le couple et le nouveau-né.",
        duration: '45 min',
        icon: 'brain'
      }
    ],
    equipment: [
      {
        slug: 'monitorage-oeuvre',
        name: 'Monitoring du travail',
        description:
          'Cardio-tocographe avec suivi du rythme cardiaque fœtal et des contractions, alarme immédiate.',
        image: '/images/equipment/monitoring.svg'
      },
      {
        slug: 'echographie-obstetricale',
        name: 'Échographie obstétricale 3D/4D',
        description:
          'Imagerie haute définition avec imagerie de contraste, pour le suivi et la première rencontre.',
        image: '/images/equipment/echo3d.svg'
      },
      {
        slug: 'chambre-naissance',
        name: 'Chambres de naissance',
        description:
          'Espace de naissance avec bassin ergonomique, tapis, ballon et douche de dilatation.',
        image: '/images/equipment/chambre.svg'
      },
      {
        slug: 'couveuse',
        name: 'Couveuse & soins intensifs néonatals',
        description:
          'Matériel de réanimation néonatale et convention de prise en charge en unité de soins intensifs.',
        image: '/images/equipment/couveuse.svg'
      },
      {
        slug: 'laser-episiotomie',
        name: 'Bloc de réparation périnéale',
        description:
          'Salle dédiée avec matériel de suture fine, dispositifs antalgiques et laser réparateur.',
        image: '/images/equipment/perinee.svg'
      },
      {
        slug: 'cabinet-lactation',
        name: 'Cabinet de lactation',
        description:
          'Espace calme et équipement d\'aide à l\'allaitement, tire-lait professionnel et travail en réseau avec l\'hôpital maternel.',
        image: '/images/equipment/lactation.svg'
      }
    ],
    journey: [
      {
        step: '01',
        title: 'Préparation',
        description:
          "À partir du deuxième trimestre, des séances de préparation à la naissance et un projet de naissance validé avec votre sage-femme.",
        icon: 'book-open'
      },
      {
        step: '02',
        title: 'Accuel du travail',
        description:
          "Vous êtes installée dans la salle de naissance, avec la présence continue de votre sage-femme.",
        icon: 'door-open'
      },
      {
        step: '03',
        title: 'Naissance',
        description:
          "L'équipe médicale intervient uniquement si cela est nécessaire. L'accueil du nouveau-né se fait en salle, si vous le souhaitez.",
        icon: 'sparkles'
      },
      {
        step: '04',
        title: 'Séjour à la maternité',
        description:
          "Chambre parenthoodiale, allaitement à la demande, soutien de nuit et préparation de la sortie.",
        icon: 'bed'
      },
      {
        step: '05',
        title: 'Retour à domicile',
        description:
          "Visite à domicile par la sage-femme, consultation à 6 semaines et suivi de la croissance de l'enfant.",
        icon: 'home'
      }
    ],
    faq: [
      {
        question: 'Peut-on préparer un accouchement par voie naturelle ?',
        answer:
          "Chaque projet de naissance est discuté lors d'une consultation dédiée. L'accouchement spontané, la césarienne programmée et l'hospitalisation diffèrent sont expliqués et peuvent être anticipés."
      },
      {
        question: 'Le père peut-il rester la nuit ?',
        answer:
          "Oui, un lit d\'accompagnant est disponible dans chaque chambre parenthoodiale, y compris la nuit."
      },
      {
        question: 'Proposez-vous un accompagnement à l\'allaitement ?',
        answer:
          "Une sage-femme spécialiste de l'allaitement est présente chaque jour. Des consultations individuelles peuvent être programmées à tout moment du séjour et en ambulatoire."
      },
      {
        question: 'En cas de prématurité, que se passe-t-il ?',
        answer:
          "Nous disposons d'une unité de réanimation néonatale et de conventions avec deux hôpitaux universitaires, afin d'assurer la continuité des soins en cas de transfert."
      },
      {
        question: 'L\'accès à la chambre est-il possible pour la famille ?',
        answer:
          "Les visites sont autorisées entre 14 h et 19 h. Des visites encadrées sont possibles en dehors de ces horaires, en accord avec l'équipe soignante."
      }
    ],
    emergency: false,
    order: 2
  },
  {
    slug: 'chirurgie',
    name: 'Chirurgie',
    shortName: 'Chirurgie',
    icon: 'scalpel',
    image: '/images/departments/chirurgie.svg',
    accent: '#D4AF37',
    tagline: 'La précision, sans précipitation',
    intro:
      "Le bloc opératoire de Lumea réunit six salles, une unité de soins intensifs et un plateau d'imagerie intégré. Les interventions y sont conduites par des chirurgiens formés en France, en Suisse et en Belgique, dans des protocoles stricts d'hygiène et de sécurité.",
    philosophy: [
      "Information pré-opératoire détaillée, chiffrée et oralement reformulée par l'équipe.",
      "Visite du bloc et marquage du site opératoire avec le patient, pour une chirurgie recentrée sur vous.",
      "Protocoles de prévention du risque infectieux et de la thromboembolie, revus chaque semestre.",
      "Sortie rapide organisée, avec relais infirmier structuré et kinésithérapie à J+1."
    ],
    procedures: [
      {
        slug: 'chirurgie-generale',
        name: 'Chirurgie générale & viscérale',
        description:
          "Cœlioscopie, cholécystectomie, hernies, chirurgie digestive et gynécologique.",
        duration: '45 – 120 min',
        icon: 'scalpel'
      },
      {
        slug: 'chirurgie-orthopedique',
        name: 'Chirurgie orthopédique',
        description:
          "Arthroscopie, prothèses de hanche et de genou, ligamentoplastie et traumatologie.",
        duration: '60 – 180 min',
        icon: 'bone'
      },
      {
        slug: 'chirurgie-esthetique',
        name: 'Chirurgie esthétique',
        description:
          "Rhinoplastie, lifting cervico-facial, liposuccion et chirurgie mammaire, avec une prise en charge personnalisée.",
        duration: '60 – 240 min',
        icon: 'sparkle'
      },
      {
        slug: 'varices',
        name: 'Traitement des varices',
        description:
          "Échographie Doppler, radiofréquence endoveineuse, sclérothérapie et coagulation au laser.",
        duration: '45 – 90 min',
        icon: 'activity'
      },
      {
        slug: 'ambulatoire',
        name: 'Chirurgie ambulatoire',
        description:
          "Des interventions courtes sous anesthésie locale ou générale, avec retour à domicile le jour même.",
        duration: '< 4 h',
        icon: 'door-open'
      },
      {
        slug: 'urologie',
        name: 'Urologie',
        description:
          "Cystoscopie, prostate, lithotomie et chirurgie du rein, avec un plateau d\'endoscopie dédié.",
        duration: '45 – 150 min',
        icon: 'scan-line'
      },
      {
        slug: 'viscerale',
        name: "Chirurgie de l'hérnie",
        description:
          "Réparation par voie coelioscopique ou Ventrose, avec pose de mesh et reprise du travail rapide.",
        duration: '60 – 120 min',
        icon: 'circle-dot'
      },
      {
        slug: 'endoscopie',
        name: 'Endoscopie digestive',
        description:
          "Gastroscopie et coloscopie avec sédation, polypectomie et exploration complète du tube digestif.",
        duration: '30 – 60 min',
        icon: 'scan-heart'
      }
    ],
    equipment: [
      {
        slug: 'robot-laparoscopie',
        name: 'Chirurgie robotique & laparoscopie 4K',
        description:
          'Plateau d\'imagerie haute définition et instrumentation énergisée, pour des gestes reconstructeurs précis.',
        image: '/images/equipment/laparoscopie.svg'
      },
      {
        slug: 'bloc-iso',
        name: 'Salles à flux laminaire',
        description:
          'Six salles à flux laminaire avec gestion automatisée de la pression et de la température.',
        image: '/images/equipment/bloc.svg'
      },
      {
        slug: 'anesthesie',
        name: 'Anesthésie & monitorage',
        description:
          'Anesthésies titrées, machines d\'anesthésie avec moniteur multiparamétrique et echo-cardiographie peropératoire.',
        image: '/images/equipment/anesthesie.svg'
      },
      {
        slug: 'usize',
        name: 'Chirurgie laser',
        description:
          'Lasers chirurgicaux CO₂ et diode pour la chirurgie esthétique et la chirurgie ORL.',
        image: '/images/equipment/laser.svg'
      },
      {
        slug: 'reanimation-chirurgicale',
        name: 'Soins intensifs post-opératoires',
        description:
          'Unité de surveillance continue de 8 lits, avec kinésithérapie respiratoire intégrée.',
        image: '/images/equipment/usi.svg'
      },
      {
        slug: 'sterilisation',
        name: 'Stérilisation centrale',
        description:
          'Bloc de stérilisation à double contrôle, traçabilité de chaque instrument et contrôle de charge.',
        image: '/images/equipment/sterilisation.svg'
      }
    ],
    journey: [
      {
        step: '01',
        title: 'Consultation chirurgicale',
        description:
          "Le chirurgien explique l'indication, l Technique, les risques et les alternatives. Un devis est remis.",
        icon: 'clipboard-list'
      },
      {
        step: '02',
        title: 'Pré-opératoire',
        description:
          "Bilan biologique, consultation d'anesthésie, marquage du site et remise des consignes.",
        icon: 'notebook-pen'
      },
      {
        step: '03',
        title: 'Intervention',
        description:
          "Vous êtes prise en charge par un binôme anesthésiste-chirurgien. Vos proches sont informés en temps réel.",
        icon: 'scalpel'
      },
      {
        step: '04',
        title: 'Surveillance',
        description:
          "Passage en unité de surveillance continue ou en lit conventionnel selon le protocole.",
        icon: 'activity'
      },
      {
        step: '05',
        title: 'Retour à domicile',
        description:
          "Consignes écrites, kinésithérapie, contrôle à J+10 et reprise d\'activité progressive.",
        icon: 'home'
      }
    ],
    faq: [
      {
        question: 'Quels documents sont nécessaires avant une intervention ?',
        answer:
          "Une fiche de consentement éclairé, votre bilan sanguin de moins de trois mois, l'avis d'anesthésie et l'ordonnance de vos traitements. Une liste complète vous est remise en consultation."
      },
      {
        question: 'Combien de temps dois-je rester hospitalisé ?',
        answer:
          "Cela dépend de l'intervention. Une chirurgie ambulatoire permet un retour le jour même ; une opération plus lourde demande généralement trois à cinq jours."
      },
      {
        question: 'Acceptez-vous les opérations sous anesthésie locale ?',
        answer:
          "Oui, pour la chirurgie vasculaire, la chirurgie esthétique mineure et certains gestes endoscopiques. L'anesthésiste vous accompagne dans ce choix."
      },
      {
        question: 'Un accompagnant est-il nécessaire ?',
        answer:
          "Pour les sorties sous anesthésie générale, oui : un accompagnant majeur est requis pour le retour à domicile et doit rester la nuit."
      },
      {
        question: 'Comment se passe le suivi post-opératoire ?',
        answer:
          "Un contrôle est planifié à J+10, un autre à un mois, puis tous les trois à six mois selon le geste. Les suites mineures sont gérées par téléconsultation."
      }
    ],
    emergency: false,
    order: 3
  },
  {
    slug: 'imagerie',
    name: 'Imagerie médicale',
    shortName: 'Imagerie',
    icon: 'scan-line',
    image: '/images/departments/imagerie.svg',
    accent: '#EBCB6A',
    tagline: 'Voir clair, décider juste',
    intro:
      "Notre plateau d'imagerie est ouvert aux patients de la clinique comme aux médecins libéraux. Radiologie numérique, échographie, IRM et scanner de dernière génération sont pilotés par des praticiens formés à l'interpretation, qui remettent un compte rendu sous 48 heures.",
    philosophy: [
      "Protocoles d'imagerie adaptés à la situation clinique, en limitant l'irradiation.",
      "Comptes rendus rédigés par un radiologue, commentés et transmis au médecin traitant.",
      "Injections de contraste avec surveillance dédiée et traçabilité complète.",
      "Résultats expliqués au patient, jamais remis sans commentaire."
    ],
    procedures: [
      {
        slug: 'radiographie',
        name: 'Radiographie numérique',
        description:
          'Radiographies standard, panoramique et contrastée, dans une salle numérique à faible dose.',
        duration: '10 – 20 min',
        icon: 'scan-line'
      },
      {
        slug: 'echographie',
        name: 'Échographie',
        description:
          'Échographie abdominale, thyroïde, gynécologique, cardiaque (Doppler) et obstétricale.',
        duration: '20 – 30 min',
        icon: 'waves'
      },
      {
        slug: 'doppler',
        name: 'Doppler vasculaire',
        description:
          'Exploration des veines et des artères, mesure de l\'indice de pression et cartographie des varices.',
        duration: '30 min',
        icon: 'activity'
      },
      {
        slug: 'irm',
        name: 'IRM',
        description:
          'IRM cérébrale, rachidienne, articulaire, pelvienne et abdominelle, avec injection possible.',
        duration: '30 – 60 min',
        icon: 'brain'
      },
      {
        slug: 'scanner',
        name: 'Scanner',
        description:
          'Scanner multib-coupé avec reconstruction 3D, fenêtrage optimisé et faible dose.',
        duration: '10 – 20 min',
        icon: 'box'
      },
      {
        slug: 'mammographie',
        name: 'Mammographie & densitométrie',
        description:
          'Mammographie numérique, tomosynthèse 3D et mesure de densité mammaire.',
        duration: '30 min',
        icon: 'circle-dot'
      },
      {
        slug: 'osteodensitometrie',
        name: 'Ostéodensitométrie',
        description:
          'Mesure de la densité osseuse (DEXA) pour le diagnostic et le suivi de l\'ostéoporose.',
        duration: '20 min',
        icon: 'bone'
      },
      {
        slug: 'holter',
        name: 'Holter & échographie cardiaque',
        description:
          'Enregistrement ECG sur 24 ou 72 heures et échographie cardiaque avec fonction systolique.',
        duration: '30 – 45 min',
        icon: 'heart-pulse'
      }
    ],
    equipment: [
      {
        slug: 'irm-3tesla',
        name: 'IRM 3 Tesla',
        description:
          'IRM à haut champ, chambre ouverte et excellente qualité d\'image en moins de 45 minutes.',
        image: '/images/equipment/irm.svg'
      },
      {
        slug: 'scanner-coupe',
        name: 'Scanner 128 coupes',
        description:
          'Acquisition très rapide, faible dose et reconstruction multiplanaire systématique.',
        image: '/images/equipment/scanner.svg'
      },
      {
        slug: 'plateau-radiologie',
        name: 'Plateau de radiologie numérique',
        description:
          'Salles blindées, suspensions, écrans à haute définition et zone de contrôle.',
        image: '/images/equipment/radiologie.svg'
      },
      {
        slug: 'echo-cardiographie',
        name: 'Échographie cardiaque',
        description:
          'Échocardiographie Doppler couleur et tissulaire, avec mesure de la fonction diastolique.',
        image: '/images/equipment/echo.svg'
      },
      {
        slug: 'mammographie-3d',
        name: 'Mammographie 3D',
        description:
          'Tomosynthèse et biopsie sous guidage stéréotaxique pour le diagnostic des lésions.',
        image: '/images/equipment/mammographie.svg'
      },
      {
        slug: 'injection',
        name: 'Salle d\'injection & surveillance',
        description:
          'Injecteur automatique, surveillance hémodynamique et salle de repos dédiée aux réactions possibles.',
        image: '/images/equipment/injection.svg'
      }
    ],
    journey: [
      {
        step: '01',
        title: 'Prescription',
        description:
          "Votre médecin vous adresse une demande d'imagerie précise. Sans ordonnance, certains examens ne peuvent pas être réalisés.",
        icon: 'file-text'
      },
      {
        step: '02',
        title: 'Accueil & check-list',
        description:
          "Vérification des contre-indications, retrait des objets métalliques et de la prothèse de dilatation si nécessaire.",
        icon: 'clipboard-check'
      },
      {
        step: '03',
        title: 'Examen',
        description:
          "L'imageur ou le radiologue vous accueille, vous explique l'examen et adapte les consignes à votre situation.",
        icon: 'scan-line'
      },
      {
        step: '04',
        title: 'Comptes rendus',
        description:
          "Le compte rendu est rédigé puis relu. Il est transmis à votre médecin traitant dans un délai de 48 heures.",
        icon: 'file-check-2'
      },
      {
        step: '05',
        title: 'Explication',
        description:
          "Un temps d'échange est prévu pour vous expliquer les résultats sans interprétation alarmiste.",
        icon: 'message-circle'
      }
    ],
    faq: [
      {
        question: 'Faut-il une ordonnance pour passer une IRM ou un scanner ?',
        answer:
          "Oui. Pour les examens irradiants et l'IRM, une prescription est obligatoire. Pour une échographie, elle est recommandée mais non obligatoire."
      },
      {
        question: 'Que faire si je suis enceinte ou susceptible d\'être enceinte ?',
        answer:
          "Signalez-le systématiquement avant l'examen. L'IRM sans injection est possible ; les examens irradiants sont reportés ou remplacés par une échographie."
      },
      {
        question: 'Combien de temps faut-il attendre pour les résultats ?',
        answer:
          "Les comptes rendus standards sont transmis sous 48 heures ouvrées. Un compte rendu urgent est disponible le jour même sur demande du médecin prescripteur."
      },
      {
        question: 'L\'examen est-il douloureux ?',
        answer:
          "L'IRM et le scanner sont indolores mais bruyants et exigent de rester immobile. Pour la claustrophobie, un accompagnant et un casque de musique vous sont proposés."
      },
      {
        question: 'Puis-je venir sans rendez-vous ?',
        answer:
          "Pour l'échographie et la radiographie, la prise de rendez-vous est nécessaire afin de garantir un délai d'attente court et un équipement libre."
      }
    ],
    emergency: false,
    order: 4
  }
];

export function getDepartment(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug);
}

export function getDepartmentsSorted(): Department[] {
  return [...departments].sort((a, b) => a.order - b.order);
}
