document.addEventListener('DOMContentLoaded', () => {
  // Shrink header on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('shrink', window.scrollY > 50);
  });

  // Dark/Light theme toggle
  const toggle = document.querySelector('.theme-toggle');
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute(
      'data-theme',
      current === 'dark' ? 'light' : 'dark'
    );
  });

  // Scroll-reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('active');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  reveals.forEach((r) => io.observe(r));
});
