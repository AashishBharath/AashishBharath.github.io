# Aashish Bharath Website (Next.js)

This project is now scaffolded as a Next.js App Router application.

## Stack
- Next.js `16.2.0`
- React `19.2.4`
- TypeScript

## Run Locally
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes
- `/` Home
- `/projects`
- `/resume`
- `/fun`

## Theme + Design System
Global visual system is controlled by:
- `lib/site-config.ts` (active theme + shared site config)
- `styles/theme.css` (theme tokens)
- `styles/site.css` (reusable component styles)

See `DESIGN_SYSTEM.md` for full details.

## Validation
```bash
npm run lint
npm run build
```
