# Palestra MEJ — AI-First Organization

## Project Type
Product (single-page presentation website)

## Stack
- React 19 + Vite 8
- Tailwind CSS v4 (@tailwindcss/vite)
- Space Grotesk (display) + Inter Tight (UI)
- Firebase Hosting for deploy

## Design System
Based on **214 Venture Studio — Swiss Clean Space Grotesk** design system.
- Primary: #E53935 (red)
- Display font: Space Grotesk
- UI font: Inter Tight
- Logo "214": bold italic Futura
- Design tokens defined in `src/index.css` @theme block

## Structure
Single-page scrolling site with 6 sections:
0. Intro — Agenda + Contexto
1. Quem sou eu — Fotos + textos chave
2. AI-First Org — 5 etapas + graficos (conteudo principal da palestra)
3. Cases — Projetos de alto impacto
4. mK Strategy — metaKosmos AI-First + Ktirio AI
5. CTA — Provocacao + convite para mentoria

## Deploy
```bash
npm run build
firebase deploy --only hosting
```

## Key Files
- `src/App.jsx` — Main component with all sections
- `src/index.css` — Tailwind config + design tokens
- `index.html` — Entry point with font imports
