import { layout } from '../layout';
import type { Env } from '../index';

export function accountPage(env: Env): string {
  return layout(
    `<p class="page-label">Account</p>
<h1 class="page-title">Member Access</h1>
<p class="page-intro">Sign in with your email — no password needed. We'll send you a link that expires in 15 minutes and works once.</p>

<div class="section" style="max-width:400px">
  <form id="login-form">
    <div class="form-group">
      <label class="form-label" for="login-email">Email address</label>
      <input type="email" id="login-email" class="form-input" placeholder="you@example.com" required>
    </div>
    <label class="form-checkbox" style="margin-bottom:0.5rem">
      <input type="checkbox" id="login-age" required> I confirm I am 18 years of age or older
    </label>
    <label class="form-checkbox" style="margin-bottom:1rem">
      <input type="checkbox" id="login-terms" required> I have reviewed the <a href="/terms">terms of use</a> and <a href="/privacy">privacy notice</a>
    </label>
    <button type="submit" class="btn btn-primary" style="width:100%">Send Sign-In Link</button>
    <p id="login-status" style="font-size:0.8rem;color:var(--text-muted);margin-top:0.75rem;min-height:1.2rem"></p>
  </form>
</div>

<div class="section" style="margin-top:2rem">
  <div class="alert alert-info">
    <p><strong>This is not a purchase.</strong> Signing in does not buy anything. Free content is available without an account.</p>
    <p style="margin-top:0.5rem">Need help? Contact <a href="mailto:${env.OWNER_EMAIL}">${env.OWNER_EMAIL}</a></p>
  </div>
</div>

<script>
document.getElementById('login-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const status = document.getElementById('login-status');
  const email = document.getElementById('login-email').value;
  status.textContent = 'Sending sign-in link...';
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      status.textContent = 'Check your email — the link expires in 15 minutes.';
      status.style.color = 'var(--accent)';
    } else {
      status.textContent = 'Something went wrong. Please try again.';
      status.style.color = '#E8A0A0';
    }
  } catch {
    status.textContent = 'Unable to send link right now. Please try again later.';
    status.style.color = '#E8A0A0';
  }
});
</script>`,
    { title: 'Account', activePath: '/account', description: 'Sign in to your Advocate Not Adversary account.' }
  );
}
