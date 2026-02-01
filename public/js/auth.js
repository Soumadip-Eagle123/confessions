async function register() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      username: usernameInput.value,
      password: passwordInput.value
    })
  });

  if (res.ok) {
    window.location.href = 'login.html';
  } else {
    const data = await res.json();
    alert(data.error || 'Registration failed');
  }
}


async function login() {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      username: usernameInput.value,
      password: passwordInput.value
    })
  });

  if (res.ok) {
    window.location.href = 'confessions.html';
  } else {
    const data = await res.json();
    alert(data.error || 'Login failed');
  }
}



async function logout() {
  await fetch('/api/auth/logout', { credentials: 'include' });
  window.location.href = 'index.html';
}
