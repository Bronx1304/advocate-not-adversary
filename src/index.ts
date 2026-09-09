import { layout } from './layout';
import { homePage } from './pages/home';
import { aboutPage } from './pages/about';
import { storePage } from './pages/store';
import { policiesPage } from './pages/policies';
import { aiSafetyPage } from './pages/ai-safety';
import { autismSourcesPage } from './pages/autism-sources';
import { updatesPage } from './pages/updates';
import { accessibilityPage } from './pages/accessibility';
import { privacyPage } from './pages/privacy';
import { termsPage } from './pages/terms';
import { editorialPolicyPage } from './pages/editorial-policy';
import { newsletterPage } from './pages/newsletter';
import { accountPage } from './pages/account';

export interface Env {
  SITE_STATE: DurableObjectNamespace;
  SITE_NAME: string;
  OWNER_NAME: string;
  OWNER_EMAIL: string;
  GROQ_API_KEY?: string;
  NVIDIA_API_KEY?: string;
  STRIPE_SECRET_KEY?: string;
  STRIPE_WEBHOOK_SECRET?: string;
  SESSION_SECRET?: string;
}

type PageHandler = (request: Request, env: Env) => Response | Promise<Response>;

function html(body: string, status = 200): Response {
  return new Response(body, {
    status,
    headers: { 'Content-Type': 'text/html;charset=utf-8' },
  });
}

const routes: Record<string, PageHandler> = {
  '/': (_req, env) => html(homePage(env)),
  '/about': (_req, env) => html(aboutPage(env)),
  '/store': (_req, env) => html(storePage(env)),
  '/policies': (_req, env) => html(policiesPage(env)),
  '/ai-safety': (_req, env) => html(aiSafetyPage(env)),
  '/autism-sources': (_req, env) => html(autismSourcesPage(env)),
  '/updates': (_req, env) => html(updatesPage(env)),
  '/accessibility': (_req, env) => html(accessibilityPage(env)),
  '/privacy': (_req, env) => html(privacyPage(env)),
  '/terms': (_req, env) => html(termsPage(env)),
  '/editorial-policy': (_req, env) => html(editorialPolicyPage(env)),
  '/newsletter': (_req, env) => html(newsletterPage(env)),
  '/account': (_req, env) => html(accountPage(env)),
};

function notFoundPage(env: Env): string {
  return layout(
    `<div class="hero-wrap" style="min-height:60vh">
      <h1 class="page-title">Page not found</h1>
      <p class="page-intro">The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" class="btn btn-primary">Back to home</a>
    </div>`,
    { title: 'Not Found', activePath: '' }
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, '') || '/';

    if (path === '/ads.txt') {
      return new Response('# Advocate Not Adversary — ads safety-locked off\n# Publisher ID reserved for verification only. No ad code is loaded.\ngoogle.com, pub-XXXXXXXXXX, DIRECT, f08c47fec0942fa0\n', {
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    if (path.startsWith('/api/download/')) {
      return html(layout(
        `<div class="hero-wrap" style="min-height:60vh">
          <h1 class="page-title">Download Coming Soon</h1>
          <p class="page-intro">This resource is being prepared for download. Check back shortly — free guides and bundles will be available here.</p>
          <a href="/store" class="btn btn-primary">Back to Store</a>
        </div>`,
        { title: 'Download', activePath: '/store' }
      ));
    }

    if (path === '/api/counter' && request.method === 'POST') {
      const page = url.searchParams.get('page') ?? '/';
      const dnt = request.headers.get('DNT') === '1' || request.headers.get('Sec-GPC') === '1';
      if (!dnt) {
        const id = env.SITE_STATE.idFromName('global');
        const stub = env.SITE_STATE.get(id);
        await stub.fetch(new Request(`http://internal/counter/increment?page=${encodeURIComponent(page)}`));
      }
      return new Response(null, { status: 204 });
    }

    if (path === '/api/chat' && request.method === 'POST') {
      const { handleChat } = await import('./ai/chat');
      return handleChat(request, env);
    }

    if (path === '/api/newsletter' && request.method === 'POST') {
      const { handleNewsletter } = await import('./api/newsletter');
      return handleNewsletter(request, env);
    }

    if (path === '/api/support' && request.method === 'POST') {
      const { handleSupport } = await import('./support/ticket');
      return handleSupport(request, env);
    }

    const handler = routes[path];
    if (handler) {
      return handler(request, env);
    }

    return html(notFoundPage(env), 404);
  },
};

export { SiteState } from './state';
