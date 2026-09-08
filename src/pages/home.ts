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
    <p class="hero-tagline" style="color:var(--text-muted)">Autism dad. Still learning.</p>

    <div class="hero-divider"></div>

    <p class="hero-bio">When my son Jared was diagnosed, I didn't understand autism. I thought I'd failed him. I hadn't — I just had a lot to unlearn. This is what I've learned so far.</p>

    <p style="font-size:0.78rem;color:var(--text-faint)">
      <a href="/account">Sign in</a> · Helpful public information does not require a subscription
    </p>

    <div class="hero-links">
      <a href="#chat" class="hero-cta hero-cta-primary" id="open-chat">
        <span class="cta-icon">💬</span> Talk to Chris — Free AI Autism Dad
      </a>
      <a href="/store" class="hero-cta hero-cta-ghost">
        <span class="cta-icon">📦</span> Free Resources & Store
      </a>
      <a href="https://www.tiktok.com/@advocatenotadvers" target="_blank" rel="noopener" class="hero-cta hero-cta-ghost">
        <span class="cta-icon">▶</span> Follow on TikTok
      </a>
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
  <div class="hero-pillars" style="margin-top:1.5rem">
    <p>"I am with you."</p>
    <p>"Be their advocate, not their adversary."</p>
  </div>
</div>

<div id="chat-modal" style="display:none">
  <!-- Chat modal injected by client JS -->
</div>

<script>
document.getElementById('open-chat')?.addEventListener('click', function(e) {
  e.preventDefault();
  const modal = document.getElementById('chat-modal');
  if (modal) {
    modal.style.display = 'flex';
    modal.innerHTML = '<div style="position:fixed;inset:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:1000;padding:1rem"><div style="background:var(--surface-solid);border:1px solid var(--surface-border);border-radius:16px;width:100%;max-width:480px;height:80vh;display:flex;flex-direction:column;overflow:hidden"><div style="padding:1rem 1.25rem;border-bottom:1px solid var(--surface-border);display:flex;justify-content:space-between;align-items:center"><h2 style="font-size:1rem;margin:0;font-family:Outfit,sans-serif">Talk to Chris AI</h2><button onclick=\\'document.getElementById(\"chat-modal\").style.display=\"none\"\\' style="background:none;border:none;color:var(--text-muted);font-size:1.5rem;cursor:pointer">&times;</button></div><div id="chat-messages" style="flex:1;overflow-y:auto;padding:1rem 1.25rem;display:flex;flex-direction:column;gap:0.75rem"><p style="color:var(--text-muted);font-size:0.85rem">Hi — I\\'m Chris AI, an educational chat assistant. I\\'m not Chris, not a doctor, not a therapist. I can help with general autism parenting questions. What\\'s on your mind?</p></div><form id="chat-form" style="padding:1rem 1.25rem;border-top:1px solid var(--surface-border);display:flex;gap:0.5rem"><input type="text" id="chat-input" class="form-input" placeholder="Type your question..." style="flex:1" autocomplete="off"><button type="submit" class="btn btn-primary" style="padding:0.6rem 1rem">Send</button></form></div></div>';
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
</script>`,
    { title: 'Home', activePath: '/', noHeader: false }
  );
}
