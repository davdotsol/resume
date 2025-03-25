document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.card, .skill-card');
  elements.forEach((el, idx) => {
    el.style.opacity = 0;
    el.style.transition = `opacity 0.6s ease ${idx * 0.1}s`;
    setTimeout(() => (el.style.opacity = 1), 200);
  });
});
