# STYLEGUIDE — LUMEA CLINIQUE

Guide de style du site : identité visuelle, typographie, composants, motion, RTL,
accessibilité et ton éditorial. Toute nouvelle page doit respecter ces règles.

---

## 1. Intention de marque

> **L'excellence médicale, sublimée par la lumière.**

La clinique est un écrin, pas un centre de soins. Le design est **blanc, calme et
précis** : la lumière est le fil conducteur (photos aérées, aplats ivoire, reflets
dorés discrets). Le luxe vient de l'espace, de la typographie et du silence — jamais
d'effets appuyés.

Trois principes :

1. **Blanc d'abord** — le blanc (`#FFFFFF`) et l'ivoire (`#FBF7F0`) sont le fond de
   référence. L'or n'est jamais un aplat de fond, toujours un accent.
2. **Aération** — sections hautes (`py-20 lg:py-28`), lignes de texte à 1.85, jamais
   demur de contenu.
3. **Précision clinique** — typographie nette, grilles strictes, chiffres tabulaires,
   aucun effet qui gêne la lecture.

---

## 2. Palette

### Couleurs de base

| Token        | Hex       | Usage                                                |
| ------------ | --------- | ---------------------------------------------------- |
| `white`      | `#FFFFFF` | Fond principal, cartes, surfaces                      |
| `ivory`      | `#FBF7F0` | Fond de section alterné, panneaux                   |
| `champagne`  | `#F4E9D8` | Filets, badges doux                                   |
| `ink`        | `#2B2B2B` | Titres, texte principal                               |
| `ink-soft`   | `#6B6B6B` | Texte courant, légendes                              |
| `ink-mute`   | `#9A9A9A` | Texte tertiaire, placeholders                        |
| `ink-line`   | `#E8E2D8` | Bordures, séparateurs                                 |

### Or (accent)

| Token       | Hex       | Usage                                       |
| ----------- | --------- | ------------------------------------------- |
| `gold-50`   | `#FBF5E3` | Fonds d'icônes, badges très clairs          |
| `gold-100`  | `#F5D77A` | Fonds de bouton secondaire                   |
| `gold-200`  | `#EBCB6A` | Bordures de champs en focus                 |
| `gold-300`  | `#D4AF37` | **Or de marque** (couleur par défaut)       |
| `gold-400`  | `#C09A28` | Finitions actives, dégradés                  |
| `gold-500`  | `#9C7A1E` | Texte doré lisible sur fond clair (eyebrow) |
| `gold-600`  | `#84641A` | Texte doré au survol, icônes actives        |
| `gold-700`   | `#6B4F14` | Texte doré sur fond sombre                  |

**Règle :** l'or habille, il ne remplit jamais une section. Un aplat doré est
admis pour un bouton principal, un filet, une bordure ou un dégradé
(`bg-gold-gradient`).

### Dégradés

| Token          | Usage                                            |
| -------------- | ------------------------------------------------ |
| `gold-gradient`| Boutons principaux (135°)                        |
| `gold-soft`    | Fonds de boutons secondaires                      |
| `ivory-fade`   | Dégradé vertical blanc → ivoire                  |
| `sheen`        | Reflet qui traverse les cartes premium           |

### Sur fond sombre (`bg-ink`)

Texte blanc ou `white/65` pour le corps, `gold-300` pour les accents. Jamais
`ink-soft` sur `ink` : le contraste doit rester ≥ 4.5:1.

---

## 3. Typographie

### Familles

| Rôle         | Variable CSS      | Police            |
| ------------ | ----------------- | ----------------- |
| Titres       | `--font-display`  | Cormorant Garamond |
| Textes       | `--font-sans`     | Montserrat        |
| Arabe (titres) | `--font-display` | Noto Naskh Arabic |
| Arabe (textes) | `--font-sans`  | Tajawal           |

Les polices sont auto-hébergées (`public/fonts`), déclarées dans
`src/styles/fonts.css`.

### Échelle

| Classe          | Taille                              | Usage                              |
| --------------- | ----------------------------------- | ---------------------------------- |
| `display-lg`    | `clamp(2.75rem, 1.5rem + 5vw, 5.5rem)` | Titre de hero                |
| `display-md`    | `clamp(2.25rem, 1.4rem + 3.4vw, 4rem)` | Titre de section              |
| `display-sm`    | `clamp(1.75rem, 1.2rem + 2.2vw, 2.75rem)` | Titre de sous-section       |
| `text-2xs`      | `0.6875rem`, tracking `0.18em`      | Eyebrow, label de champ           |
| `body-luxe`     | `0.975rem`, line-height `1.85`      | Paragraphe courant                |
| `prose-luxe`    | `1.05rem`, line-height `1.9`         | Texte long, articles, légal       |

### Règles

- Les titres sont en `font-display`, jamais en majuscules sauf les eyebrows.
- Le corps de texte est toujours en `font-sans`, `text-ink-soft` (`body-luxe`).
- Les chiffres clés (statistiques, horaires, prix) sont alignés et lisibles ;
  ne pas les animer au-delà d'un fondu.
- Un seul `h1` par page. Les niveaux ne sont jamais sautés.

---

## 4. Mise en page

- Conteneur : `.container-luxe` — `max-width: 1400px`, gouttières
  `px-5 / sm:px-8 / lg:px-12 / xl:px-16`.
- Sections : `py-20 lg:py-28`. Les sections alternées `bg-white` / `bg-ivory`.
- Grilles : `grid gap-8 lg:gap-16` pour deux colonnes, `lg:grid-cols-12` avec
  `col-span-6 / 7 / 5` pour les pages de contenu.
- Rayons : `rounded-2xl` (champs, boutons), `rounded-3xl` (panneaux),
  `rounded-4xl` (cartes, sections), `rounded-full` (pilules, avatars).
- Ombres : `shadow-soft` (repos), `shadow-lift` (survol), `shadow-glow` (bouton
  principal), `shadow-inset` (finitions claires).

### Utilitaires maison (`src/app/globals.css`)

| Classe          | Rôle                                                     |
| --------------- | -------------------------------------------------------- |
| `container-luxe`| Conteneur principal                                      |
| `eyebrow`       | Sur-titre doré, majuscules, tracking large               |
| `section-title` | Titre de section responsive                              |
| `body-luxe`     | Paragraphe standard                                      |
| `gold-rule`     | Filet doré dégradé de 48 px                              |
| `card-luxe`     | Carte blanche bordée avec élévation au survol            |
| `glass-panel`   | Panneau translucide (backdrop blur)                      |
| `field` / `label-field` | Champ de formulaire et son label                  |
| `prose-luxe`    | Corps de texte long                                      |
| `hairline`      | Séparateur horizontal                                    |

---

## 5. Composants

### Boutons

```tsx
// Principal — une seule fois par section
className="inline-flex items-center rounded-full bg-gold-gradient px-8 py-4
           text-sm font-semibold text-white shadow-glow transition-all duration-500
           ease-luxe hover:shadow-lift"

// Secondaire — contour
className="inline-flex items-center rounded-full border border-ink-line bg-white
           px-8 py-4 text-sm font-medium text-ink transition-all duration-500
           ease-luxe hover:border-gold-400 hover:text-gold-600"
```

- Un seul bouton principal par zone de décision.
- Toujours `rounded-full`, `px-8 py-4`, `text-sm font-semibold`.
- Les boutons sont des `<Link>` de `@/i18n/navigation` (jamais `<a href>` interne).

### Cartes

- Fond blanc, bordure `border-ink-line/70`, rayon `rounded-4xl`, `shadow-soft`.
- Survol : élévation `-translate-y-1` + `shadow-lift` (voir `.card-luxe`).
- Contenu aligné sur une grille, images en ratio 4/3 ou 16/10.

### Formulaires

- Champs : `.field` (classe utilitaire) ou la variante locale `fieldClass` pour
  contrôler l'état d'erreur.
- Labels : `.label-field` (majuscules, `text-2xs`, tracking `0.18em`).
- Champs d'erreur : bordure rouge et message sous le champ, jamais uniquement
  par la couleur.
- Toute soumission passe par un état local `idle | sending | success | error`.
- Les formulaires sont aujourd'hui **simulés** ; le branchement backend se fait
  dans `submit()` de chaque composant `src/components/forms/*`.

### Sections

Une section = `<section>` + `<div className="container-luxe">` + titre (`SectionHeading`)
+ contenu. Les séparations se font par le fond (`bg-white` / `bg-ivory`) plutôt que
par des filets.

---

## 6. Mouvement

| Token       | Durée  | Courbe                          |
| ----------- | ------ | ------------------------------- |
| Micro       | 300 ms | `ease-luxe`                     |
| Standard    | 400 ms | `ease-luxe`                     |
| Signature   | 500 ms | `ease-luxe`                     |
| Révélation  | 850 ms | `cubic-bezier(0.22, 1, 0.36, 1)` |

- Courbe unique : `ease-luxe` (`cubic-bezier(0.22, 1, 0.36, 1)`).
- Les apparitions au défilement utilisent `<Reveal>` (y = 24 px, délai décalé
  de 50–60 ms entre éléments).
- Le hover : 300–500 ms, jamais plus.
- Les animations CSS décoratives (`star-twinkle`, `gold-dust`, `soft-float`) sont
  réservées au hero et à la page VIP.
- `prefers-reduced-motion: reduce` neutralise animations et transitions.

---

## 7. Images

- Toutes les images passent par `next/image` avec `sizes` explicite.
- Les images plein écran utilisent `fill` + un conteneur `relative` + `object-cover`.
- Les images décoratives portent `alt=""` et `aria-hidden`.
- Les images de contenu passent en AVIF/WebP ; le JPEG n'est conservé que pour le
  logo original.
- Cadre : lumière naturelle dominante, tons chauds, aucun rendu « clinique froid ».
- Les replacements de `public/images/**` sont des SVG de substitution : les
  remplacer par les photographies réelles au format 3:2 ou 16:9.

---

## 8. RTL (arabe)

- `dir="rtl"` est posé sur `<html>` par `src/app/[locale]/layout.tsx`.
- Ne jamais utiliser `left/right` en CSS : préférer `start/end`
  (`text-start`, `ms-*`, `me-*`, `ps-*`, `pe-*`).
- Les icônes directionnelles (flèches) doivent être inversées via `rtl:-scale-x-100`
  ou via une variante.
- Les nombres et les horaires restent en format occidental (LTR) — utiliser
  `dir="ltr"` sur ces éléments (`<span dir="ltr">+216 71 000 000</span>`).
- Les polices arabes (`Noto Naskh Arabic`, `Tajawal`) sont déclarées avec des
  `unicode-range` spécifiques ; vérifier qu'une chaîne arabic n'hérite pas de la
  police latine.

---

## 9. Accessibilité

- Lien d'évitement « Aller au contenu » en première position.
- Contrastes : texte principal ≥ 7:1 sur blanc, texte secondaire ≥ 4.5:1,
  or `gold-500` uniquement au-dessus de 18 px ou en gras.
- Focus visible partout : ring `gold-300` + offset blanc.
- Boutons icônes : `aria-label` obligatoire.
- Formulaires : `<label>` relié au champ, erreurs en texte.
- Titres : hiérarchie stricte, un `h1` par page.
- Contenu des carrousels accessible au clavier.

---

## 10. Ton éditorial

- **Français** : chaleureux, soigné, sans familiarité. « Vous » toujours.
- **Anglais** : international, clair, sans calque du français.
- **Arabe** : arabe standard moderne, registrepoli.
- Interdits : jargon médical non expliqué, promesses de guérison, comparaison
  concurrentielle, emergency-style marketing.
- Toujours : la durée de la consultation, la disponibilité, le confort.
- Les coordonnées, noms de praticiens et chiffres sont des données réelles :
  ne jamais les inventer ni les remplacer par des valeurs de démonstration.

---

## 11. Checklist avant publication

- [ ] Couleurs issues des tokens uniquement.
- [ ] Un seul `h1`, hiérarchie de titres correcte.
- [ ] Lien d'évitement et focus visibles testés au clavier.
- [ ] Version arabe vérifiée en RTL (pas de débordement horizontal).
- [ ] Texte alternatif sur chaque image porteuse de sens.
- [ ] Traductions FR / EN / AR synchronisées (même nombre de clés).
- [ ] Mentions légales relues et validées.
- [ ] `npm run typecheck && npm run lint && npm run build` sans erreur.
