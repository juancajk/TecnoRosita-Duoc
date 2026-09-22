/* ============================================================
   TECNOROSITA — home.js
   Carrusel del banner principal y renderizado de productos
   destacados (featured) en la página de inicio.
   ============================================================ */

function initHeroCarousel() {
  const slides = document.querySelectorAll(".hero__slide");
  const dotsContainer = document.getElementById("heroDots");
  if (slides.length === 0) return;

  let current = 0;
  let timer = null;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "hero__dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", `Ir a la diapositiva ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsContainer?.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove("is-active");
    dotsContainer?.children[current]?.classList.remove("is-active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("is-active");
    dotsContainer?.children[current]?.classList.add("is-active");
    resetTimer();
  }

  function next() {
    goTo(current + 1);
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, 6000);
  }

  document.getElementById("heroPrev")?.addEventListener("click", () => goTo(current - 1));
  document.getElementById("heroNext")?.addEventListener("click", () => goTo(current + 1));

  resetTimer();
}

function renderHomeCarousels() {
  const featured = PRODUCTS.filter((p) => p.featured);
  renderCarousel("featuredCarousel", featured);

  renderCarousel("allProductsCarousel", PRODUCTS);

  const setupGamer = PRODUCTS.filter((p) => ["Teclados", "Mouse", "Sillas"].includes(p.category));
  renderCarousel("setupCarousel", setupGamer);

  const componentes = PRODUCTS.filter((p) => ["Componentes", "Accesorios", "Audio", "Audífonos"].includes(p.category));
  renderCarousel("comboCarousel", componentes);

  const conectividad = PRODUCTS.filter((p) => ["Streaming", "Hogar Inteligente", "Monitores", "Laptops"].includes(p.category));
  renderCarousel("streamingCarousel", conectividad);
}

document.addEventListener("DOMContentLoaded", () => {
  initHeroCarousel();
  renderHomeCarousels();
});
