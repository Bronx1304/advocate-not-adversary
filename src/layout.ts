import { CSS } from './styles';

export interface LayoutOptions {
  title: string;
  description?: string;
  activePath?: string;
  bodyClass?: string;
  noHeader?: boolean;
  noFooter?: boolean;
}

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/store', label: 'Store' },
  { href: '/ai-safety', label: 'AI Safety' },
  { href: '/autism-sources', label: 'Sources' },
  { href: '/updates', label: 'Updates' },
  { href: '/newsletter', label: 'Newsletter' },
  { href: '/policies', label: 'Policies' },
];

function nav(activePath: string): string {
  const links = NAV_LINKS.map(
    (l) =>
      `<a href="${l.href}"${l.href === activePath ? ' class="active"' : ''}>${l.label}</a>`
  ).join('');
  return `<nav class="site-nav" aria-label="Main navigation">${links}<button type="button" class="nav-splash-btn" onclick="document.getElementById('safety-splash').hidden=false" aria-label="Reopen motion choice screen">Safety</button><a href="/account" class="nav-login">Sign In</a></nav>`;
}

function header(activePath: string): string {
  return `<header class="site-header">
  <a href="/" class="site-logo" aria-label="Home">Advocate Not Adversary</a>
  ${nav(activePath)}
</header>`;
}

function footer(): string {
  return `<footer class="site-footer">
  <div class="footer-links">
    <a href="/privacy">Privacy</a>
    <a href="/terms">Terms</a>
    <a href="/accessibility">Accessibility</a>
    <a href="/editorial-policy">Editorial</a>
    <a href="/ai-safety">AI Safety</a>
  </div>
  <p>&copy; ${new Date().getFullYear()} Advocate Not Adversary &mdash; Christopher M. Caballero</p>
  <p style="margin-top:0.25rem;">General autism education only. Not medical, legal, or emergency advice.</p>
</footer>`;
}

export function layout(body: string, opts: LayoutOptions): string {
  const desc = opts.description ?? 'Autism advocacy, education, and parent support by Christopher M. Caballero.';
  const active = opts.activePath ?? '/';
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${opts.title} — Advocate Not Adversary</title>
<meta name="description" content="${desc}">
<meta name="theme-color" content="#080503">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>${CSS}</style>
</head>
<body${opts.bodyClass ? ` class="${opts.bodyClass}"` : ''}>
<div id="safety-splash" class="safety-splash" role="dialog" aria-modal="true" aria-label="Motion preference">
  <div class="splash-card">
    <h1>Choose the motion level that feels safe</h1>
    <p>This site can include animated background effects.</p>
    <div class="splash-warning-box">
      <p style="font-weight:600;margin-bottom:0.5rem">Please choose Reduced motion if you experience any of the following:</p>
      <ul>
        <li>Photosensitive epilepsy or seizure disorders</li>
        <li>Vestibular or balance disorders</li>
        <li>Migraines triggered by motion or light</li>
        <li>Sensory processing sensitivity</li>
        <li>Discomfort from screen animations</li>
      </ul>
    </div>
    <div class="splash-options">
      <button type="button" class="splash-btn recommended" data-motion="reduced" autofocus>Reduced motion (recommended)</button>
      <button type="button" class="splash-btn" data-motion="slow">Slow swirls</button>
      <button type="button" class="splash-btn" data-motion="fast">Fast swirls</button>
    </div>
    <p class="splash-footer-note">Your choice is saved on this device. Change it anytime from the Safety button in the navigation bar.</p>
  </div>
</div>
<script>
(function(){
  var s=document.getElementById('safety-splash');
  try{var m=localStorage.getItem('ana-motion');if(m){s.hidden=true;document.body.classList.add('motion-'+m);}}catch(e){}
  s.addEventListener('click',function(e){
    var b=e.target.closest('[data-motion]');if(!b)return;
    var v=b.getAttribute('data-motion');
    try{localStorage.setItem('ana-motion',v);}catch(e){}
    document.body.className=document.body.className.replace(/motion-\\S+/g,'').trim();
    document.body.classList.add('motion-'+v);
    s.hidden=true;
  });
})();
</script>
<a href="#main" class="skip-link">Skip to content</a>
${opts.noHeader ? '' : header(active)}
<main id="main">${body}</main>
${opts.noFooter ? '' : footer()}
<script>if(!navigator.doNotTrack&&!navigator.globalPrivacyControl)fetch('/api/counter?page='+encodeURIComponent(location.pathname),{method:'POST',keepalive:true}).catch(function(){});</script>
</body>
</html>`;
}
