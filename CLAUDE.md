# Advocate Not Adversary — Site Worker

## What this is

Cloudflare Worker serving advocatenotadversary.net — server-rendered HTML, no React framework. Autism education site owned solely by Christopher M. Caballero (Chris). Built from scratch after the previous co-founder (Andrew) killed the .com domain.

**Zero Andrew access. Zero Andrew code. No backdoors, no kill switch.**

## Tech stack

- **Runtime:** Cloudflare Workers (TypeScript, `wrangler deploy`)
- **Database:** Cloudflare Durable Objects with SQLite (`SiteState` class in `src/state.ts`)
- **AI:** Groq + NVIDIA free-tier models for chat (see `src/ai/chat.ts`)
- **Payments:** Stripe (not yet active — hosted checkout planned)
- **Newsletter:** Beehiiv ("The Quiet Fight")
- **Domain:** advocatenotadversary.net (Cloudflare DNS)

## Architecture

```
src/
  index.ts          — Router, all routes + API endpoints
  layout.ts         — HTML shell, nav, footer, safety splash, counter beacon
  styles.ts         — All CSS (single exported string)
  state.ts          — Durable Object (counters, tickets, config)
  pages/            — Each page returns an HTML string via layout()
    home.ts         — Homepage with hero, chat modal, support modal
    store.ts        — 4-tab store (Free Guides / Tools / Purchases / Account)
    about.ts, policies.ts, ai-safety.ts, etc.
  ai/
    chat.ts         — SSE streaming chat handler
    crisis.ts       — Deterministic crisis detection (layer 2)
    routing.ts      — Topic routing (layer 2)
    prompt.ts       — Non-editable system prompt (layer 3)
    evidence.ts     — Autism evidence cards (layer 4)
    screen.ts       — Output screening (layer 5)
  support/ticket.ts — Support ticket POST handler
  api/newsletter.ts — Newsletter signup POST handler
```

## Design system

Dark luxury gold theme:
- Ground: `#080503`, Surface: warm brown semi-transparent
- Accent: `#D4943A` (gold), bright `#E8B04A`, dim `#B37A2A`
- Fonts: Outfit (body), Cormorant Garamond (display/headings)
- All tokens in `:root` at top of `styles.ts`

## Key patterns

- Every page calls `layout(htmlContent, options)` — layout handles the full HTML document
- Safety splash uses localStorage key `ana-motion` with values `reduced`/`slow`/`fast`
- Body gets class `motion-reduced`, `motion-slow`, or `motion-fast`
- Page-view counter: client beacon POST to `/api/counter`, respects DNT/GPC
- AI chat: 6-layer safety system (crisis → routing → prompt → evidence → screen → footer)
- Store downloads: `/api/download/:slug` (placeholder pages until files uploaded)

## Deploy

```bash
npx wrangler deploy
```

Secrets are set via `wrangler secret put <NAME>`. See `wrangler.toml` comments for the list.

## What's built vs. pending

**Working:** All nav pages, safety splash, AI chat with safety layers, support tickets, newsletter signup, store with 4 tabs and 12 downloadable items, page-view counter, ads.txt

**Pending:** Auth system (passwordless email login), Stripe checkout, Jared's Guided Access (deterministic site guide), Turnstile bot protection, Master Control admin panel, actual PDF/ZIP files for downloads, splash video with playlist

## Rules

- Chris is the sole owner. No co-founder references, no dual-authority, no "Andrew" anywhere.
- Source code is the blueprint reference: `04 - Projects/Chris/Advocate-Site-Blueprint.md`
- Double-confirm before any code edit (per vault rules).
- Never place credentials in chat or code files.
