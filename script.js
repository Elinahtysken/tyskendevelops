function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function openPrivacy() {
  document.getElementById('privacyModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePrivacy(e) {
  if (!e || e.target === document.getElementById('privacyModal')) {
    document.getElementById('privacyModal').classList.remove('open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePrivacy();
});

document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  if (menu.classList.contains('open') &&
      !menu.contains(e.target) &&
      !e.target.closest('.burger')) {
    menu.classList.remove('open');
  }
});
