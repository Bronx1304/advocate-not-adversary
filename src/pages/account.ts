import { layout } from '../layout';
import type { Env } from '../index';

export function accountPage(env: Env): string {
  return layout(
    `<p class="page-label">Member Access</p>
<h1 class="page-title">Coming Soon</h1>
<p class="page-intro">Member accounts and purchase history are being prepared. You do not need an account to use the public areas of this site.</p>

<div class="section" style="max-width:520px">
  <div class="alert alert-info">
    <p><strong>What is available now:</strong> the newsletter, autism education, safety information, and release updates.</p>
    <p style="margin-top:0.75rem">When member access is ready, this page will explain exactly what it includes before anyone signs in or purchases anything.</p>
  </div>
  <a href="/newsletter" class="btn btn-primary" style="margin-top:1rem">Get newsletter updates</a>
</div>`,
    { title: 'Member Access', activePath: '', description: 'Member access updates for Advocate Not Adversary.' }
  );
}
