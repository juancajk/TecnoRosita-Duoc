// 1. Catálogo Élite (17 Productos con imágenes realistas/RGB)
const inventarioTecnoRosita = [
    { id: 1, marca: "LG", nombre: 'Monitor UltraGear OLED 27" 240Hz', dscto: "20% DCTO", precioN: 899990, precioO: 719990, img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80" },
    { id: 2, marca: "CORSAIR", nombre: "RAM Vengeance RGB Pro 32GB DDR5", dscto: "15% DCTO", precioN: 120990, precioO: 102840, img: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80" },
    { id: 3, marca: "VERTAGEAR", nombre: "Silla Gamer Racing Series SL5000 RGB", dscto: "25% DCTO", precioN: 399990, precioO: 299990, img: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?auto=format&fit=crop&w=600&q=80" },
    { id: 4, marca: "ASUS", nombre: "PC ROG Strix (RTX 4090, Intel i9)", dscto: "10% DCTO", precioN: 4500990, precioO: 4050990, img: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80" },
    { id: 5, marca: "HYPERX", nombre: "Audífonos Cloud III Wireless (Setup Edition)", dscto: "23% DCTO", precioN: 149990, precioO: 114990, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80" },
    { id: 6, marca: "LOGITECH", nombre: "Mouse G502 Hero Inalámbrico (Neon)", dscto: "37% DCTO", precioN: 99990, precioO: 62990, img: "https://images.unsplash.com/photo-1615663245857-ac1eeb536fcb?auto=format&fit=crop&w=600&q=80" },
    { id: 7, marca: "RAZER", nombre: "Teclado Mecánico Huntsman V2 Analog", dscto: "15% DCTO", precioN: 210000, precioO: 178500, img: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80" },
    { id: 8, marca: "AMD", nombre: "Procesador Ryzen 9 7950X3D (Gaming CPU)", dscto: "18% DCTO", precioN: 750990, precioO: 615810, img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80" },
    { id: 9, marca: "NZXT", nombre: "Gabinete H9 Flow Dual-Chamber", dscto: "12% DCTO", precioN: 189990, precioO: 167190, img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=600&q=80" },
    { id: 10, marca: "ASUS", nombre: "Notebook ROG Zephyrus G14", dscto: "20% DCTO", precioN: 1899990, precioO: 1519990, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80" },
    { id: 11, marca: "MSI", nombre: "Placa Madre MPG Z790 Carbon WIFI", dscto: "25% DCTO", precioN: 349990, precioO: 262490, img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
    { id: 12, marca: "ELGATO", nombre: "Stream Deck MK.2 (Para Creadores)", dscto: "10% DCTO", precioN: 159990, precioO: 143990, img: "https://images.unsplash.com/photo-1621259182978-fbf93132e53d?auto=format&fit=crop&w=600&q=80" },
    { id: 13, marca: "SAMSUNG", nombre: "SSD 990 PRO NVMe M.2 2TB", dscto: "30% DCTO", precioN: 249990, precioO: 174990, img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80" },
    { id: 14, marca: "STEELSERIES", nombre: "Mousepad QcK Prism Cloth 3XL RGB", dscto: "40% DCTO", precioN: 99990, precioO: 59990, img: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=600&q=80" },
    { id: 15, marca: "NVIDIA", nombre: "Tarjeta Gráfica RTX 4080 Super Founders", dscto: "5% DCTO", precioN: 1499990, precioO: 1424990, img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80" },
    { id: 16, marca: "NZXT", nombre: "Refrigeración Líquida Kraken Elite 360", dscto: "15% DCTO", precioN: 289990, precioO: 246490, img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80" },
    { id: 17, marca: "SONY", nombre: "Mando DualSense Edge (PC/PS5)", dscto: "10% DCTO", precioN: 219990, precioO: 197990, img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80" }
];

// 2. LocalStorage y Carrito Dinámico
let carrito = JSON.parse(localStorage.getItem("carritoTecnoRosita")) || [];
actualizarContador();

const gridCatalogo = document.getElementById("contenedor-productos");
if (gridCatalogo) {
    inventarioTecnoRosita.forEach(prod => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "card-pro";
        tarjeta.innerHTML = `
            <span class="tag-dscto">${prod.dscto}</span>
            <div class="img-wrap"><img src="${prod.img}" alt="${prod.nombre}"></div>
            <div class="card-info">
                <span class="marca-txt">${prod.marca}</span>
                <h4 class="nombre-txt">${prod.nombre}</h4>
                <p class="precio-normal">Ref: $${prod.precioN.toLocaleString('es-CL')}</p>
                <p class="precio-oferta">$${prod.precioO.toLocaleString('es-CL')}</p>
                <button class="btn-comprar" onclick="agregarAlArsenal(${prod.id}, this)">AGREGAR AL ARSENAL</button>
            </div>
        `;
        gridCatalogo.appendChild(tarjeta);
    });
}

function agregarAlArsenal(id, btnRef) {
    const articulo = inventarioTecnoRosita.find(p => p.id === id);
    carrito.push(articulo);
    localStorage.setItem("carritoTecnoRosita", JSON.stringify(carrito));
    actualizarContador();
    
    const textoBase = btnRef.innerText;
    btnRef.innerText = "✓ PROCESADO";
    btnRef.style.background = "var(--turquesa)";
    btnRef.style.color = "#000";
    setTimeout(() => {
        btnRef.innerText = textoBase;
        btnRef.style.background = "var(--morado-fuerte)";
        btnRef.style.color = "#fff";
    }, 1500);
}

function actualizarContador() {
    const badge = document.getElementById("cart-count");
    if (badge) badge.innerText = carrito.length;
}

// 3. Validación de Correo Institucional (Requisito Duoc)
const formSoporte = document.getElementById("form-contacto");
if (formSoporte) {
    formSoporte.addEventListener("submit", function(evento) {
        evento.preventDefault();
        const inputCorreo = document.getElementById("correo");
        const msgError = document.getElementById("error-correo");
        const email = inputCorreo.value.trim();
        
        if (!email.endsWith("@duoc.cl") && !email.endsWith("@gmail.com")) {
            msgError.textContent = "Acceso denegado: Usa correo @duoc.cl o @gmail.com";
            msgError.style.display = "block";
            inputCorreo.style.borderColor = "#ff0055";
        } else {
            msgError.style.display = "none";
            inputCorreo.style.borderColor = "var(--turquesa)";
            alert("Reporte recibido. Un asesor de la IA te contactará pronto.");
            formSoporte.reset();
        }
    });
}