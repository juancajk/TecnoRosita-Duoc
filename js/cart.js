/* ============================================================
   TECNOROSITA — cart.js
   Módulo del carrito de compras.
   Reglas de negocio del carrito (definidas para este proyecto):
     1. El carrito se persiste en localStorage bajo la clave
        "tecnorosita_cart" como un arreglo de objetos {id, qty}.
     2. No se puede agregar más unidades que el stock disponible
        del producto.
     3. La cantidad mínima por producto en el carrito es 1;
        si baja de 1 mediante el stepper, el producto se elimina.
     4. El envío es gratuito para compras sobre $60.000 CLP,
        de lo contrario se cobra un despacho fijo de $4.990 CLP.
   ============================================================ */

const CART_KEY = "tecnorosita_cart";
const FREE_SHIPPING_THRESHOLD = 60000;
const SHIPPING_COST = 4990;

/* ---------- Utilidades ---------- */

function formatCLP(value) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
  }).format(value);
}

function findProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}

/* ---------- Persistencia ---------- */

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error leyendo el carrito:", e);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    console.error("Error guardando el carrito:", e);
  }
  updateCartBadge();
}

/* ---------- Operaciones del carrito ---------- */

function addToCart(productId, qty = 1) {
  const product = findProductById(productId);
  if (!product) return { ok: false, message: "Producto no encontrado." };

  const cart = getCart();
  const existing = cart.find((item) => item.id === Number(productId));
  const currentQty = existing ? existing.qty : 0;
  const newQty = currentQty + qty;

  if (newQty > product.stock) {
    return {
      ok: false,
      message: `Solo quedan ${product.stock} unidades de "${product.name}" en stock.`
    };
  }

  if (existing) {
    existing.qty = newQty;
  } else {
    cart.push({ id: Number(productId), qty: newQty });
  }

  saveCart(cart);
  return { ok: true, message: `"${product.name}" se añadió al carrito.` };
}

function updateCartQty(productId, qty) {
  const product = findProductById(productId);
  let cart = getCart();

  if (qty <= 0) {
    cart = cart.filter((item) => item.id !== Number(productId));
  } else {
    const item = cart.find((i) => i.id === Number(productId));
    if (item) {
      item.qty = product ? Math.min(qty, product.stock) : qty;
    }
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.id !== Number(productId));
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartDetails() {
  return getCart()
    .map((item) => {
      const product = findProductById(item.id);
      if (!product) return null;
      return {
        ...product,
        qty: item.qty,
        subtotal: product.price * item.qty
      };
    })
    .filter(Boolean);
}

function getCartSubtotal() {
  return getCartDetails().reduce((sum, item) => sum + item.subtotal, 0);
}

function getShippingCost() {
  const subtotal = getCartSubtotal();
  if (subtotal === 0) return 0;
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
}

function getCartTotal() {
  return getCartSubtotal() + getShippingCost();
}

/* ---------- UI: badge del carrito (todas las páginas) ---------- */

function updateCartBadge() {
  const badges = document.querySelectorAll(".cart-badge");
  const count = getCartCount();
  badges.forEach((badge) => {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  });
}

/* ---------- UI: Toast de notificación ---------- */

function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span class="toast__icon">${type === "success" ? "✓" : "⚠"}</span>
    <span class="toast__msg">${message}</span>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("toast--show"));
  setTimeout(() => {
    toast.classList.remove("toast--show");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
