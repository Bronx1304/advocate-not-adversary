import { layout } from '../layout';
import type { Env } from '../index';

export function homePage(env: Env): string {
  return layout(
    `<div class="hero-wrap">
  <div class="hero-card">
    <div class="coin-anchor">
      <div class="coin">
        <div class="coin-rim"></div>
        <div class="coin-face">
          <span class="coin-letter">C</span>
          <div class="coin-specular"></div>
        </div>
      </div>
    </div>

    <h1 class="hero-title golden-shine">Advocate Not Adversary</h1>
    <p class="hero-tagline" style="color:var(--text-muted)">A father's lived experience. Real-world support for autism families.</p>

    <div class="hero-divider"></div>

    <p class="hero-bio">When my son Jared was diagnosed, I didn't understand autism. I thought I'd failed him. I hadn't — I just had a lot to unlearn. This is what I've learned so far.</p>

    <p style="font-size:0.78rem;color:var(--text-faint);margin:0;">The official Advocate Not Adversary site, independently owned and operated by Chris Caballero.</p>

    <p style="font-size:0.78rem;color:var(--text-faint)">Resources and support on this site are free to explore.</p>

    <div class="hero-links">
      <a href="#chat" class="hero-cta hero-cta-primary" id="open-chat">
        <span class="cta-icon">💬</span> Talk to Chris — Free AI Autism Dad
      </a>
      <button type="button" class="hero-cta hero-cta-ghost" id="open-support" style="border:none">
        <span class="cta-icon">✉</span> Contact Chris
      </button>
      <a href="/store" class="hero-cta hero-cta-ghost">
        <span class="cta-icon">📦</span> Free Resources & Store
      </a>
      <a href="https://www.tiktok.com/@advocatenotadvers" target="_blank" rel="noopener noreferrer" class="hero-cta hero-cta-ghost">
        <span class="cta-icon">▶</span> Follow on TikTok
      </a>
      <div class="hero-cta hero-cta-ghost" style="cursor:default;opacity:0.7">
        <span class="cta-icon">▶</span> Watch on YouTube <span class="feature-badge" style="margin-left:auto">Coming Soon</span>
      </div>
      <a href="/newsletter" class="hero-cta hero-cta-ghost">
        <span class="cta-icon">✉</span> The Quiet Fight — Newsletter
      </a>
    </div>
  </div>

  <div style="margin-top:2.5rem;width:100%">
    <p class="product-intro">Financial stability is part of advocacy. These tools are designed for families who need structure without shame.</p>
    <div class="card-grid" style="margin-top:1rem">
      <div class="feature-card">
        <span class="feature-icon">🧩</span>
        <div>
          <div class="feature-label">AuDHD Planner Bundle — Steady Days</div>
          <div class="feature-sub">Planning tools for neurodivergent families</div>
        </div>
        <span class="feature-badge">Coming Soon</span>
      </div>
      <div class="feature-card">
        <span class="feature-icon">💰</span>
        <div>
          <div class="feature-label">Steady Ledger — Financial Tools</div>
          <div class="feature-sub">For overwhelmed families</div>
        </div>
        <span class="feature-badge">Coming Soon</span>
      </div>
      <div class="feature-card">
        <span class="feature-icon">📋</span>
        <div>
          <div class="feature-label">The IEP Fight Kit</div>
          <div class="feature-sub">$17 — Everything you need for the meeting</div>
        </div>
        <span class="feature-badge">Coming Soon</span>
      </div>
    </div>
  </div>

  <div class="hero-divider" style="margin-top:2.5rem"></div>

  <div style="margin-top:2rem;width:100%;max-width:480px">
    <h2 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:1.15rem;text-align:center;margin-bottom:1rem;color:var(--text)">Chris's Original Voice</h2>
    <div class="info-card" style="text-align:center;padding:2rem">
      <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:1rem">Video coming soon. Visitor controls playback — no auto-play.</p>
      <span class="feature-badge">Coming Soon</span>
    </div>
  </div>

  <div class="hero-divider" style="margin-top:2rem"></div>
  <div class="hero-pillars" style="margin-top:1.5rem">
    <p>"I am with you."</p>
    <p>"Be their advocate, not their adversary."</p>
  </div>
</div>

<div id="chat-modal" style="display:none">
  <!-- Chat modal injected by client JS -->
</div>

<div id="support-modal" class="modal-overlay" style="display:none">
  <div class="modal-card" style="max-width:480px">
    <div class="modal-header">
      <h2 style="font-size:1rem;margin:0;font-family:Outfit,sans-serif">Contact Chris</h2>
      <button type="button" onclick="document.getElementById('support-modal').style.display='none'" class="modal-close" aria-label="Close">&times;</button>
    </div>
    <div style="padding:1.25rem">
      <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1.25rem">This is an asynchronous ticket — not a hotline, not a professional relationship. Christopher will respond when available.</p>
      <form id="support-form">
        <div class="form-group">
          <label class="form-label" for="support-name">Name (optional)</label>
          <input type="text" id="support-name" class="form-input" placeholder="Your name" maxlength="100">
        </div>
        <div class="form-group">
          <label class="form-label" for="support-email">Email <span style="color:var(--accent)">*</span></label>
          <input type="email" id="support-email" class="form-input" placeholder="you@example.com" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="support-category">Category <span style="color:var(--accent)">*</span></label>
          <select id="support-category" class="form-input" required>
            <option value="">Select a category</option>
            <option value="general">General question</option>
            <option value="accessibility">Accessibility</option>
            <option value="privacy">Privacy or safety concern</option>
            <option value="store">Store or purchases</option>
            <option value="account">Account help</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="support-message">Message <span style="color:var(--accent)">*</span></label>
          <textarea id="support-message" class="form-input" rows="5" placeholder="What can I help with?" maxlength="5000" required style="resize:vertical"></textarea>
        </div>
        <div id="support-status" style="display:none;margin-bottom:1rem"></div>
        <button type="submit" class="btn btn-primary" style="width:100%" id="support-submit">Send Ticket</button>
      </form>
    </div>
  </div>
</div>

<script>
document.getElementById('open-chat')?.addEventListener('click', function(e) {
  e.preventDefault();
  const modal = document.getElementById('chat-modal');
  if (modal) {
    modal.style.display = 'flex';
    modal.innerHTML = '<div style="position:fixed;inset:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:1000;padding:1rem"><div style="background:var(--surface-solid);border:1px solid var(--surface-border);border-radius:16px;width:100%;max-width:480px;height:80vh;display:flex;flex-direction:column;overflow:hidden"><div style="padding:1rem 1.25rem;border-bottom:1px solid var(--surface-border);display:flex;justify-content:space-between;align-items:center"><h2 style="font-size:1rem;margin:0;font-family:Outfit,sans-serif">Talk to Chris AI</h2><button onclick=\\'document.getElementById(\"chat-modal\").style.display=\"none\"\\' style="background:none;border:none;color:var(--text-muted);font-size:1.5rem;cursor:pointer">&times;</button></div><div id="chat-messages" style="flex:1;overflow-y:auto;padding:1rem 1.25rem;display:flex;flex-direction:column;gap:0.75rem"><p style="color:var(--text-muted);font-size:0.85rem">This is an AI — not Chris, not a medical professional. For adults 18+ only. Not a substitute for professional advice. I can help with general autism parenting questions. What\\'s on your mind?</p></div><form id="chat-form" style="padding:1rem 1.25rem;border-top:1px solid var(--surface-border);display:flex;gap:0.5rem"><input type="text" id="chat-input" class="form-input" placeholder="Type your question..." style="flex:1" autocomplete="off"><button type="submit" class="btn btn-primary" style="padding:0.6rem 1rem">Send</button></form></div></div>';
    document.getElementById('chat-input')?.focus();
    document.getElementById('chat-form')?.addEventListener('submit', handleChatSubmit);
  }
});

async function handleChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  const userMsg = document.createElement('div');
  userMsg.style.cssText = 'align-self:flex-end;background:rgba(212,148,58,0.15);border-radius:12px 12px 4px 12px;padding:0.6rem 0.9rem;max-width:80%;font-size:0.85rem';
  userMsg.textContent = text;
  messages.appendChild(userMsg);
  messages.scrollTop = messages.scrollHeight;

  const aiMsg = document.createElement('div');
  aiMsg.style.cssText = 'align-self:flex-start;background:var(--surface);border:1px solid var(--surface-border);border-radius:12px 12px 12px 4px;padding:0.6rem 0.9rem;max-width:80%;font-size:0.85rem;color:var(--text-muted)';
  aiMsg.textContent = 'Thinking...';
  messages.appendChild(aiMsg);
  messages.scrollTop = messages.scrollHeight;

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text }),
    });
    if (!res.ok) throw new Error('Chat unavailable');
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let full = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\\n');
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') break;
          try { full += JSON.parse(data).text ?? ''; } catch {}
        }
      }
      aiMsg.textContent = full || 'Thinking...';
      messages.scrollTop = messages.scrollHeight;
    }
    if (!full) aiMsg.textContent = 'I wasn\\'t able to generate a response. Please try again.';
  } catch {
    aiMsg.textContent = 'Chat is temporarily unavailable. Please try again later.';
  }
}

document.getElementById('open-support')?.addEventListener('click', function() {
  document.getElementById('support-modal').style.display = 'flex';
});

document.getElementById('support-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  var btn = document.getElementById('support-submit');
  var status = document.getElementById('support-status');
  btn.disabled = true;
  btn.textContent = 'Sending...';
  status.style.display = 'none';

  try {
    var res = await fetch('/api/support', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: document.getElementById('support-name').value.trim(),
        email: document.getElementById('support-email').value.trim(),
        category: document.getElementById('support-category').value,
        message: document.getElementById('support-message').value.trim(),
      }),
    });
    if (!res.ok) throw new Error('Failed');
    status.className = 'alert alert-info';
    status.textContent = 'Ticket sent. Christopher will respond to your email when available.';
    status.style.display = 'block';
    document.getElementById('support-form').reset();
  } catch {
    status.className = 'alert alert-danger';
    status.textContent = 'Something went wrong. Please try again or email owner@advocatenotadversary.net directly.';
    status.style.display = 'block';
  }
  btn.disabled = false;
  btn.textContent = 'Send Ticket';
});
</script>`,
    { title: 'Home', activePath: '/', noHeader: false }
  );
}
