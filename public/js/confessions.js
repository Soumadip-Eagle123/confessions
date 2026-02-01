async function submitConfession() {
  await fetch('/api/confessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      confessionText: confessionText.value,
      type: type.value
    })
  });
  loadConfessions();
}

async function loadConfessions() {
  const res = await fetch('/api/confessions', { credentials: 'include' });
  const data = await res.json();

  confessionList.innerHTML = '';

  data.forEach(c => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <p><b>${c.type}</b></p>
      <p>${c.confession_text}</p>
      <p>Status: ${c.identity ? 'Revealed' : 'Hidden'}</p>
      <button onclick="requestReveal(${c.confess_id})">Request Reveal</button>
      <button onclick="acceptReveal(${c.confess_id})">Accept Reveal</button>
    `;
    confessionList.appendChild(div);
  });
}

async function requestReveal(id) {
  await fetch(`/api/confessions/${id}/request-reveal`, {
    method: 'POST',
    credentials: 'include'
  });
  loadConfessions();
}

async function acceptReveal(id) {
  await fetch(`/api/confessions/${id}/accept-reveal`, {
    method: 'PATCH',
    credentials: 'include'
  });
  loadConfessions();
}

loadConfessions();
