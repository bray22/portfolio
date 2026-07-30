# Ben Ray Portfolio

A modern, responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS. It showcases selected work, experience, technical expertise, and contact links in a polished single-page layout with animated sections and interactive case studies.

## Highlights

- Hero section with animated project carousel and responsive 3D-style presentation
- Selected work section with detailed case studies for key client projects
- Experience timeline covering work history and education
- Technology section grouped by workflow and stack category
- About section with personal strengths and quick intro
- Contact section with email and LinkedIn calls to action
- Mobile-friendly navigation and GitHub Pages deployment support

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- React Three Fiber / Drei
- Lucide icons
- Three.js

## Project Structure

- `src/App.tsx` - main page composition
- `src/components/` - reusable sections, cards, icons, and layout pieces
  - `src/components/cards/` - card-style UI primitives (`GlassCard`, `LightCard`)
  - `src/components/icons/` - inline SVG icon components (GitHub, LinkedIn, monogram)
- `src/data/` - portfolio content for work, tech, and strengths (`caseStudies.ts`, `tech.ts`, `strengths.ts`)
- `src/animations/` - shared Framer Motion variants (`motion.ts`)
- `src/images/` - local screenshots, logos, and profile assets
- `src/assets/` - misc static assets bundled by Vite (e.g. `hero.png`)
- `public/` - static assets served directly by Vite

## Getting Started

### Prerequisites

- Node.js 20 (the version pinned in `.github/workflows/static.yml`; no `engines` field is enforced locally)
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Styling

- **Tailwind CSS 4** is the primary styling layer, wired in via the `@tailwindcss/vite` plugin in `vite.config.ts` - there is no separate `tailwind.config.js`; Tailwind is imported directly with `@import "tailwindcss";` at the top of `src/index.css`.
- `src/index.css` also holds the small set of global, non-utility styles: smooth scrolling (`html { scroll-behavior: smooth }`), base body background/font (`Inter` with system-font fallbacks), and min-height resets for `body`/`#root`.
- Components are styled almost entirely with Tailwind utility classes directly in JSX (no CSS modules or styled-components in use). `src/App.css` is a leftover from the original Vite template and is not imported by `src/App.tsx` or `src/main.tsx`.
- Motion/animation is handled with **Framer Motion**, with reusable variants centralized in `src/animations/motion.ts` (e.g. `fadeUp`, `stagger`) so sections can share consistent enter/stagger timing instead of redefining transitions inline.
- 3D/WebGL visuals (hero background, morphing shapes) are built with **React Three Fiber**, **Drei**, and **Three.js**, layered underneath the Tailwind-styled content.

## TypeScript

- The project uses TypeScript project references, split across three configs:
  - `tsconfig.json` - root config with no direct compiler options; references the two configs below
  - `tsconfig.app.json` - app source (`src/`), targeting `ES2023`, `moduleResolution: "bundler"`, JSX via `react-jsx`, `verbatimModuleSyntax`, and `noEmit` (Vite/esbuild handles actual transpilation)
  - `tsconfig.node.json` - config-only scope (`vite.config.ts`), targeting Node's module/types environment
- Both configs enable stricter linting-adjacent compiler options: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, and `erasableSyntaxOnly`.
- `npm run build` runs `tsc -b` (a project-references build/type-check) before `vite build`, so type errors will fail the build rather than only surfacing in the editor.
- ESLint is configured with `typescript-eslint`'s recommended rules (`eslint.config.js`) alongside `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`, but does not currently use the type-aware (`recommendedTypeChecked`/`strictTypeChecked`) rule sets.

## Testing

- There is currently **no automated test suite** in this repo - no Vitest/Jest, no component or unit tests, and no test scripts in `package.json`.
- The only automated checks today are `npm run build` (type-checking via `tsc -b`) and `npm run lint` (ESLint). Both are worth running before pushing changes.
- If you add tests, `Vitest` is the natural fit given the existing Vite tooling (shares config and transform pipeline with the app), paired with `@testing-library/react` for component-level tests.

## Deployment

The site is configured for GitHub Pages deployment with:

- `vite.config.ts` base path set to `/portfolio/`
- `.github/workflows/static.yml` for automated deploys on push to `main`
- `npm run deploy` for local publish via `gh-pages`

If you deploy the app to a different domain or repository path, update the Vite `base` value accordingly.

## Content Notes

- Portfolio content is data-driven from `src/data/`
- Project screenshots and logos are stored locally in the repo
- Contact links currently point to email and LinkedIn

## Scripts

- `npm run dev` - start the development server
- `npm run build` - type-check and build the app
- `npm run lint` - run ESLint
- `npm run preview` - preview the production build locally
- `npm run deploy` - build and publish to GitHub Pages

## License

No license file is currently included. This is a personal portfolio repo, so absent an explicit license the code defaults to standard copyright (all rights reserved) rather than being open for reuse. Add a `LICENSE` file (e.g. MIT) if you want to permit reuse.
