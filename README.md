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
- `src/data/` - portfolio content for work, tech, and strengths
- `src/images/` - local screenshots, logos, and profile assets
- `public/` - static assets served directly by Vite

## Getting Started

### Prerequisites

- Node.js 20 or newer
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

No license has been specified yet.
