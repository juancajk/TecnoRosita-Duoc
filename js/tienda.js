// 1. Matriz de Datos: Catálogo Elite[cite: 13, 14]
const productos = [
    { id: 1001, nombre: "Notebook Legion Pro 7i", precio: 3499990, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80" },
    { id: 1002, nombre: "Monitor Curvo 34\" 165Hz", precio: 649990, img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80" },
    { id: 1003, nombre: "Auriculares Tácticos 7.1", precio: 189990, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80" }
];

// 2. Motor de Persistencia (LocalStorage)[cite: 13, 14]
let carrito = JSON.parse(localStorage.getItem("eliteCartState")) || [];
actualizarHUD();

const gridMatriz = document.getElementById("contenedor-productos");

if (gridMatriz) {
    productos.forEach(prod => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "card-hardware";
        tarjeta.innerHTML = `
            <img src="${prod.img}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>$${prod.precio.toLocaleString('es-CL')}</p>
            <button class="btn-login-gold w-100" onclick="equiparHardware(${prod.id}, this)">AÑADIR AL ARSENAL</button>
        `;
        gridMatriz.appendChild(tarjeta);
    });
}

function equiparHardware(id, botonRef) {
    const hardware = productos.find(p => p.id === id);
    carrito.push(hardware);
    localStorage.setItem("eliteCartState", JSON.stringify(carrito));
    actualizarHUD();
    
    // Retroalimentación visual inmersiva
    const textoBase = botonRef.innerText;
    botonRef.innerText = "[ EQUIPADO ]";
    botonRef.style.background = "var(--gold-primary)";
    botonRef.style.color = "#000";
    
    setTimeout(() => {
        botonRef.innerText = textoBase;
        botonRef.style.background = "transparent";
        botonRef.style.color = "var(--gold-primary)";
    }, 1200);
}

function actualizarHUD() {
    const hudContador = document.getElementById("cart-count");
    if (hudContador) hudContador.innerText = carrito.length;
}

// 3. Protocolos de Seguridad: Validación de Formulario en el DOM[cite: 13, 14]
const terminalSoporte = document.getElementById("form-contacto");

if (terminalSoporte) {
    terminalSoporte.addEventListener("submit", function(evento) {
        evento.preventDefault();
        
        const inputCorreo = document.getElementById("correo");
        const alertaDOM = document.getElementById("error-correo");
        
        // Verificación algorítmica estricta (Requisito ERS)
        const regexDominios = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;

        if (!regexDominios.test(inputCorreo.value.trim())) {
            // Inyección de error directamente en el DOM sin usar alert()
            alertaDOM.textContent = "[!] ACCESO DENEGADO. UTILICE UN DOMINIO CORPORATIVO VÁLIDO (@duoc.cl, @gmail.com).";
            alertaDOM.style.display = "block";
            inputCorreo.style.borderColor = "var(--error-red)";
            inputCorreo.style.boxShadow = "inset 4px 0 0 var(--error-red)";
        } else {
            // Confirmación de envío
            alertaDOM.style.display = "none";
            inputCorreo.style.borderColor = "#333";
            inputCorreo.style.boxShadow = "none";
            alert("REPORTE ENVIADO. UN ESPECIALISTA CONTACTARÁ A SU UNIDAD.");
            terminalSoporte.reset();
        }
    });
}