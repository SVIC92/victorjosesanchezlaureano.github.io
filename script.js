document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenuContainer = document.querySelector(".nav-menu-container");

  if (menuToggle && navMenuContainer) {
    menuToggle.addEventListener("click", () => {
      navMenuContainer.classList.toggle("open");
    });

    navMenuContainer.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (link && window.matchMedia("(max-width: 991.98px)").matches) {
        navMenuContainer.classList.remove("open");
      }
    });
  }

  const chips = document.querySelectorAll(".skill-filters .chip");
  const cards = document.querySelectorAll(".skills-grid .skill");

  function applyFilter(filter) {
    cards.forEach((card) => {
      const cat = card.dataset.category;
      if (filter === "all" || cat === filter) card.classList.remove("is-hidden");
      else card.classList.add("is-hidden");
    });
  }

  if (chips.length && cards.length) {
    chips.forEach((chip) => {
      const activate = () => {
        const filter = chip.dataset.filter;
        chips.forEach((c) => {
          c.classList.remove("is-active");
          c.setAttribute("aria-selected", "false");
        });
        chip.classList.add("is-active");
        chip.setAttribute("aria-selected", "true");
        applyFilter(filter);
      };
      chip.addEventListener("click", activate);
      chip.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activate();
        }
      });
    });
    applyFilter("all");
  }

  let lastY = window.pageYOffset || 0;
  function handleScroll() {
    if (!navMenuContainer) return;
    const y = window.pageYOffset || 0;
    const isDesktop = window.matchMedia("(min-width: 992px)").matches;

    if (y > 2) navMenuContainer.classList.add("scrolled");
    else navMenuContainer.classList.remove("scrolled");

    if (!isDesktop) {
      navMenuContainer.classList.remove("hide");
      lastY = y; return;
    }
    if (y > lastY && y > 100) navMenuContainer.classList.add("hide"); 
    else navMenuContainer.classList.remove("hide");                   
    lastY = y;
  }
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  document.querySelectorAll(".cert-carousel").forEach((carousel) => {
    const viewport = carousel.querySelector(".cert-viewport");
    const prevBtn = carousel.querySelector(".cert-arrow.prev");
    const nextBtn = carousel.querySelector(".cert-arrow.next");

    const updateArrows = () => {
      const max = viewport.scrollWidth - viewport.clientWidth - 1;
      prevBtn.classList.toggle("is-disabled", viewport.scrollLeft <= 0);
      nextBtn.classList.toggle("is-disabled", viewport.scrollLeft >= max);
    };

    const page = () => viewport.clientWidth;
    prevBtn.addEventListener("click", () => viewport.scrollBy({ left: -page(), behavior: "smooth" }));
    nextBtn.addEventListener("click", () => viewport.scrollBy({ left:  page(), behavior: "smooth" }));

    viewport.addEventListener("scroll", updateArrows, { passive:true });
    window.addEventListener("resize", updateArrows);
    updateArrows();
  });
});