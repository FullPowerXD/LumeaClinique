# LUMEA CLINIQUE — Site vitrine

Site vitrine trilingue (français / anglais / arabe avec RTL) de **LUMEA CLINIQUE**,
clinique privée de médecine, chirurgie, maternité et esthétique.

Stack : Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 ·
next-intl 3 · Framer Motion · lucide-react.

---

## 1. Démarrage rapide

```bash
npm install          # installation des dépendances
npm run dev          # http://localhost:3000  (redirige vers /fr)
```

| Script              | Rôle                                              |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Serveur de développement (HMR)                    |
| `npm run build`     | Build de production + prerendering des 110 pages  |
| `npm run start`     | Serveur de production (après `build`)             |
| `npm run lint`      | ESLint (config Next.js + TypeScript)              |
| `npm run lint:fix`  | ESLint avec correction automatique                |
| `npm run typecheck` | `tsc --noEmit`                                    |

**Prérequis** : Node.js ≥ 18.18 (testé sur Node 24). Aucune base de données n'est
requise : toutes les données sont des modules TypeScript statiques.

### Variables d'environnement

Copiez `.env.example` vers `.env.local` :

```bash
cp .env.example .env.local
```

Seule variable réellement utilisée à ce jour : `NEXT_PUBLIC_SITE_URL` (URL canonique,
utilisée par les métadonnées, le sitemap et les balises Open Graph).

---

## 2. Internationalisation

| Locale | Code | RTL | Rôle                                    |
| ------ | ---- | --- | --------------------------------------- |
| Français | `fr` | non | Langue par défaut                       |
| Anglais  | `en` | non |                                         |
| Arabe    | `ar` | oui  | Arabe standard, direction `dir="rtl"`   |

- Tous les chemins sont préfixés par la locale (`/fr/contact`, `/en/contact`, `/ar/contact`).
  `/` est redirigé vers `/fr` par le middleware (`src/middleware.ts`).
- Les fichiers de traduction se trouvent dans `src/i18n/messages/{fr,en,ar}.json`.
  Ils doivent rester **strictement parallèles** (même nombre de clés, même arborescence).
- L'arborescence de clés est identique dans les trois fichiers. Toute nouvelle clé
  doit être ajoutée aux trois langues.
- Les contenus longs (départements, praticiens, articles, FAQ, témoignages, hôtels)
  vivent dans `src/data/` et sont **en français uniquement** : voir §7.

### Ajouter ou modifier une traduction

```tsx
// Composant serveur
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations();
  return <h1>{t('home.hero.title')}</h1>;
}
```

```tsx
// Composant client
'use client';
import { useTranslations } from 'next-intl';

export default function Section() {
  const t = useTranslations('home');
  const tc = useTranslations('common');
  return <h1>{t('hero.title')}</h1>;
}
```

> ⚠️ `NextIntlClientProvider` est alimenté explicitement par `getMessages()` dans
> `src/app/[locale]/layout.tsx`. Sans cela, les composants clients ne reçoivent aucune
> traduction.

### Ajouter une locale

1. Ajouter le code dans `src/i18n/routing.ts` (`locales`, `localeMeta`).
2. Créer `src/i18n/messages/<code>.json` à partir de `fr.json`.
3. Déclarer la direction dans `src/i18n/routing.ts` (`isRtl`).
4. Ajouter les polices (`src/styles/fonts.css`) et les variantes de la page 404.

---

## 3. Arborescence du projet

```
src/
├─ app/
│  ├─ globals.css              # reset, utilitaires de design (container-luxe, eyebrow, card-luxe…)
│  ├─ robots.ts                # robots.txt
│  ├─ sitemap.ts               # sitemap.xml (3 locales + pages dynamiques)
│  └─ [locale]/
│     ├─ layout.tsx            # layout racine : metadata, polices, header/footer, RTL
│     ├─ not-found.tsx         # 404 localisée
│     ├─ error.tsx             # page d'erreur localisée
│     ├─ opengraph-image.tsx   # image Open Graph générée (1200×630)
│     ├─ [...rest]/page.tsx    # route de secours → 404 localisée
│     ├─ a-propos/  galerie/  journal/  departements/  praticiens/
│     ├─ rendez-vous/  vip/  contact/  infos-pratiques/  questions-frequentes/
│     └─ mentions-legales/  confidentialite/  cookies/  conditions/
├─ components/
│  ├─ common/    # Accordion, Breadcrumbs, Logo, PageHero
│  ├─ forms/     # AppointmentForm, ContactForm, VipForm
│  ├─ gallery/   # GalleryGrid
│  ├─ home/      # Hero, StatsBar, DepartmentsGrid, WhyLumea, CtaBanner, …
│  ├─ layout/    # Header, Footer, FloatingActions, CookieBanner, Preloader
│  ├─ legal/     # LegalContent (mentions, confidentialité, cookies, CGV)
│  ├─ practitioners/ # PractitionerCard, PractitionerDirectory
│  └─ ui/        # Button, Reveal, SectionHeading
├─ data/         # site, departments, practitioners, blog, faq, gallery, hotels, insurances, testimonials
├─ i18n/         # routing.ts, request.ts, navigation.ts, messages/
├─ lib/          # utils.ts (cn)
├─ styles/       # fonts.css (38 @font-face), font-preload.json
└─ types/        # index.ts
```

---

## 4. Routes

| URL                      | Page                                  |
| ------------------------ | ------------------------------------- |
| `/`                      | Redirection vers `/fr`                |
| `/[locale]`              | Accueil                               |
| `/[locale]/a-propos`     | La clinique                           |
| `/[locale]/departements` | Liste des départements                |
| `/[locale]/departements/[slug]` | Fiche département (JSON-LD `MedicalClinic`) |
| `/[locale]/praticiens`   | Annuaire filtrable                    |
| `/[locale]/praticiens/[slug]` | Fiche praticien (JSON-LD `Physician`) |
| `/[locale]/rendez-vous`  | Prise de rendez-vous (3 étapes)       |
| `/[locale]/vip`          | Accompagnement VIP                    |
| `/[locale]/infos-pratiques` | Accès, transports, paiement, FAQ   |
| `/[locale]/contact`      | Contact                               |
| `/[locale]/galerie`      | Galerie filtrable                     |
| `/[locale]/journal`      | Blog                                  |
| `/[locale]/journal/[slug]` | Article (JSON-LD `Article`)         |
| `/[locale]/questions-frequentes` | FAQ                             |
| `/[locale]/mentions-legales` | Mentions légales                   |
| `/[locale]/confidentialite` | Politique de confidentialité        |
| `/[locale]/cookies`      | Politique de cookies                  |
| `/[locale]/conditions`   | Conditions générales de vente         |
| `/sitemap.xml` `/robots.txt` | SEO                             |

Les chemins internes doivent utiliser le `Link` de `@/i18n/navigation` (et non
`next/link`) pour conserver la locale courante :

```tsx
import { Link } from '@/i18n/navigation';
<Link href="/praticiens">Praticiens</Link>
```

---

## 5. Polices

Les polices sont **auto-hébergées** (aucune requête à un tiers) :

- `public/fonts/*.woff2` — 38 fichiers générés à partir de `public/fonts/fonts.json`
  (Cormorant Garamond, Montserrat, Noto Naskh Arabic, Tajawal).
- `src/styles/fonts.css` — règles `@font-face` (importées par `src/app/globals.css`).
- `src/styles/font-preload.json` — les 7 fichiers critiques, injectés en `<head>`
  par `src/app/[locale]/layout.tsx`.

> `next/font/local` de Next 15.5 ne gère pas `unicodeRange` ; les règles `@font-face`
> ont donc été écrites manuellement. Toute modification de `fonts.css` doit garder un
> bloc de commentaire **fermé** (`/* … */`) en tête de fichier.

Variables CSS : `--font-display` (titres) et `--font-sans` (textes), voir
`src/app/globals.css`.

---

## 6. SEO et métadonnées

- Metadata par page via `generateMetadata()` (`title`, `description`, `alternates`,
  `canonical` et lien vers les versions traduites).
- `src/app/sitemap.ts` : 3 locales × (pages statiques + départements + praticiens + articles).
- `src/app/robots.ts`.
- Image Open Graph générée dynamiquement : `src/app/[locale]/opengraph-image.tsx`.
- JSON-LD : `MedicalClinic`, `Physician`, `Article`.
- Langue du document : `lang` + `dir` définis dans `src/app/[locale]/layout.tsx`.

---

## 7. Contenu : ce qui reste à faire avant la mise en ligne

Le contenu éditorial long est **centralisé dans `src/data/`** et actuellement rédigé en
français. Pour une diffusion réelle en trois langues, il faudra :

1. soit internationaliser les fichiers de `src/data/` (recommandé à terme) ;
2. soit alimenter ces contenus depuis un CMS ou une API.

Ces points sont volontairement isolés dans les modules `src/data/*` pour que le
remplacement soit simple.

### Points de vigilance (valeurs de démonstration)

| Emplacement                | Valeur actuelle                       | Action requise            |
| -------------------------- | ------------------------------------- | ------------------------- |
| `src/data/site.ts`         | `+216 71 000 000`, `12, avenue de la Lumière…` | Remplacer par les coordonnées réelles |
| `src/data/site.ts`         | `bonjour@lumea-clinique.com`          | Remplacer                 |
| `src/data/site.ts`         | `Lumea Clinique SARL`                 | Vérifier la raison sociale |
| `src/i18n/messages/*.json` | Texte des mentions légales / cookies   | Faire valider par un juriste |
| `public/images/**`         | Illustrations SVG de substitution     | Remplacer par les photographies réelles |
| `src/components/forms/*`   | Soumission simulée côté client        | Connecter un service d'e-mail transactionnel |

Les formulaires (`AppointmentForm`, `ContactForm`, `VipForm`) valident et simulent
l'envoi (900 ms) : aucune donnée n'est transmise aujourd'hui.

---

## 8. Accessibilité et performance

- Lien d'évitement vers `#main-content` en tête de page (`common.skipToContent`).
- Navigation clavier, `aria-label` sur les actions icônes uniquement, focus visible
  (`ring-gold`).
- Textes alternatifs sur les images porteuses de sens ; images décoratives en `alt=""`.
- `next/image` avec `sizes` explicites, images en `fill` avec conteneur `relative`.
- Animations CSS neutralisées si l'utilisateur préfère moins de mouvement
  (`prefers-reduced-motion`, `src/app/globals.css`).

---

## 9. Déploiement

Le projet est prêt pour un déploiement Vercel ou sur un Node.js ≥ 18.18 :

```bash
npm run build
npm run start
```

Checklist de mise en production :

1. `NEXT_PUBLIC_SITE_URL` = domaine final.
2. Remplacer les coordonnées et les contenus de démonstration (§7).
3. Remplacer les images de substitution par les photographies réelles (formats AVIF/WebP).
4. Faire valider les pages légales.
5. Brancher les formulaires sur un service d'e-mail transactionnel.
6. Vérifier `https://www.lumea-clinique.com/sitemap.xml` et `robots.txt`.
7. Activer le certificat SSL et la redirection `www` → apex (ou l'inverse).

---

## 10. Conventions de code

- TypeScript strict, alias `@/` → `src/`.
- Composants serveur par défaut ; `'use client'` uniquement pour l'interactivité.
- `cn()` (`src/lib/utils.ts`) pour composer les classes Tailwind.
- Les couleurs, espacements et rayons viennent exclusivement des tokens de
  `tailwind.config.ts` — pas de valeurs arbitraires.
- Voir `STYLEGUIDE.md` pour les règles de design et de contenu.
