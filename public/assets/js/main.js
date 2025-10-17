const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
  const mobileBreakpoint = window.matchMedia('(max-width: 960px)');

  const setNavigationState = (isOpen) => {
    navToggle.setAttribute('aria-expanded', String(isOpen));
    mainNav.classList.toggle('is-open', isOpen);

    if (mobileBreakpoint.matches) {
      mainNav.toggleAttribute('aria-hidden', !isOpen);
      mainNav.toggleAttribute('inert', !isOpen);
    } else {
      mainNav.removeAttribute('aria-hidden');
      mainNav.removeAttribute('inert');
    }
  };

  const toggleNavigation = () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    setNavigationState(!isOpen);
  };

  const closeNavigation = () => setNavigationState(false);

  setNavigationState(false);

  navToggle.addEventListener('click', toggleNavigation);

  mainNav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement && mobileBreakpoint.matches) {
      closeNavigation();
    }
  });

  window.addEventListener('keyup', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      closeNavigation();
    }
  });

  mobileBreakpoint.addEventListener('change', () => {
    setNavigationState(false);
  });
}

const contactForm = document.querySelector('.contact-form');
const newsletterForm = document.querySelector('.newsletter-form');

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  form.classList.add('is-submitted');
  const button = form.querySelector('button');
  const originalText = button.textContent;
  button.textContent = 'Verzonden!';
  button.disabled = true;
  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    form.reset();
    form.classList.remove('is-submitted');
  }, 3000);
}

if (contactForm) {
  contactForm.addEventListener('submit', handleSubmit);
}

if (newsletterForm) {
  newsletterForm.addEventListener('submit', handleSubmit);
}
