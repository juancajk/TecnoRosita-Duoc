/* ============================================================
   TECNOROSITA — productos.js
   Renderiza el listado de productos de forma dinámica con soporte de imágenes.
   ============================================================ */

function discountPercent(product) {
  if (!product.originalPrice || product.originalPrice <= product.price) return 0;
  return Math.round(100 - (product.price / product.originalPrice * 100));
}

function stockLabel(stock) {
  if (stock === 0) return "Agotado";
  if (stock <= 5) return `¡Últimas unidades! (${stock})`;
  return `Stock: ${stock}`;
}

function productCardHTML(product) {
  const lowStock = product.stock > 0 && product.stock <= (product.stockCritico || 5);
  const discount = discountPercent(product);
  const noStock = product.stock === 0;

  // Renderiza la imagen real si existe, sino usa el icono SVG de respaldo
  const mediaContent = product.img
    ? `<img src="${product.img}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;">`
    : (typeof getCategoryIcon === "function" ? getCategoryIcon(product.icon) : "");

  return `
    <article class="card">
      <a href="detalle-producto.html?id=${product.id}" class="card__media card__media--${(product.category || '').toLowerCase()}">
        ${mediaContent}
        <div class="card__tags">
          ${discount > 0 ? `<span class="badge badge--discount">${discount}% DCTO.</span>` : ""}
          ${lowStock ? `<span class="badge badge--warning">¡Últimas unidades!</span>` : ""}
        </div>
      </a>
      <div class="card__body">
        <div class="card__meta">
          <span class="card__category">${product.category}</span>
          <span class="card__stock">${stockLabel(product.stock)}</span>
        </div>
        <a href="detalle-producto.html?id=${product.id}" class="card__title">${product.name}</a>
        ${typeof starRating === "function" ? starRating(product.rating || 5) : ""}
        <div class="card__pricebox">
          ${discount > 0 ? `<span class="card__old-price">${formatCLP(product.originalPrice)}</span>` : ""}
          <span class="card__price">${formatCLP(product.price)}</span>
        </div>
        <span class="card__payment-note">Transferencia / Débito</span>
        <button type="button" class="btn btn--gold btn--block" data-add-id="${product.id}" ${noStock ? "disabled style='opacity:0.5;cursor:not-allowed;'" : ""}>
          ${noStock ? "Sin Stock" : "Añadir al Carrito"}
        </button>
      </div>
    </article>
  `;
}

function renderProductGrid(list) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
        <h3>No se encontraron productos</h3>
        <p style="color: var(--text-faint); margin-top: 10px;">Prueba cambiando los filtros o el término de búsqueda.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map((p) => productCardHTML(p)).join("");

  grid.querySelectorAll("[data-add-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.getAttribute("data-add-id");
      const result = addToCart(id, 1);
      if (typeof showToast === "function") showToast(result.message, result.ok ? "success" : "error");
    });
  });
}

function populateCategoryFilter() {
  const select = document.getElementById("categoryFilter");
  if (!select) return;
  const categories = [...new Set(PRODUCTS.map((p) => p.category))];
  categories.forEach((cat) => {
    if (cat) {
      const opt = document.createElement("option");
      opt.value = cat;
      opt.textContent = cat;
      select.appendChild(opt);
    }
  });

  const params = new URLSearchParams(window.location.search);
  const catParam = params.get("cat");
  if (catParam) {
    select.value = catParam;
  }
}

function applyFilters() {
  let list = [...PRODUCTS];
  const cat = document.getElementById("categoryFilter")?.value || "";
  const sort = document.getElementById("sortFilter")?.value || "";
  const search = document.getElementById("searchInput")?.value.toLowerCase().trim() || "";

  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get("cat");
  const urlSearch = params.get("search");

  const activeCat = cat || urlCat;
  const activeSearch = search || urlSearch;

  if (activeCat) {
    list = list.filter((p) => p.category.toLowerCase() === activeCat.toLowerCase());
    const select = document.getElementById("categoryFilter");
    if (select) select.value = activeCat;
  }

  if (activeSearch) {
    list = list.filter((p) => 
      p.name.toLowerCase().includes(activeSearch) || 
      p.category.toLowerCase().includes(activeSearch) ||
      (p.description && p.description.toLowerCase().includes(activeSearch))
    );
    const input = document.getElementById("searchInput");
    if (input) input.value = activeSearch;
  }

  switch (sort) {
    case "precio-asc": list.sort((a, b) => a.price - b.price); break;
    case "precio-desc": list.sort((a, b) => b.price - a.price); break;
    case "nombre": list.sort((a, b) => a.name.localeCompare(b.name)); break;
    default: list.sort((a, b) => (b.featured || 0) - (a.featured || 0));
  }

  renderProductGrid(list);
}

document.addEventListener("DOMContentLoaded", () => {
  populateCategoryFilter();
  applyFilters();
  ["categoryFilter", "sortFilter"].forEach((id) => {
    document.getElementById(id)?.addEventListener("change", applyFilters);
  });
  document.getElementById("searchInput")?.addEventListener("input", applyFilters);
});