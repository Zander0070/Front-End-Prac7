const elements = document.querySelectorAll(".fade-in-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const target = entry.target as HTMLElement;
    if (entry.isIntersecting) {
      target.classList.add("show-on-scroll");
      target.classList.remove("hidden-on-load");
      observer.unobserve(target);
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));

