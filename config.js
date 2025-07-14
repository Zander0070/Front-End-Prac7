var elements = document.querySelectorAll(".fade-in-section");
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        var target = entry.target;
        if (entry.isIntersecting) {
            target.classList.add("show-on-scroll");
            target.classList.remove("hidden-on-load");
            observer.unobserve(target);
        }
    });
}, { threshold: 0.1 });
elements.forEach(function (el) { return observer.observe(el); });
