

const CART_KEY = "tecnorosita_cart";
const FREE_SHIPPING_THRESHOLD = 60000;
const SHIPPING_COST = 4990;

function formatCLP(value) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
  }).format(value);
}

function findProductById(id) {
  return PRODUCTS.find((p) => String(p.id) === String(id));
}

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((acc, item) => acc + item.qty, 0);
}

function addToCart(productId, qty = 1) {
  const product = findProductById(productId);
  if (!product) return { ok: false, message: "Producto no encontrado." };
  
  const cart = getCart();
  const existing = cart.find((item) => String(item.id) === String(productId));
  const currentQty = existing ? existing.qty : 0;
  const newQty = currentQty + qty;

  if (newQty > product.stock) {
    return { ok: false, message: `Stock insuficiente. Máximo disponible: ${product.stock}` };
  }

  if (existing) {
    existing.qty = newQty;
  } else {
    cart.push({ id: productId, qty: newQty });
  }
  saveCart(cart);
  return { ok: true, message: `¡${product.name} agregado al carrito!` };
}

function updateCartQty(productId, qty) {
  let cart = getCart();
  if (qty <= 0) {
    cart = cart.filter((item) => String(item.id) !== String(productId));
  } else {
    const item = cart.find((i) => String(i.id) === String(productId));
    const product = findProductById(productId);
    if (item) {
      item.qty = product ? Math.min(qty, product.stock) : qty;
    }
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  const cart = getCart().filter((item) => String(item.id) !== String(productId));
  saveCart(cart);
}

function getCartSubtotal() {
  const cart = getCart();
  return cart.reduce((acc, item) => {
    const product = findProductById(item.id);
    return acc + (product ? product.price * item.qty : 0);
  }, 0);
}

function getShippingCost() {
  const sub = getCartSubtotal();
  if (sub === 0) return 0;
  return sub >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
}

function getCartTotal() {
  return getCartSubtotal() + getShippingCost();
}

function updateCartBadge() {
  const badges = document.querySelectorAll(".cart-badge");
  const count = getCartCount();
  badges.forEach((badge) => {
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  });
}

function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add("is-visible"), 10);
  setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

document.addEventListener("DOMContentLoaded", updateCartBadge);