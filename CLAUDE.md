# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm i          # install dependencies
npm run dev    # start dev server (Vite)
npm run build  # production build
```

There is no lint or test script configured.

## Architecture

This is a **Figma Make**-exported React + TypeScript + Vite prototype for Charlotte Galichet, a Paris-based lawyer. It is a single-page application — no server, no API, no backend.

### Routing

Navigation is entirely state-based in `src/app/App.tsx` via `useState<PageId>`. There is no React Router in use despite the package being installed. The active page is reflected in the URL hash (`#home`, `#about`, etc.) for direct linking. Every page component receives an `onNavigate` prop.

Pages `confirmation`, `linkedin`, `linkedin2`, and `google` suppress the shared `Nav` and `Footer` — they are standalone social-media/SERP mockup screens used for Figma prototype flows.

### Component layout

```
src/
  main.tsx                    # entry point
  app/
    App.tsx                   # routing, Nav, Footer, prototype nav overlay
    components/
      *Page.tsx               # one file per page
      SharedComponents.tsx    # reusable hooks + animation primitives
      figma/                  # Figma-specific helpers (ImageWithFallback)
      ui/                     # shadcn/ui component library (Radix UI wrappers)
  styles/
    theme.css                 # design tokens (CSS vars) + all custom utility classes
    fonts.css                 # Google Fonts imports
    tailwind.css              # Tailwind v4 entry
    index.css                 # imports the three above
  imports/                    # reference/source files from the original Figma export — not imported by the app
```

### Styling system

Two layers coexist:

1. **Custom CSS** (`src/styles/theme.css`) — primary system. Defines all design tokens as CSS variables (`--blue`, `--navy`, `--font-display`, etc.) and semantic utility classes (`.btn`, `.btn-primary`, `.glass`, `.card`, `.reveal`, `.eyebrow`, `.display-xl`, etc.). Use these classes before reaching for Tailwind.

2. **Tailwind CSS v4** — supplementary utilities. No `tailwind.config` file; Tailwind is configured via the `@tailwindcss/vite` plugin.

Most components use **inline `style` objects** alongside CSS class names — this is intentional and consistent with the Figma Make output style. Don't refactor to pure Tailwind.

### Animation primitives (`SharedComponents.tsx`)

- `useReveal()` — IntersectionObserver hook; returns `[ref, shown]`
- `<Reveal>` — wraps any element with a `.reveal` fade-in-on-scroll animation; supports `variant="up|left|right"` and `delay`
- `<Magnetic>` — subtle cursor-tracking magnetic effect for CTA buttons
- `Icon` — object containing inline SVG icon components (`Icon.arrow`, `Icon.linkedin`, `Icon.twitter`, etc.)

### Asset imports

Vite is configured with a custom `figma-asset-resolver` plugin that maps `figma:asset/<filename>` imports to `src/assets/<filename>`. The `@` alias resolves to `src/`.

### Key design tokens

| Token | Value |
|---|---|
| `--blue` | `#1847F0` (primary accent) |
| `--navy` | `#0F172A` (dark section bg) |
| `--font-display` | Space Grotesk |
| `--font-body` | Inter |
| `--font-mono` | JetBrains Mono |
| `--container` | 1240px max-width |
| `--section-y` | 120px vertical section padding |
