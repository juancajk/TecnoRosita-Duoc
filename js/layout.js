/* ============================================================
   TECNOROSITA — layout.js
   Genera dinámicamente la barra de navegación y el footer,
   inyectándolos en cada página. Esto garantiza que el menú de
   navegación sea idéntico y consistente en todo el sitio
   (requisito: elementos de navegación / barra de menú consistente).
   ============================================================ */

const NAV_LINKS = [
  { href: "index.html", label: "Home" },
  { href: "productos.html", label: "Productos" },
  { href: "nosotros.html", label: "Nosotros" },
  { href: "contacto.html", label: "Contacto" }
];

const NAV_CATEGORIES = [
  "Teclados", "Mouse", "Audífonos", "Monitores", "Sillas", "Laptops",
  "Audio", "Componentes", "Hogar Inteligente", "Streaming", "Accesorios"
];

function renderTopBar() {
  return `
    <div class="topbar">
      🚀 <strong>Envío gratis</strong> en compras sobre $60.000 &nbsp;|&nbsp; Retiro gratuito en tiendas TecnoRosita &nbsp;|&nbsp; Cuotas sin interés con tarjetas seleccionadas
    </div>
  `;
}

function renderNavbar(activePage) {
  const links = NAV_LINKS.map((link) => {
    const isActive = link.href === activePage ? " is-active" : "";
    return `<li><a class="nav__link${isActive}" href="${link.href}">${link.label}</a></li>`;
  }).join("");

  const categoryLinks = NAV_CATEGORIES.map(
    (cat) => `<a href="productos.html?cat=${encodeURIComponent(cat)}">${cat}</a>`
  ).join("");

  return `
    <nav class="navbar" id="navbar">
      <div class="navbar__inner container">
        <a href="index.html" class="brand" aria-label="TECNOROSITA - Inicio">
          <svg class="brand__mark" width="34" height="34" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="24,2 44,14 44,34 24,46 4,34 4,14" fill="#0a0a0e" stroke="url(#goldGrad)" stroke-width="2"/>
            <polygon points="24,10 37,17.5 37,32.5 24,40 11,32.5 11,17.5" fill="none" stroke="url(#goldGrad)" stroke-width="1.2"/>
            <path d="M24 15c-3 0-5.5 2.2-5.5 5.2 0 3.6 3.4 6 5.5 8.3 2.1-2.3 5.5-4.7 5.5-8.3 0-3-2.5-5.2-5.5-5.2z" fill="url(#goldGrad)"/>
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#ffe3b0"/>
                <stop offset="0.5" stop-color="#e8869f"/>
                <stop offset="1" stop-color="#a8455f"/>
              </linearGradient>
            </defs>
          </svg>
          <span class="brand__text">TecnoRosita<span class="brand__sub">PREMIUM GAMER</span></span>
        </a>

        <div class="nav__categories" id="navCategories">
          <button class="nav__categories-btn" id="navCategoriesBtn" aria-expanded="false">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            Categorías
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
          <div class="nav__categories-menu">${categoryLinks}</div>
        </div>

        <div class="navbar__search">
          <form id="navSearchForm" role="search">
            <input type="search" id="navSearchInput" placeholder="Busca tu próximo equipo gamer..." aria-label="Buscar producto" />
            <button type="submit" aria-label="Buscar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
          </form>
        </div>

        <ul class="nav__links" id="navLinks">${links}</ul>

        <div class="navbar__actions">
          <a href="contacto.html" class="navbar__login">
            <span>Hola,</span><strong>Ingresa / Regístrate</strong>
          </a>
          <a href="carrito.html" class="cart-icon" aria-label="Ver carrito de compras">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4h2l1.6 9.6a2 2 0 0 0 2 1.7h7.7a2 2 0 0 0 2-1.6L20 8H6.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="10" cy="20" r="1.4" fill="currentColor"/>
              <circle cx="17" cy="20" r="1.4" fill="currentColor"/>
            </svg>
            <span class="cart-badge">0</span>
          </a>
          <button type="button" class="nav__toggle" id="navToggle" aria-label="Abrir menú" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  `;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="footer">
      <div class="container footer__grid">
        <div class="footer__brand">
          <span class="brand__text brand__text--footer">TecnoRosita<span class="brand__sub">PREMIUM GAMER</span></span>
          <p class="footer__desc">Equipamiento gamer de alta gama. Rendimiento de torneo, terminaciones de lujo.</p>
          <div class="footer__social">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Discord">DC</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>
        <div class="footer__col">
          <h4>Navegación</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="productos.html">Productos</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="contacto.html">Contacto</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Categorías</h4>
          <ul>
            <li><a href="productos.html?cat=Teclados">Teclados</a></li>
            <li><a href="productos.html?cat=Mouse">Mouse</a></li>
            <li><a href="productos.html?cat=Audífonos">Audífonos</a></li>
            <li><a href="productos.html?cat=Monitores">Monitores</a></li>
          </ul>
        </div>
        <div class="footer__col footer__newsletter">
          <h4>Únete al club TecnoRosita</h4>
          <p>Ofertas exclusivas y lanzamientos anticipados.</p>
          <form class="newsletter-form" onsubmit="event.preventDefault(); showToast('¡Gracias por suscribirte!');">
            <input type="email" placeholder="tu@correo.com" required aria-label="Correo para newsletter"/>
            <button type="submit">Unirme</button>
          </form>
        </div>
      </div>
      <div class="footer__bottom container">
        <span>© ${year} TECNOROSITA. Todos los derechos reservados.</span>
        <div class="footer__payments" aria-label="Métodos de pago aceptados">
          <span>VISA</span><span>MASTERCARD</span><span>WEBPAY</span>
        </div>
      </div>
    </footer>
  `;
}

function initLayout(activePage) {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = renderTopBar() + renderNavbar(activePage);
  if (footerEl) footerEl.innerHTML = renderFooter();

  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.classList.toggle("is-active", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.classList.remove("is-active");
      })
    );
  }

  // Menú desplegable de categorías
  const catWrapper = document.getElementById("navCategories");
  const catBtn = document.getElementById("navCategoriesBtn");
  if (catWrapper && catBtn) {
    catBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = catWrapper.classList.toggle("is-open");
      catBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    document.addEventListener("click", (e) => {
      if (!catWrapper.contains(e.target)) {
        catWrapper.classList.remove("is-open");
        catBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Buscador del navbar → redirige al catálogo con el término de búsqueda
  const searchForm = document.getElementById("navSearchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const term = document.getElementById("navSearchInput").value.trim();
      window.location.href = `productos.html${term ? "?search=" + encodeURIComponent(term) : ""}`;
    });
  }

  updateCartBadge();
  initScrollEffects();
}

function initScrollEffects() {
  const nav = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 20;
    if (nav) nav.classList.toggle("navbar--scrolled", scrolled);
    if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 500);
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
}

/* ---------- Íconos de categoría de producto (SVG en línea, sin dependencias externas) ---------- */

const CATEGORY_ICONS = {
  keyboard: `<svg viewBox="0 0 64 64" fill="none"><rect x="6" y="18" width="52" height="30" rx="4" stroke="currentColor" stroke-width="2"/><rect x="12" y="24" width="6" height="6" fill="currentColor" opacity=".8"/><rect x="21" y="24" width="6" height="6" fill="currentColor" opacity=".6"/><rect x="30" y="24" width="6" height="6" fill="currentColor" opacity=".8"/><rect x="39" y="24" width="6" height="6" fill="currentColor" opacity=".6"/><rect x="48" y="24" width="6" height="6" fill="currentColor" opacity=".8"/><rect x="12" y="33" width="6" height="6" fill="currentColor" opacity=".6"/><rect x="21" y="33" width="6" height="6" fill="currentColor" opacity=".8"/><rect x="30" y="33" width="18" height="6" fill="currentColor" opacity=".6"/><rect x="48" y="33" width="6" height="6" fill="currentColor" opacity=".8"/></svg>`,
  mouse: `<svg viewBox="0 0 64 64" fill="none"><rect x="20" y="8" width="24" height="48" rx="12" stroke="currentColor" stroke-width="2"/><line x1="32" y1="8" x2="32" y2="26" stroke="currentColor" stroke-width="2"/><line x1="20" y1="26" x2="44" y2="26" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="18" r="2.4" fill="currentColor"/></svg>`,
  headset: `<svg viewBox="0 0 64 64" fill="none"><path d="M12 34v-4a20 20 0 0 1 40 0v4" stroke="currentColor" stroke-width="2" fill="none"/><rect x="8" y="32" width="10" height="18" rx="4" stroke="currentColor" stroke-width="2"/><rect x="46" y="32" width="10" height="18" rx="4" stroke="currentColor" stroke-width="2"/><path d="M18 46c0 6 4 9 10 9" stroke="currentColor" stroke-width="2"/></svg>`,
  monitor: `<svg viewBox="0 0 64 64" fill="none"><rect x="6" y="10" width="52" height="34" rx="3" stroke="currentColor" stroke-width="2"/><line x1="32" y1="44" x2="32" y2="52" stroke="currentColor" stroke-width="2"/><line x1="20" y1="56" x2="44" y2="56" stroke="currentColor" stroke-width="2"/></svg>`,
  chair: `<svg viewBox="0 0 64 64" fill="none"><path d="M18 8h28l-3 26H21z" stroke="currentColor" stroke-width="2"/><path d="M21 34l-6 22M43 34l6 22M24 40h16" stroke="currentColor" stroke-width="2"/><circle cx="14" cy="58" r="2.2" fill="currentColor"/><circle cx="50" cy="58" r="2.2" fill="currentColor"/></svg>`,
  laptop: `<svg viewBox="0 0 64 64" fill="none"><rect x="12" y="12" width="40" height="26" rx="2" stroke="currentColor" stroke-width="2"/><path d="M6 48h52l-4 6H10z" stroke="currentColor" stroke-width="2"/></svg>`,
  speaker: `<svg viewBox="0 0 64 64" fill="none"><rect x="18" y="6" width="28" height="52" rx="6" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="20" r="5" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="42" r="9" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="42" r="3" fill="currentColor"/></svg>`,
  gpu: `<svg viewBox="0 0 64 64" fill="none"><rect x="6" y="18" width="52" height="24" rx="3" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="30" r="7" stroke="currentColor" stroke-width="2"/><circle cx="40" cy="30" r="7" stroke="currentColor" stroke-width="2"/><rect x="10" y="42" width="10" height="6" fill="currentColor" opacity=".7"/></svg>`,
  smarthome: `<svg viewBox="0 0 64 64" fill="none"><path d="M10 28L32 10l22 18" stroke="currentColor" stroke-width="2"/><path d="M16 26v26h32V26" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="40" r="6" stroke="currentColor" stroke-width="2"/></svg>`,
  webcam: `<svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="26" r="16" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="26" r="7" stroke="currentColor" stroke-width="2"/><path d="M16 52h32M24 52l2-8h12l2 8" stroke="currentColor" stroke-width="2"/></svg>`,
  mic: `<svg viewBox="0 0 64 64" fill="none"><rect x="24" y="6" width="16" height="30" rx="8" stroke="currentColor" stroke-width="2"/><path d="M16 28v4a16 16 0 0 0 32 0v-4" stroke="currentColor" stroke-width="2"/><line x1="32" y1="48" x2="32" y2="58" stroke="currentColor" stroke-width="2"/><line x1="22" y1="58" x2="42" y2="58" stroke="currentColor" stroke-width="2"/></svg>`,
  mousepad: `<svg viewBox="0 0 64 64" fill="none"><rect x="6" y="16" width="52" height="32" rx="6" stroke="currentColor" stroke-width="2"/><rect x="14" y="24" width="36" height="16" rx="3" stroke="currentColor" stroke-width="1.4" opacity=".6"/></svg>`
};

function getCategoryIcon(icon) {
  return CATEGORY_ICONS[icon] || CATEGORY_ICONS.laptop;
}

function starRating(rating) {
  const full = Math.round(rating);
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star ${i <= full ? "star--full" : ""}">★</span>`;
  }
  return `<span class="rating" title="${rating} / 5">${html}</span>`;
}
