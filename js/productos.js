/* ============================================================
   TECNOROSITA — productos.js
   Renderiza el listado de productos (Array PRODUCTS) de forma
   dinámica en el DOM, con filtro por categoría y orden.
   ============================================================ */

function discountPercent(product) {
  if (!product.originalPrice || product.originalPrice <= product.price) return 0;
  return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
}

function stockLabel(stock) {
  if (stock <= 0) return "Sin stock";
  if (stock >= 30) return "+30 Unid.";
  return `${stock} Unid.`;
}

function productCardHTML(product) {
  const lowStock = product.stock > 0 && product.stock <= product.stockCritico;
  const discount = discountPercent(product);
  const noStock = product.stock === 0;

  return `
    <article class="card">
      <a href="detalle-producto.html?id=${product.id}" class="card__media card__media--${product.category.toLowerCase()}">
        ${getCategoryIcon(product.icon)}
        <div class="card__tags">
          ${discount > 0 ? `<span class="badge badge--discount">${discount}% DCTO.</span>` : ""}
          ${lowStock ? `<span class="badge badge--warning">¡Últimas unidades!</span>` : ""}
        </div>
      </a>
      <div class="card__body">
        <div class="card__top">
          <span class="card__category">${product.category}</span>
          <span class="card__stock">${stockLabel(product.stock)}</span>
        </div>
        <a href="detalle-producto.html?id=${product.id}" class="card__title">${product.name}</a>
        ${starRating(product.rating)}

        <div class="card__pricebox">
          ${discount > 0 ? `<span class="card__old-price">${formatCLP(product.originalPrice)}</span>` : ""}
          <span class="card__price">${formatCLP(product.price)}</span>
          <span class="card__payment-note">Transferencia / Débito</span>
        </div>

        <button class="btn btn--add" data-add-id="${product.id}" ${noStock ? "disabled" : ""} aria-label="Añadir ${product.name} al carrito">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M3 4h2l1.6 9.6a2 2 0 0 0 2 1.7h7.7a2 2 0 0 0 2-1.6L20 8H6.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="20" r="1.3" fill="currentColor"/><circle cx="17" cy="20" r="1.3" fill="currentColor"/></svg>
          ${noStock ? "Sin stock" : "Agregar al carrito"}
        </button>
      </div>
    </article>
  `;
}

function renderProductGrid(list) {
  const grid = document.getElementById("productGrid");
  const emptyState = document.getElementById("emptyState");
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.hidden = false;
    return;
  }
  if (emptyState) emptyState.hidden = true;
  grid.innerHTML = list.map(productCardHTML).join("");

  grid.querySelectorAll("[data-add-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.getAttribute("data-add-id");
      const result = addToCart(id, 1);
      showToast(result.message, result.ok ? "success" : "error");
    });
  });
}

function populateCategoryFilter() {
  const select = document.getElementById("categoryFilter");
  if (!select) return;
  const categories = [...new Set(PRODUCTS.map((p) => p.category))];
  categories.forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });

  const params = new URLSearchParams(window.location.search);
  const preset = params.get("cat");
  if (preset && categories.includes(preset)) select.value = preset;

  const search = params.get("search");
  const searchInput = document.getElementById("searchInput");
  if (search && searchInput) searchInput.value = search;
}

function applyFilters() {
  const category = document.getElementById("categoryFilter")?.value || "todas";
  const sort = document.getElementById("sortSelect")?.value || "relevancia";
  const search = document.getElementById("searchInput")?.value.trim().toLowerCase() || "";

  let list = [...PRODUCTS];

  if (category !== "todas") {
    list = list.filter((p) => p.category === category);
  }
  if (search) {
    list = list.filter((p) => p.name.toLowerCase().includes(search));
  }

  switch (sort) {
    case "precio-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "precio-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "nombre":
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      list.sort((a, b) => b.featured - a.featured);
  }

  renderProductGrid(list);
  const counter = document.getElementById("resultsCount");
  if (counter) counter.textContent = `${list.length} producto${list.length !== 1 ? "s" : ""}`;
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("productGrid")) return;
  populateCategoryFilter();
  applyFilters();

  ["categoryFilter", "sortSelect"].forEach((id) => {
    document.getElementById(id)?.addEventListener("change", applyFilters);
  });
  document.getElementById("searchInput")?.addEventListener("input", applyFilters);
});
