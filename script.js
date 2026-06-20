/* Dicno Entertainment — script.js */

/* ── Nav scroll state ── */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Fade-up scroll reveal ──
   Each .fade-up element transitions in when it crosses the viewport.
   Siblings within a grid get a small stagger delay. */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;

      // Stagger within same parent grid
      const siblings = [...el.parentElement.querySelectorAll('.fade-up')];
      const idx = siblings.indexOf(el);
      if (idx > 0) el.style.transitionDelay = `${idx * 0.08}s`;

      el.classList.add('visible');
      observer.unobserve(el);
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── Footer year ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
