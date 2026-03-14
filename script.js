const revealElements = document.querySelectorAll('.reveal');
const cursorGlow = document.querySelector('.cursor-glow');
const hero = document.querySelector('.hero');
const layers = document.querySelectorAll('.hero-bg-layer');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 70, 400)}ms`;
  revealObserver.observe(el);
});

document.addEventListener('mousemove', (event) => {
  cursorGlow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

window.addEventListener(
  'scroll',
  () => {
    const offset = window.scrollY;
    layers.forEach((layer, idx) => {
      const depth = (idx + 1) * 0.13;
      layer.style.transform = `translate3d(0, ${offset * depth}px, 0)`;
    });

    if (hero) {
      const fade = Math.max(1 - offset / (window.innerHeight * 0.9), 0.2);
      hero.style.opacity = fade;
    }
  },
  { passive: true }
);

document.querySelector('#year').textContent = new Date().getFullYear();

const form = document.querySelector('.lead-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const btn = form.querySelector('button');
  btn.textContent = 'Request Sent ✓';
  btn.disabled = true;
});
