document.addEventListener('DOMContentLoaded', function () {
  // Atualiza o ano do rodapé
  const anoEl = document.getElementById('ano-atual');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const wasActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!wasActive) item.classList.add('active');
    });
  });
});