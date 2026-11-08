const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Otevřít navigaci' : 'Zavřít navigaci');
  mainNav?.classList.toggle('is-open', !isOpen);
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Otevřít navigaci');
    mainNav.classList.remove('is-open');
  });
});

const bookingForm = document.querySelector('#booking-form');
const formFeedback = document.querySelector('#form-feedback');

bookingForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;

  const name = new FormData(bookingForm).get('name')?.toString().trim();
  if (formFeedback) {
    formFeedback.textContent = `Děkujeme${name ? `, ${name}` : ''}. Ukázkový formulář zatím zprávu neodesílá. Zavolejte nám.`;
  }
  bookingForm.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();
