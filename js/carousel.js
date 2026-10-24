/* ============================================================
   TECNOROSITA — carousel.js
   Carrusel horizontal reutilizable para filas de productos,
   con flechas de navegación (izquierda/derecha) y scroll suave,
   replicando el patrón visual de las tiendas de referencia.
   ============================================================ */

/**
 * Renderiza una fila de carrusel horizontal dentro de containerId.
 * @param {string} containerId - id del contenedor donde se monta el carrusel
 * @param {Array} products - lista de productos a mostrar
 */
function renderCarousel(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <button type="button" class="carousel__arrow carousel__arrow--prev" aria-label="Ver anteriores">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <div class="carousel__track" id="${containerId}-track">
      ${products.map((p) => `<div class="carousel__item">${productCardHTML(p)}</div>`).join("")}
    </div>
    <button type="button" class="carousel__arrow carousel__arrow--next" aria-label="Ver siguientes">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  `;

  const track = document.getElementById(`${containerId}-track`);
  const prevBtn = container.querySelector(".carousel__arrow--prev");
  const nextBtn = container.querySelector(".carousel__arrow--next");

  const scrollStep = () => Math.min(track.clientWidth * 0.8, 640);

  prevBtn.addEventListener("click", () => track.scrollBy({ left: -scrollStep(), behavior: "smooth" }));
  nextBtn.addEventListener("click", () => track.scrollBy({ left: scrollStep(), behavior: "smooth" }));

  const updateArrows = () => {
    const maxScroll = track.scrollWidth - track.clientWidth - 4;
    prevBtn.classList.toggle("is-disabled", track.scrollLeft <= 4);
    nextBtn.classList.toggle("is-disabled", track.scrollLeft >= maxScroll);
  };
  track.addEventListener("scroll", updateArrows);
  updateArrows();

  // Delegar clicks de "Agregar al carrito" dentro del carrusel
  track.querySelectorAll("[data-add-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.getAttribute("data-add-id");
      const result = addToCart(id, 1);
      showToast(result.message, result.ok ? "success" : "error");
    });
  });
}
