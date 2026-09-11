# Portfolio — Eugène Jonathan Manguithre

Portfolio one-page (développeur Full Stack — Laravel & Vue.js).

## Démarrage

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + build de production (dist/)
```

## Scripts

| Script            | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Serveur de dev Vite                                                |
| `npm run build`   | `vue-tsc --noEmit` puis `vite build` (bloqué si erreur de types)   |
| `npm run typecheck` | Contrôle des types sans émission                                 |
| `npm run lint`    | ESLint (`--fix`) sur `src/**/*.{js,ts,vue}`                        |
| `npm run format`  | Prettier sur `src/**/*.{js,ts,vue}`                                |

## Stack

- **Vue 3** (`<script setup>`) + **TypeScript**
- **Tailwind CSS v4** — config CSS-first dans `src/style.css` (bloc `@theme`)
- **VueUse** (`@vueuse/core`)
- **unplugin-auto-import** + **unplugin-vue-components** — aucun import manuel pour `vue`, `@vueuse/core`, les composables (`src/composables`) ni les composants (`src/components`)
- **ESLint** (flat config) + **Prettier**
- Polices : Poppins + DM Mono (Google Fonts, `index.html`)

## Structure

```
src/
├── components/     # Vues : Hero, Services, Projects, Resume, Skills, Contact,
│                   # Navbar, StatusBar, CommandPalette, BackToTop, Footer,
│                   # Reveal, SectionHeading  (auto-enregistrés)
├── composables/    # useTheme, useClock, useActiveSection, useTypewriter
│                   #  (auto-importés)
├── data/profile.ts # Tout le contenu du site (nom, exp, projets, skills)
├── style.css       # Tokens @theme + styles (fenêtres, boutons, curseur…)
└── main.ts
```

## Personnalisation

- **Contenu** : tout est dans `src/data/profile.ts` (y compris les niveaux de skills).
- **CV** : remplacer `public/resume.pdf`.
- **Couleurs / tokens** : bloc `@theme` de `src/style.css`.
- **Raccourci palette** : `Ctrl+K` ou `/` (traitement dans `src/components/CommandPalette.vue`).

## Notes

- Dark mode par défaut, préférence persistée dans `localStorage` (`theme`).
- Horloge de Toamasina : fuseau `Indian/Antananarivo` avec repli UTC+3 manuel
  (`src/composables/useClock.ts`).
- Projets = travail client, captures confidentielles (NDA).

## Déploiement

Vercel, Netlify ou Cloudflare Pages — build `npm run build`, output `dist/`.
