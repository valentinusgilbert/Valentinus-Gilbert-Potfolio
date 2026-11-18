const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let observer;

const getObserver = () => {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
  }
  return observer;
};

export default {
  mounted(el, binding) {
    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      el.classList.add('is-revealed');
      return;
    }
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${Number(binding.value) || 0}ms`);
    getObserver().observe(el);
  },
  unmounted(el) {
    observer?.unobserve(el);
  },
};
