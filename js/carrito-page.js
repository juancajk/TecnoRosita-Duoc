/* ============================================================
   TECNOROSITA — carrito-page.js
   Renderiza la vista "Mi Carrito" con el detalle de cada
   producto, controles de cantidad, resumen del pedido y
   checkout simulado (sin backend).
   ============================================================ */

function cartRowHTML(item) {
  return `
    <tr data-row-id="${item.id}">
      <td class="cart-table__product">
        <div class="cart-table__thumb cart-table__thumb--${item.category.toLowerCase()}">${getCategoryIcon(item.icon)}</div>
        <div>
          <a href="detalle-producto.html?id=${item.id}">${item.name}</a>
          <span class="cart-table__cat">${item.category}</span>
        </div>
      </td>
      <td>${formatCLP(item.price)}</td>
      <td>
        <div class="qty-stepper qty-stepper--sm">
          <button type="button" data-qty-minus="${item.id}" aria-label="Disminuir">−</button>
          <input type="number" value="${item.qty}" min="1" max="${item.stock}" data-qty-input="${item.id}" readonly />
          <button type="button" data-qty-plus="${item.id}" aria-label="Aumentar">+</button>
        </div>
      </td>
      <td class="cart-table__subtotal">${formatCLP(item.subtotal)}</td>
      <td><button class="cart-table__remove" data-remove="${item.id}" aria-label="Eliminar producto">✕</button></td>
    </tr>
  `;
}

function renderCartPage() {
  const details = getCartDetails();
  const tbody = document.getElementById("cartBody");
  const emptyState = document.getElementById("cartEmpty");
  const summary = document.getElementById("cartSummary");
  if (!tbody) return;

  if (details.length === 0) {
    tbody.innerHTML = "";
    if (emptyState) emptyState.hidden = false;
    if (summary) summary.hidden = true;
    return;
  }

  if (emptyState) emptyState.hidden = true;
  if (summary) summary.hidden = false;

  tbody.innerHTML = details.map(cartRowHTML).join("");

  document.getElementById("summarySubtotal").textContent = formatCLP(getCartSubtotal());
  const shipping = getShippingCost();
  document.getElementById("summaryShipping").textContent = shipping === 0 ? "Gratis" : formatCLP(shipping);
  document.getElementById("summaryTotal").textContent = formatCLP(getCartTotal());

  const remaining = FREE_SHIPPING_THRESHOLD - getCartSubtotal();
  const shippingNote = document.getElementById("shippingNote");
  if (shippingNote) {
    shippingNote.textContent =
      remaining > 0
        ? `Te faltan ${formatCLP(remaining)} para obtener envío gratis.`
        : "¡Tu pedido califica para envío gratis!";
  }

  attachCartEvents();
}

function attachCartEvents() {
  document.querySelectorAll("[data-qty-plus]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-qty-plus");
      const item = getCart().find((i) => i.id === Number(id));
      const product = findProductById(id);
      const newQty = Math.min((item?.qty || 0) + 1, product.stock);
      updateCartQty(id, newQty);
      renderCartPage();
    });
  });
  document.querySelectorAll("[data-qty-minus]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-qty-minus");
      const item = getCart().find((i) => i.id === Number(id));
      const newQty = (item?.qty || 1) - 1;
      updateCartQty(id, newQty);
      renderCartPage();
    });
  });
  document.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeFromCart(btn.getAttribute("data-remove"));
      showToast("Producto eliminado del carrito.", "success");
      renderCartPage();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("cartBody")) return;
  renderCartPage();

  document.getElementById("checkoutBtn")?.addEventListener("click", () => {
    if (getCartCount() === 0) return;
    document.getElementById("checkoutModal").hidden = false;
  });
  document.getElementById("closeCheckoutModal")?.addEventListener("click", () => {
    document.getElementById("checkoutModal").hidden = true;
  });
  document.getElementById("confirmCheckoutBtn")?.addEventListener("click", () => {
    clearCart();
    document.getElementById("checkoutModal").hidden = true;
    renderCartPage();
    showToast("¡Pedido simulado con éxito! Gracias por tu compra en TecnoRosita.", "success");
  });

  document.getElementById("couponForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("El cupón ingresado no es válido o expiró.", "error");
  });
});
