/* ============================================================
   TECNOROSITA — detalle.js
   Obtiene el producto según el parámetro ?id= de la URL y
   renderiza su ficha completa + productos relacionados.
   ============================================================ */

let currentProduct = null;
let currentQty = 1;

function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

function renderProductDetail() {
  const id = getProductIdFromURL();
  currentProduct = findProductById(id);
  const container = document.getElementById("productDetail");
  if (!container) return;

  if (!currentProduct) {
    container.innerHTML = `
      <div class="not-found">
        <h2>Producto no encontrado</h2>
        <p>El producto que buscas no existe o fue retirado del catálogo.</p>
        <a href="productos.html" class="btn btn--gold">Volver al catálogo</a>
      </div>`;
    return;
  }

  const p = currentProduct;
  document.title = `${p.name} · TECNOROSITA`;

  const breadcrumb = document.getElementById("breadcrumbCategory");
  if (breadcrumb) {
    breadcrumb.textContent = p.category;
    breadcrumb.href = `productos.html?cat=${encodeURIComponent(p.category)}`;
  }
  const breadcrumbName = document.getElementById("breadcrumbProduct");
  if (breadcrumbName) breadcrumbName.textContent = p.name;

  const lowStock = p.stock <= p.stockCritico;

  container.innerHTML = `
    <div class="detail__gallery">
      <div class="detail__mainImage detail__mainImage--${p.category.toLowerCase()}">
        ${getCategoryIcon(p.icon)}
      </div>
      <div class="detail__thumbs">
        ${[0, 1, 2].map((i) => `<div class="detail__thumb${i === 0 ? " is-active" : ""}">${getCategoryIcon(p.icon)}</div>`).join("")}
      </div>
    </div>

    <div class="detail__info">
      <span class="card__category">${p.category}</span>
      <h1 class="detail__title">${p.name}</h1>
      ${starRating(p.rating)}
      <p class="detail__sku">SKU: ${p.sku}</p>
      <div class="detail__pricebox">
        ${discountPercent(p) > 0 ? `<span class="detail__old-price">${formatCLP(p.originalPrice)}</span><span class="badge badge--discount">${discountPercent(p)}% DCTO.</span>` : ""}
        <p class="detail__price">${formatCLP(p.price)}</p>
        <span class="card__payment-note">Transferencia / Débito</span>
      </div>
      <p class="detail__desc">${p.description}</p>

      <div class="detail__stock ${lowStock ? "detail__stock--low" : ""}">
        ${
          p.stock > 0
            ? lowStock
              ? `⚠ Stock crítico: solo quedan ${p.stock} unidades`
              : `✓ ${p.stock} unidades disponibles`
            : `✕ Sin stock disponible`
        }
      </div>

      <div class="detail__actions">
        <div class="qty-stepper">
          <button type="button" id="qtyMinus" aria-label="Disminuir cantidad">−</button>
          <input type="number" id="qtyInput" value="1" min="1" max="${p.stock}" readonly />
          <button type="button" id="qtyPlus" aria-label="Aumentar cantidad">+</button>
        </div>
        <button class="btn btn--gold btn--lg" id="addToCartBtn" ${p.stock === 0 ? "disabled" : ""}>
          Añadir al carrito
        </button>
      </div>

      <ul class="detail__specs">
        <li><span>Categoría</span><span>${p.category}</span></li>
        <li><span>SKU</span><span>${p.sku}</span></li>
        <li><span>Garantía</span><span>12 meses TecnoRosita Care</span></li>
        <li><span>Envío</span><span>Gratis sobre ${formatCLP(FREE_SHIPPING_THRESHOLD)}</span></li>
      </ul>
    </div>
  `;

  document.getElementById("qtyMinus").addEventListener("click", () => updateQtyInput(-1));
  document.getElementById("qtyPlus").addEventListener("click", () => updateQtyInput(1));
  document.getElementById("addToCartBtn").addEventListener("click", () => {
    const qty = Number(document.getElementById("qtyInput").value);
    const result = addToCart(p.id, qty);
    showToast(result.message, result.ok ? "success" : "error");
  });

  container.querySelectorAll(".detail__thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      container.querySelectorAll(".detail__thumb").forEach((t) => t.classList.remove("is-active"));
      thumb.classList.add("is-active");
    });
  });

  renderRelatedProducts(p);
}

function updateQtyInput(delta) {
  const input = document.getElementById("qtyInput");
  let value = Number(input.value) + delta;
  value = Math.max(1, Math.min(value, currentProduct.stock));
  input.value = value;
}

function renderRelatedProducts(product) {
  const container = document.getElementById("relatedProducts");
  if (!container) return;
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  if (related.length === 0) {
    container.closest(".related")?.setAttribute("hidden", "true");
    return;
  }

  container.innerHTML = related.map(productCardHTML).join("");
  container.querySelectorAll("[data-add-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.getAttribute("data-add-id");
      const result = addToCart(id, 1);
      showToast(result.message, result.ok ? "success" : "error");
    });
  });
}

document.addEventListener("DOMContentLoaded", renderProductDetail);
