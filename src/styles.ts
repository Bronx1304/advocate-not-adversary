export const CSS = `
/* ═══════════════════════════════════════ tokens */
:root {
  --ground: #080503;
  --surface: rgba(38, 32, 22, 0.78);
  --surface-solid: #221c14;
  --surface-border: rgba(212, 148, 58, 0.18);
  --accent: #D4943A;
  --accent-bright: #E8B04A;
  --accent-dim: #B37A2A;
  --accent-deep: #8A5A18;
  --text: #E8E0D4;
  --text-muted: #9A8E7C;
  --text-faint: #5A5040;
  --danger: #8B3A3A;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-io: cubic-bezier(0.65, 0, 0.35, 1);
}

*, *::before, *::after { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }

body {
  margin: 0;
  background: var(--ground);
  background-image: radial-gradient(ellipse 90% 70% at 50% 15%, rgba(212,148,58,0.10) 0%, rgba(212,148,58,0.03) 40%, transparent 75%);
  color: var(--text);
  font-family: 'Outfit', system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a { color: var(--accent); text-decoration: none; transition: color 0.2s; }
a:hover { color: var(--accent-bright); }
a:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

h1, h2, h3, h4 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

p { margin: 0 0 1rem; }
p:last-child { margin-bottom: 0; }

/* ═══════════════════════════════════════ skip link */
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  padding: 0.5rem 1rem;
  background: var(--accent);
  color: var(--ground);
  z-index: 9999;
  font-weight: 600;
}
.skip-link:focus { top: 0; }

/* ═══════════════════════════════════════ layout */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(8, 5, 3, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--surface-border);
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.site-logo {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
  white-space: nowrap;
}
.site-logo:hover { color: var(--accent); }

.site-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  align-items: center;
}

.site-nav a, .site-nav button {
  font-size: 0.75rem;
  padding: 0.35rem 0.65rem;
  border-radius: 6px;
  color: var(--text-muted);
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: color 0.2s, background 0.2s;
  white-space: nowrap;
}
.site-nav a:hover, .site-nav button:hover {
  color: var(--text);
  background: rgba(212, 148, 58, 0.08);
}
.site-nav a.active {
  color: var(--accent);
  background: rgba(212, 148, 58, 0.1);
}

.nav-login {
  color: var(--accent) !important;
  border: 1px solid rgba(212, 148, 58, 0.3) !important;
}

main {
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;
}

.page-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-dim);
  margin-bottom: 0.75rem;
}

.page-title {
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  color: var(--text);
  margin-bottom: 1.5rem;
}

.page-intro {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 2rem;
}

/* ═══════════════════════════════════════ content sections */
.section {
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 1.25rem;
  color: var(--text);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--surface-border);
}

.card-grid {
  display: grid;
  gap: 1rem;
}

.info-card {
  background: rgba(45, 38, 28, 0.92);
  border: 1px solid rgba(212, 148, 58, 0.28);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 16px -4px rgba(0,0,0,0.6);
}
.info-card:hover {
  border-color: rgba(212, 148, 58, 0.45);
  box-shadow: 0 6px 24px -6px rgba(212,148,58,0.2);
}

.info-card h3 {
  font-family: 'Outfit', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.info-card p {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}

/* ═══════════════════════════════════════ tables */
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
  margin: 1rem 0;
}

th, td {
  text-align: left;
  padding: 0.6rem 0.75rem;
  border-bottom: 1px solid var(--surface-border);
}

th {
  color: var(--accent-dim);
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

td { color: var(--text-muted); }

.table-wrap {
  overflow-x: auto;
}

/* ═══════════════════════════════════════ buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-family: 'Outfit', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: transform 0.3s var(--ease-out), box-shadow 0.3s;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-bright));
  color: var(--ground);
  box-shadow: 0 4px 24px -4px rgba(212, 148, 58, 0.45);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px -4px rgba(212, 148, 58, 0.6);
}

.btn-ghost {
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--surface-border);
}
.btn-ghost:hover {
  border-color: rgba(212, 148, 58, 0.3);
  color: var(--accent);
}

/* ═══════════════════════════════════════ forms */
.form-group {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.35rem;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(212, 148, 58, 0.15);
  background: rgba(15, 12, 8, 0.6);
  color: var(--text);
  font-family: 'Outfit', sans-serif;
  font-size: 0.88rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.form-input::placeholder { color: var(--text-faint); }
.form-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(212, 148, 58, 0.12);
}

.form-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.4;
  cursor: pointer;
}
.form-checkbox input { margin-top: 0.2rem; accent-color: var(--accent); }

/* ═══════════════════════════════════════ alerts */
.alert {
  padding: 1rem 1.25rem;
  border-radius: 10px;
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
.alert-danger {
  background: rgba(139, 58, 58, 0.15);
  border: 1px solid rgba(139, 58, 58, 0.3);
  color: #E8A0A0;
}
.alert-info {
  background: rgba(212, 148, 58, 0.08);
  border: 1px solid var(--surface-border);
  color: var(--text-muted);
}

/* ═══════════════════════════════════════ golden shine */
.golden-shine {
  background: linear-gradient(105deg,
    var(--text-faint) 0%, var(--accent-dim) 20%, var(--accent-bright) 35%,
    #FFF0C0 42%, var(--accent-bright) 48%, var(--accent-dim) 62%, var(--text-faint) 80%);
  background-size: 250% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textShine 4s ease-in-out infinite;
}
@keyframes textShine {
  0% { background-position: 100% 50%; }
  50% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* ═══════════════════════════════════════ coin avatar */
.coin-anchor { display: flex; justify-content: center; margin-bottom: 1rem; }
.coin {
  position: relative;
  width: 108px; height: 108px;
  border-radius: 50%;
  perspective: 600px;
  animation: coinFloat 4s var(--ease-io) infinite;
}
@keyframes coinFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
.coin-face {
  position: relative; width: 100%; height: 100%; border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #F0C860, transparent 50%),
    radial-gradient(circle at 65% 70%, var(--accent-deep), transparent 50%),
    linear-gradient(145deg, #E8B84A 0%, var(--accent) 30%, var(--accent-dim) 60%, #8A5A18 100%);
  display: flex; align-items: center; justify-content: center;
  box-shadow: inset 0 2px 4px rgba(255,220,140,0.4), inset 0 -2px 6px rgba(100,60,10,0.5),
    0 4px 24px -4px rgba(212,148,58,0.5);
  overflow: hidden;
}
.coin-letter {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2.75rem; font-weight: 700; color: var(--ground);
  text-shadow: 0 1px 2px rgba(255,200,80,0.3);
  position: relative; z-index: 2;
}
.coin-specular {
  position: absolute; inset: 0; border-radius: 50%;
  background: linear-gradient(105deg, transparent 0%, transparent 35%,
    rgba(255,240,200,0.45) 42%, rgba(255,255,255,0.6) 46%,
    rgba(255,240,200,0.45) 50%, transparent 57%, transparent 100%);
  animation: coinSpecular 3.2s var(--ease-io) infinite;
  z-index: 3; pointer-events: none;
}
@keyframes coinSpecular {
  0% { transform: translateX(-120%) rotate(-15deg); opacity: 0; }
  15% { opacity: 1; }
  50% { transform: translateX(120%) rotate(-15deg); opacity: 0; }
  100% { opacity: 0; transform: translateX(120%) rotate(-15deg); }
}
.coin-rim {
  position: absolute; inset: -4px; border-radius: 50%;
  z-index: 0; opacity: 0.7; animation: rimSpin 8s linear infinite;
}
.coin-rim::before {
  content: ''; position: absolute; inset: 0; border-radius: 50%; padding: 3px;
  background: conic-gradient(from 0deg, var(--accent-bright), var(--accent-deep) 25%,
    var(--accent-bright) 50%, var(--accent-deep) 75%, var(--accent-bright));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
@keyframes rimSpin { to { transform: rotate(360deg); } }

/* ═══════════════════════════════════════ homepage hero */
.hero-wrap {
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; min-height: 80vh; text-align: center;
  max-width: 480px; margin: 0 auto; padding: 2rem 0;
}
.hero-card {
  background: var(--surface);
  border: 1px solid var(--surface-border);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  width: 100%;
  display: flex; flex-direction: column; align-items: center; gap: 1.75rem;
  backdrop-filter: blur(20px) saturate(1.3);
  -webkit-backdrop-filter: blur(20px) saturate(1.3);
  box-shadow: 0 0 0 1px rgba(212,148,58,0.06), 0 24px 80px -12px rgba(0,0,0,0.7),
    0 0 120px -40px rgba(212,148,58,0.08);
}
.hero-title {
  font-size: clamp(1.5rem, 4.5vw, 1.85rem);
  text-shadow: 0 2px 20px rgba(0,0,0,0.6);
}
.hero-tagline {
  font-size: 0.95rem; font-weight: 300; letter-spacing: 0.04em;
}
.hero-bio {
  font-size: 0.88rem; line-height: 1.72; color: var(--text-muted);
  max-width: 360px; text-shadow: 0 1px 12px rgba(0,0,0,0.5);
}
.hero-links {
  display: flex; flex-direction: column; gap: 0.75rem; width: 100%;
}
.hero-cta {
  position: relative; display: flex; align-items: center; justify-content: center;
  padding: 0.9rem 1.25rem; border-radius: 14px; text-decoration: none;
  font-family: 'Outfit', sans-serif; font-size: 0.9rem; font-weight: 500;
  cursor: pointer; overflow: hidden;
  transition: transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out);
}
.hero-cta-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-bright));
  color: var(--ground); border: none;
  box-shadow: 0 4px 24px -4px rgba(212,148,58,0.45), inset 0 1px 0 rgba(255,255,255,0.15);
}
.hero-cta-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 14px 40px -8px rgba(212,148,58,0.6), inset 0 1px 0 rgba(255,255,255,0.2);
}
.hero-cta-ghost {
  background: var(--surface); color: var(--text);
  border: 1px solid var(--surface-border);
}
.hero-cta-ghost:hover {
  color: var(--accent); transform: translateY(-3px);
  box-shadow: 0 8px 32px -8px rgba(212,148,58,0.25);
  border-color: rgba(212,148,58,0.3);
}
.cta-icon { font-size: 1.1rem; flex-shrink: 0; margin-right: 0.5rem; }

.hero-divider {
  width: 48px; height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent-dim), transparent);
}
.hero-pillars {
  display: flex; flex-direction: column; gap: 0.4rem; text-align: center;
}
.hero-pillars p {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 0.88rem; font-style: italic; letter-spacing: 0.01em; margin: 0;
}

.product-intro {
  font-size: 0.82rem; line-height: 1.72; color: var(--text);
  max-width: 380px; font-weight: 300;
  text-shadow: 0 1px 12px rgba(0,0,0,0.5); text-align: center;
}

/* ═══════════════════════════════════════ feature cards (homepage) */
.feature-card {
  display: flex; align-items: center; gap: 1rem;
  background: rgba(45, 38, 28, 0.92); border: 1px solid rgba(212,148,58,0.28);
  border-radius: 14px; padding: 1rem 1.25rem;
  text-decoration: none; color: var(--text);
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 16px -4px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,148,58,0.06);
}
.feature-card:hover {
  border-color: rgba(212,148,58,0.5); transform: translateY(-2px);
  box-shadow: 0 8px 32px -8px rgba(212,148,58,0.25);
  color: var(--text);
}
.feature-icon { font-size: 1.5rem; flex-shrink: 0; }
.feature-label { font-size: 0.88rem; font-weight: 500; }
.feature-sub { font-size: 0.75rem; color: var(--text-muted); }
.feature-badge {
  font-size: 0.65rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: 0.08em; color: var(--accent-dim);
  background: rgba(212,148,58,0.1); padding: 0.15rem 0.5rem;
  border-radius: 4px; margin-left: auto; white-space: nowrap;
}

/* ═══════════════════════════════════════ store tabs */
.store-tabs {
  display: flex; gap: 0.25rem; margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--surface-border); padding-bottom: 0;
  overflow-x: auto;
}
.store-tab {
  font-family: 'Outfit', sans-serif; font-size: 0.82rem; font-weight: 500;
  padding: 0.65rem 1rem; border: none; background: none;
  color: var(--text-muted); cursor: pointer; white-space: nowrap;
  border-bottom: 2px solid transparent; margin-bottom: -1px;
  transition: color 0.2s, border-color 0.2s;
}
.store-tab:hover { color: var(--text); }
.store-tab.active {
  color: var(--accent); border-bottom-color: var(--accent);
}
.store-tab:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
.store-panel[hidden] { display: none !important; }
.store-auth-gate {
  text-align: center; padding: 3rem 1.5rem;
  background: var(--surface); border: 1px solid var(--surface-border);
  border-radius: 12px;
}

/* ═══════════════════════════════════════ modal overlay */
.modal-overlay {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(0,0,0,0.8);
  display: flex; align-items: center; justify-content: center;
  padding: 1rem;
}
.modal-card {
  background: var(--surface-solid); border: 1px solid var(--surface-border);
  border-radius: 16px; width: 100%; overflow-y: auto; max-height: 90vh;
  box-shadow: 0 24px 80px -12px rgba(0,0,0,0.7);
}
.modal-header {
  padding: 1rem 1.25rem; border-bottom: 1px solid var(--surface-border);
  display: flex; justify-content: space-between; align-items: center;
}
.modal-close {
  background: none; border: none; color: var(--text-muted);
  font-size: 1.5rem; cursor: pointer; padding: 0 0.25rem;
}
.modal-close:hover { color: var(--text); }

/* ═══════════════════════════════════════ footer */
.site-footer {
  border-top: 1px solid var(--surface-border);
  padding: 2rem 1.5rem;
  text-align: center;
  font-size: 0.75rem;
  color: var(--text-faint);
  line-height: 1.8;
}
.site-footer a { color: var(--text-muted); }
.footer-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem 1rem; margin-bottom: 1rem; }

/* ═══════════════════════════════════════ responsive */
@media (max-width: 768px) {
  .site-header { flex-direction: column; gap: 0.5rem; padding: 0.5rem 1rem; }
  .site-nav { justify-content: center; }
  main { padding: 2rem 1rem 3rem; }
  .hero-card { padding: 2.25rem 1.5rem; border-radius: 18px; }
}
@media (max-width: 480px) {
  .coin { width: 90px; height: 90px; }
  .coin-letter { font-size: 2.25rem; }
}

/* ═══════════════════════════════════════ safety splash */
.safety-splash {
  position: fixed; inset: 0; z-index: 10000;
  background: var(--ground);
  display: flex; align-items: center; justify-content: center;
  padding: 1.5rem;
}
.safety-splash[hidden] { display: none !important; }
.splash-card {
  background: var(--surface); border: 1px solid var(--surface-border);
  border-radius: 20px; padding: 2.5rem 2rem; max-width: 420px; width: 100%;
  text-align: center;
  box-shadow: 0 24px 80px -12px rgba(0,0,0,0.7), 0 0 120px -40px rgba(212,148,58,0.08);
}
.splash-card h1 {
  font-size: 1.35rem; margin-bottom: 0.75rem; color: var(--text);
}
.splash-card p {
  font-size: 0.85rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.5rem;
}
.splash-options { display: flex; flex-direction: column; gap: 0.65rem; }
.splash-btn {
  display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  width: 100%; padding: 0.85rem 1rem; border-radius: 12px;
  font-family: 'Outfit', sans-serif; font-size: 0.88rem; font-weight: 500;
  cursor: pointer; border: 1px solid var(--surface-border);
  background: var(--surface); color: var(--text);
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}
.splash-btn:hover {
  border-color: rgba(212,148,58,0.35); transform: translateY(-2px);
  box-shadow: 0 6px 24px -6px rgba(212,148,58,0.2);
}
.splash-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.splash-btn.recommended {
  background: linear-gradient(135deg, var(--accent), var(--accent-bright));
  color: var(--ground); border-color: transparent;
  box-shadow: 0 4px 24px -4px rgba(212,148,58,0.45);
}
.splash-btn.recommended:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 36px -6px rgba(212,148,58,0.55);
}
.splash-warning-box {
  background: rgba(139, 58, 58, 0.1); border: 1px solid rgba(139, 58, 58, 0.25);
  border-radius: 10px; padding: 1rem 1.25rem; margin-bottom: 1.5rem;
  text-align: left; font-size: 0.82rem; color: var(--text-muted); line-height: 1.6;
}
.splash-warning-box ul {
  margin: 0; padding-left: 1.25rem; list-style: disc;
}
.splash-warning-box li { margin-bottom: 0.25rem; }
.splash-warning-box li:last-child { margin-bottom: 0; }
.splash-footer-note {
  font-size: 0.72rem; color: var(--text-faint); margin-top: 1.25rem; margin-bottom: 0;
  line-height: 1.55;
}
.nav-splash-btn {
  font-size: 0.7rem !important; color: var(--text-faint) !important;
}

/* ═══════════════════════════════════════ reduced motion */
@media (prefers-reduced-motion: reduce) {
  .coin { animation: none; }
  .coin-specular { animation: none; opacity: 0; }
  .coin-rim { animation: none; }
  .golden-shine { animation: none; background-position: 50% 50%; }
  .hero-cta:hover { transform: none; }
  .hero-cta-primary { animation: none; }
  .splash-btn:hover { transform: none; }
}

body.motion-reduced .coin { animation: none; }
body.motion-reduced .coin-specular { animation: none; opacity: 0; }
body.motion-reduced .coin-rim { animation: none; }
body.motion-reduced .golden-shine { animation: none; background-position: 50% 50%; }
`;
