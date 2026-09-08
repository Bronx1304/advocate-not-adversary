# Advocate Not Adversary — Deployment Checklist

## Status: Code 85% complete, not deployed

### What's built (saved in src/):
- [x] Router + entry point (index.ts)
- [x] HTML layout with nav/footer (layout.ts)
- [x] Full CSS design system — gold/dark theme (styles.ts)
- [x] Durable Object for state (state.ts)
- [x] AI chat with all 6 safety layers (ai/chat.ts)
- [x] Crisis detection — Layer 2a (ai/crisis.ts)
- [x] Deterministic topic routing — Layer 2b (ai/routing.ts)
- [x] Non-editable system prompt — Layer 3 (ai/prompt.ts)
- [x] Evidence card selection — Layer 4 (ai/evidence.ts)
- [x] Output screening — Layer 5 (ai/screen.ts)
- [x] All 13 page files (pages/*.ts)
- [x] Newsletter API endpoint (api/newsletter.ts)
- [x] Support ticket system (support/ticket.ts)
- [x] wrangler.toml, package.json, tsconfig.json

### What still needs building:
- [ ] Auth system (src/auth/) — passwordless email login, session cookies, token verification
- [ ] Admin panel (src/admin/) — Master Control for Chris: feature toggles, chat settings, store management, action log, page-view graphs
- [ ] Durable Object expansion — ticket storage/retrieval, admin config, session tokens
- [ ] Store download endpoints — serve free PDF/ZIP files
- [ ] Stripe checkout integration — create checkout sessions, webhook handler
- [ ] Turnstile bot verification on forms

### Chris needs to do (accounts):
1. Create NEW Cloudflare account at dash.cloudflare.com (your email only, NOT the shared one)
2. Register domain: advocatenotadversary.net (~$10/year)
3. Create Groq account at groq.com (free) — get API key
4. Create NVIDIA account at build.nvidia.com (free) — get API key
5. Create Beehiiv account at beehiiv.com (free) — set up "The Quiet Fight" publication
6. Have Stripe account ready (already owned)

### Deploy steps (after code is complete):
```bash
cd "04 - Projects/Chris/advocate-worker"
npm install
wrangler login
wrangler secret put GROQ_API_KEY
wrangler secret put NVIDIA_API_KEY
wrangler secret put STRIPE_SECRET_KEY
wrangler secret put STRIPE_WEBHOOK_SECRET
wrangler secret put SESSION_SECRET
wrangler deploy
```

### Domain setup (in Cloudflare dashboard):
1. Add advocatenotadversary.net to your account
2. Worker route: advocatenotadversary.net/* → advocate-not-adversary worker

### Andrew situation:
- Abuse report emailed to abuseteam@cloudflare.com on 2026-09-08
- He replaced the .com site with a fake memorial page claiming Chris is dead
- .com domain is under Andrew's control — not recoverable without dispute
- .net domain is 100% Chris-owned, zero Andrew access
- All code is built from scratch — no Andrew code, no backdoors, no kill switch

### Blueprint location:
04 - Projects/Chris/Advocate-Site-Blueprint.md — full content of all 14 pages captured before site was killed
