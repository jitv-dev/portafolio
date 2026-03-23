// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// ── CERT & EDU CARDS REVEAL ──
const allReveal = document.querySelectorAll('.cert-card, .edu-card, .timeline-item');
const obs2 = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      obs2.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

allReveal.forEach(el => obs2.observe(el));

// ── NAV ACTIVE STATE ──
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

// ── SMOOTH NAV HIDE ON SCROLL DOWN ──
let lastY = 0;
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.style.transform = y > lastY && y > 100 ? 'translateY(-100%)' : 'translateY(0)';
  nav.style.transition = 'transform 0.35s ease';
  lastY = y;
});

// ── SKILL PILLS STAGGER ──
const pills = document.querySelectorAll('.skill-pill');
pills.forEach((pill, i) => {
  pill.style.animationDelay = `${i * 40}ms`;
  pill.style.opacity = '0';
  pill.style.transform = 'translateY(8px)';
  pill.style.transition = `opacity 0.4s ease ${i * 30}ms, transform 0.4s ease ${i * 30}ms`;
});

const pillObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      pills.forEach(p => {
        p.style.opacity = '1';
        p.style.transform = 'translateY(0)';
      });
      pillObs.disconnect();
    }
  });
}, { threshold: 0.3 });

const skillsCloud = document.querySelector('.skills-cloud');
if (skillsCloud) pillObs.observe(skillsCloud);

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('nav-hamburger');
const navEl = document.querySelector('nav');

if (hamburger && navEl) {
  // Toggle al hacer click en el botón
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navEl.classList.toggle('nav-open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Cerrar al hacer click en un enlace
  navEl.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navEl.classList.remove('nav-open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Cerrar al hacer click fuera del nav
  document.addEventListener('click', (e) => {
    if (!navEl.contains(e.target)) {
      navEl.classList.remove('nav-open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Cerrar al hacer scroll (opcional, mejora UX)
  window.addEventListener('scroll', () => {
    if (navEl.classList.contains('nav-open')) {
      navEl.classList.remove('nav-open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }, { passive: true });
}