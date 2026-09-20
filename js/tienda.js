// 1. Arreglo Avanzado (Data estructurada como en e-commerce real)
const inventarioLegion = [
    { 
        id: 1, 
        nombre: "Legion Tab Gen 3 (con Funda + Vidrio)", 
        etiqueta: "3 CUOTAS SIN INTERÉS", colorTag: "orange",
        estrellas: "★★★★★ 4.5 (160)",
        precioWeb: 832102, precioOferta: 499991, descuento: "39%",
        specs: ["Procesador Qualcomm® Snapdragon™ 8 Gen 3", "Android 14", "12 GB LPDDR5X (soldado)"],
        img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 2, 
        nombre: "Legion Tab Gen 5 (Con Funda + Film)", 
        etiqueta: "3 CUOTAS SIN INTERÉS", colorTag: "orange",
        estrellas: "★★★★★ 4.7 (34)",
        precioWeb: 999991, precioOferta: 799991, descuento: "20%",
        specs: ["Procesador Qualcomm® Snapdragon™ 8 Elite Gen 5", "Android 16", "12 GB LPDDR5T (soldado)"],
        img: "https://images.unsplash.com/photo-1628527304948-0615f618baa5?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 3, 
        nombre: 'Legion Go S (8" AMD Z2 GO) con SteamOS', 
        etiqueta: "3 CUOTAS SIN INTERÉS", colorTag: "orange",
        estrellas: "★★★★☆ 4.3 (83)",
        precioWeb: 1407216, precioOferta: 799992, descuento: "43%",
        specs: ["Procesador AMD Ryzen™ Z2 GO", "SteamOS", "Gráficos AMD Radeon™", "16 GB LPDDR5X-6400MHz"],
        img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 4, 
        nombre: 'Legion Go 8 Gen 2 (8" AMD Extreme)', 
        etiqueta: "6 CUOTAS SIN INTERÉS", colorTag: "red",
        estrellas: "★★★★★ 4.6 (84)",
        precioWeb: 1699991, precioOferta: 1299991, descuento: "23%",
        specs: ["Procesador AMD Ryzen™ Z2 Extreme", "Windows 11 Home 64", "Gráficos AMD Radeon™", "16 GB LPDDR5X-7500MHz"],
        img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80" 
    }
];

// 2. LocalStorage y Renderizado de Tarjetas
let carrito = JSON.parse(localStorage.getItem("carritoTecnoRosita")) || [];
actualizarContador();

const gridCatalogo = document.getElementById("contenedor-productos");
if (gridCatalogo) {
    inventarioLegion.forEach(prod => {
        const specsHTML = prod.specs.map(spec => `<li>${spec}</li>`).join('');
        const claseEtiqueta = prod.colorTag === 'orange' ? 'tag-cuotas' : 'tag-red';

        const card = document.createElement("article");
        card.className = "card-pro";
        card.innerHTML = `
            <div class="card-top">
                <span class="${claseEtiqueta}">${prod.etiqueta}</span>
                <h3 class="card-title">${prod.nombre}</h3>
                <div class="stars">${prod.estrellas}</div>
            </div>
            <div class="img-container">
                <img src="${prod.img}" alt="${prod.nombre}">
            </div>
            <div class="card-body">
                <p class="precio-web">Precio Web $${prod.precioWeb.toLocaleString('es-CL')}</p>
                <p class="precio-final">$${prod.precioOferta.toLocaleString('es-CL')}</p>
                <div>
                    <span class="descuento-badge">${prod.descuento} de descuento</span> <span style="font-size:10px; color:#aaa;">IVA Inc.</span>
                </div>
                <ul class="specs-list">
                    ${specsHTML}
                </ul>
                <button class="btn-buy" onclick="agregarAlCarrito(${prod.id}, this)">AGREGAR AL CARRO</button>
            </div>
        `;
        gridCatalogo.appendChild(card);
    });
}

function agregarAlCarrito(id, btnRef) {
    const articulo = inventarioLegion.find(p => p.id === id);
    carrito.push(articulo);
    localStorage.setItem("carritoTecnoRosita", JSON.stringify(carrito));
    actualizarContador();
    
    const textoOriginal = btnRef.innerText;
    btnRef.innerText = "✓ AÑADIDO";
    btnRef.style.background = "var(--neon-cyan)";
    btnRef.style.color = "#000";
    setTimeout(() => {
        btnRef.innerText = textoOriginal;
        btnRef.style.background = "transparent";
        btnRef.style.color = "white";
    }, 1500);
}

function actualizarContador() {
    const badge = document.getElementById("cart-count");
    if (badge) badge.innerText = carrito.length;
}

// 3. Validación Formulario
const formulario = document.getElementById("form-contacto");
if (formulario) {
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();
        const inputCorreo = document.getElementById("correo");
        const msgError = document.getElementById("error-correo");
        const email = inputCorreo.value.trim();
        
        if (!email.endsWith("@duoc.cl") && !email.endsWith("@gmail.com")) {
            msgError.textContent = "Requerido: @duoc.cl o @gmail.com";
            msgError.style.display = "block";
            inputCorreo.style.borderColor = "var(--tag-red)";
        } else {
            msgError.style.display = "none";
            inputCorreo.style.borderColor = "#383e59";
            alert("Solicitud procesada con éxito.");
            formulario.reset();
        }
    });
}