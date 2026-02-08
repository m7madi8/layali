/**
 * ليالي كافيه — تفاعلات المنيو
 * Scroll reveal + تحسينات UX
 */

(function () {
  'use strict';

  const sections = document.querySelectorAll('[data-reveal]');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));

  // إظهار أول الأقسام فوراً إذا كان في الواجهة
  const firstSection = document.querySelector('.menu-section');
  if (firstSection) {
    const rect = firstSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      firstSection.classList.add('revealed');
    }
  }
})();
