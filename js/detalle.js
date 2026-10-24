/* ============================================================
   TECNOROSITA — detalle.js
   Renderiza la ficha completa del producto y relacionados.
   ============================================================ */

let currentProduct = null;
let currentQty = 1;

function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function renderProductDetail() {
  const container = document.getElementById("productDetail");
  if (!container) return;

  const id = getProductIdFromURL();
  const p = findProductById(id);

  if (!p) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
        <h2>Producto no encontrado</h2>
        <p style="color: var(--text-faint); margin: 15px 0;">El producto que buscas no existe o fue eliminado.</p>
        <a href="productos.html" class="btn btn--gold">Volver al catálogo</a>
      </div>
    `;
    return;
  }

  currentProduct = p;
  const breadcrumbName = document.getElementById("breadcrumbProduct");
  if (breadcrumbName) breadcrumbName.textContent = p.name;

  const lowStock = p.stock > 0 && p.stock <= (p.stockCritico || 5);
  const imagenSRC = p.img || "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80";

  container.innerHTML = `
    <div class="detail__gallery">
      <div class="detail__mainImage">
        <img src="${imagenSRC}" alt="${p.name}" style="width:100%; height:100%; object-fit:cover; border-radius:12px;">
      </div>
    </div>
    <div class="detail__info">
      <span class="card__category">${p.category}</span>
      <h1 class="detail__title">${p.name}</h1>
      ${typeof starRating === "function" ? starRating(p.rating || 5) : ""}
      <p class="detail__sku">SKU: ${p.sku || 'N/A'}</p>
      <div class="detail__pricebox">
        ${(p.originalPrice && p.originalPrice > p.price) ? `<span class="detail__old-price">${formatCLP(p.originalPrice)}</span><span class="badge badge--discount">${Math.round(100 - (p.price / p.originalPrice * 100))}% DCTO.</span>` : ""}
        <p class="detail__price">${formatCLP(p.price)}</p>
        <span class="card__payment-note">Transferencia / Débito</span>
      </div>
      <p class="detail__desc">${p.description || p.shortDesc || 'Producto de alto rendimiento.'}</p>
      <div class="detail__stock ${lowStock ? "detail__stock--low" : ""}">
        ${p.stock === 0 ? '<span style="color:red; font-weight:bold;">Sin stock</span>' : (lowStock ? `¡Últimas unidades! (${p.stock} disponibles)` : `Stock disponible: ${p.stock}`)}
      </div>
      <div class="detail__actions">
        <div class="stepper">
          <button type="button" onclick="updateQtyInput(-1)" aria-label="Disminuir">-</button>
          <input type="number" id="qtyInput" value="1" min="1" max="${p.stock || 1}" readonly />
          <button type="button" onclick="updateQtyInput(1)" aria-label="Aumentar">+</button>
        </div>
        <button type="button" class="btn btn--gold btn--lg" id="addToCartDetailBtn">Añadir al Carrito</button>
      </div>
      <ul class="detail__specs">
        <li><span>Categoría</span><span>${p.category}</span></li>
        <li><span>SKU</span><span>${p.sku || 'N/A'}</span></li>
        <li><span>Garantía</span><span>12 meses TecnoRosita Care</span></li>
        <li><span>Envío</span><span>Gratis sobre ${formatCLP(FREE_SHIPPING_THRESHOLD)}</span></li>
      </ul>
    </div>
  `;

  const addBtn = document.getElementById("addToCartDetailBtn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const qty = parseInt(document.getElementById("qtyInput").value) || 1;
      const result = addToCart(p.id, qty);
      showToast(result.message, result.ok ? "success" : "error");
    });
  }

  renderRelatedProducts(p);
}

function updateQtyInput(delta) {
  const input = document.getElementById("qtyInput");
  if (!input || !currentProduct) return;
  let val = parseInt(input.value) + delta;
  val = Math.max(1, Math.min(val, currentProduct.stock || 1));
  input.value = val;
  currentQty = val;
}

function renderRelatedProducts(product) {
  const container = document.getElementById("relatedProducts");
  if (!container) return;

  const related = PRODUCTS.filter((p) => p.category === product.category && String(p.id) !== String(product.id)).slice(0, 4);
  if (related.length === 0) {
    container.closest(".related")?.setAttribute("hidden", "true");
    return;
  }

  container.innerHTML = related.map((p) => productCardHTML(p)).join("");
  
  container.querySelectorAll("[data-add-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.getAttribute("data-add-id");
      const result = addToCart(id, 1);
      if (typeof showToast === "function") showToast(result.message, result.ok ? "success" : "error");
    });
  });
}

document.addEventListener("DOMContentLoaded", renderProductDetail);