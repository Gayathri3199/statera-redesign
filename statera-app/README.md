# Statera — React landing page (3D mountain hero)

Vite + React 19 + TypeScript + Tailwind v4, shadcn project structure. The hero uses
the `GenerativeMountainScene` WebGL component (Three.js), recolored to the Statera
palette (teal terrain + decorative coral rim).

## Prerequisites — Node is not installed on this machine

`node`/`npm` were not found. Install Node.js LTS (≥ 20) first:

- Download the Windows installer from <https://nodejs.org> (LTS), **or**
- `winget install OpenJS.NodeJS.LTS`

Then restart your terminal so `node` / `npm` are on PATH.

## Run

```bash
cd statera-app
npm install        # installs three, react 19, tailwind v4, lucide-react, etc.
npm run dev        # open the printed http://localhost:5173
```

`three` (and `@types/three`) are already listed in `package.json`, so `npm install`
pulls them in — no separate install needed.

## Project structure (shadcn convention)

```
statera-app/
├─ components.json            # shadcn config (aliases, css path)
├─ src/
│  ├─ index.css              # Tailwind v4 + @theme brand tokens
│  ├─ lib/utils.ts           # cn() helper
│  ├─ components/ui/         # <-- shadcn components live here
│  │  ├─ mountain-scene.tsx  # the integrated 3D component
│  │  └─ button.tsx          # shadcn-style Button (Statera variants)
│  └─ App.tsx                # the Statera landing page (demo)
```

### Why `components/ui` matters

shadcn's CLI, its `components.json` aliases (`"ui": "@/components/ui"`), and the
`@/components/ui/...` import in the original snippet all assume this exact folder.
Putting components anywhere else means `npx shadcn@latest add <component>` writes to
a path your imports don't expect, and future shadcn components won't resolve. Keeping
`components/ui` makes the `@/components/ui/mountain-scene` import work as-shipped and
lets you add more shadcn primitives later without rewiring paths.

## If you were starting from scratch (for reference)

```bash
npm create vite@latest statera-app -- --template react-ts
cd statera-app
npm install
npm install tailwindcss @tailwindcss/vite        # Tailwind v4
npm install three @types/three lucide-react class-variance-authority clsx tailwind-merge
npx shadcn@latest init                            # sets up components.json + aliases
```
Then add `@tailwindcss/vite` to `vite.config.ts`, the `@` → `./src` alias, and
`@import "tailwindcss";` to your CSS — all already done in this repo.

## Brand notes

- Palette lives as Tailwind v4 `@theme` tokens in `src/index.css`
  (`bg-primary`, `text-teal`, `bg-surface`, `text-muted`, …).
- **Coral `#e97132` is decorative only** — used for the 3D rim light, icon glyphs,
  and the logo S-mark. Never body text or white-on-accent buttons. Interactive
  elements use navy/teal (WCAG AA).
- Replace the CSS logo placeholder and the headshot placeholder with real assets.
