# Design System Guide

This project is now a Next.js App Router app with shared design tokens and reusable UI components.

## 1) Global Theme Control
- File: `lib/site-config.ts`
- Key: `siteConfig.theme`

Available themes:
- `professional` (default)
- `midnight`
- `forest`

Example:
```ts
export const siteConfig = {
  // ...
  theme: "midnight"
};
```

`siteConfig.theme` is applied globally in `app/layout.tsx` via the `<html data-theme="...">` attribute.

## 2) Theme Tokens
- File: `styles/theme.css`

Each theme defines tokens for:
- typography (`--font-body`, `--font-display`)
- colors (`--color-bg`, `--color-surface`, `--color-primary`, etc.)
- spacing (`--space-1` ... `--space-8`)
- radii and shadows

To create a new scheme:
1. Copy an existing `:root[data-theme="..."]` block.
2. Rename the theme id.
3. Update token values.
4. Set `siteConfig.theme` to the new id.

## 3) Reusable UI Components
- File: `styles/site.css`

Core reusable classes:
- Layout: `.page`, `.section`, `.card-grid`, `.kpi-row`, `.timeline`, `.gallery`
- Content blocks: `.hero`, `.card`, `.timeline-item`, `.kpi`
- Type: `.eyebrow`, `.hero-title`, `.hero-lead`, `.section-title`
- Actions: `.button`, `.button--primary`, `.button--secondary`
- Metadata: `.tag-cloud`, `.tag`, `.list-compact`

Recommendation: reuse these classes instead of adding page-specific one-offs.

## 4) Shared Header/Footer
- Files:
  - `components/site-header.tsx`
  - `components/site-footer.tsx`
  - `lib/site-config.ts`

These centralize:
- name and role text
- nav links
- contact links
- active nav styling

To add a page:
1. Add an item to `siteConfig.navItems`.
2. Add a route in `app/<route>/page.tsx`.

## 5) Page Structure Pattern
Each route file should follow this structure:
1. `<main>`
2. `<div className="page">` container
3. Reusable sections/cards/timelines/galleries

Global shell is handled once in `app/layout.tsx`.
