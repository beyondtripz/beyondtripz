(() => {
  const header = document.querySelector('[data-header]'), toggle = document.querySelector('[data-menu-toggle]'), menu = document.querySelector('[data-menu]');
  const syncHeader = () => header?.classList.toggle('scrolled', window.scrollY > 18);
  syncHeader(); window.addEventListener('scroll', syncHeader, { passive: true });
  toggle?.addEventListener('click', () => { const open = menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); toggle.querySelector('i').className = open ? 'fas fa-times' : 'fas fa-bars'; document.body.classList.toggle('menu-open', open); });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.classList.remove('open'); document.body.classList.remove('menu-open'); toggle?.setAttribute('aria-expanded', 'false'); }));
  document.querySelectorAll('.faq-question').forEach(button => button.addEventListener('click', () => { const item = button.closest('.faq-item'), isOpen = item.classList.toggle('open'); button.setAttribute('aria-expanded', String(isOpen)); }));
  document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });
  const service = new URLSearchParams(window.location.search).get('service'), serviceSelect = document.querySelector('#service'); if (service && serviceSelect) serviceSelect.value = service;
})();
