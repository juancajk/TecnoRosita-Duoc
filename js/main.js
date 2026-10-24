document.addEventListener("DOMContentLoaded", function() {

    const runInput = document.getElementById("run");
    if (runInput) {
        runInput.addEventListener("input", function() {
            this.value = this.value.toUpperCase(); 
        });
    }

    const datosChile = {
        "Región Metropolitana": ["Santiago", "Providencia", "Las Condes", "Maipú"],
        "Valparaíso": ["Valparaíso", "Viña del Mar", "Quilpué"],
        "Biobío": ["Concepción", "Talcahuano", "San Pedro de la Paz"]
    };

    const selectRegion = document.getElementById("region");
    const selectComuna = document.getElementById("comuna");

    if (selectRegion && selectComuna) {
        for (let region in datosChile) {
            let option = document.createElement("option");
            option.value = region;
            option.textContent = region;
            selectRegion.appendChild(option);
        }

        selectRegion.addEventListener("change", function() {
            let regionSeleccionada = this.value;
            selectComuna.innerHTML = '<option value="">Seleccione una comuna</option>'; 
            if (regionSeleccionada !== "") {
                let comunas = datosChile[regionSeleccionada];
                comunas.forEach(comuna => {
                    let option = document.createElement("option");
                    option.value = comuna;
                    option.textContent = comuna;
                    selectComuna.appendChild(option);
                });
            }
        });
    }

    const regexCorreo = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;

    const formLogin = document.getElementById("formLogin");
    if (formLogin) {
        formLogin.addEventListener("submit", function(e) {
            e.preventDefault(); 
            let isValid = true;
            
            const correo = document.getElementById("loginCorreo").value;
            const errorCorreo = document.getElementById("errorLoginCorreo");
            const pass = document.getElementById("loginPass").value;
            const errorPass = document.getElementById("errorLoginPass");

            if (!regexCorreo.test(correo)) {
                errorCorreo.textContent = "Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.";
                isValid = false;
            } else { errorCorreo.textContent = ""; }

            if (pass.length < 4 || pass.length > 10) {
                errorPass.textContent = "La contraseña debe tener entre 4 y 10 caracteres.";
                isValid = false;
            } else { errorPass.textContent = ""; }

            if (isValid) {
                const correoGuardado = localStorage.getItem('usuarioTecnoRosita');
                const passGuardada = localStorage.getItem('passTecnoRosita');

                if (correo === correoGuardado && pass === passGuardada) {
                    alert("¡Inicio de sesión exitoso! Bienvenido al Panel de Administración.");
                    window.location.href = "home-admin.html"; 
                } else {
                    alert("Error: Correo o contraseña incorrectos, o usuario no registrado.");
                }
            }
        });
    }

    const formRegistro = document.getElementById("formRegistro");
    if (formRegistro) {
        formRegistro.addEventListener("submit", function(e) {
            e.preventDefault();
            let isValid = true;
            
            const errorRun = document.getElementById("errorRun");
            const runRegex = /^[0-9K]{7,9}$/;
            if (!runRegex.test(runInput.value)) {
                errorRun.textContent = "Ingrese 7 a 9 caracteres, sin puntos ni guion.";
                isValid = false;
            } else { errorRun.textContent = ""; }

            const correoInput = document.getElementById("correo").value;
            const errorCorreo = document.getElementById("errorCorreo");
            if (!regexCorreo.test(correoInput)) {
                errorCorreo.textContent = "Dominio inválido. Use @duoc.cl, @profesor.duoc.cl o @gmail.com.";
                isValid = false;
            } else { errorCorreo.textContent = ""; }

            const passInput = document.getElementById("password").value;
            const errorPass = document.getElementById("errorPass");
            if (passInput.length < 4 || passInput.length > 10) {
                errorPass.textContent = "La contraseña debe contener entre 4 y 10 caracteres.";
                isValid = false;
            } else { errorPass.textContent = ""; }

            if (isValid) {
                localStorage.setItem('usuarioTecnoRosita', correoInput);
                localStorage.setItem('passTecnoRosita', passInput);
                
                alert("¡Registro completado! Ahora puedes iniciar sesión.");
                window.location.href = "login.html"; 
            }
        });
    }

    const formProducto = document.getElementById("formProducto");
    if (formProducto) {
        formProducto.addEventListener("submit", function(e) {
            e.preventDefault();
            let isValid = true;
            
            const codigo = document.getElementById("codigo").value;
            const errorCodigo = document.getElementById("errorCodigo");
            if (codigo.length < 3) {
                errorCodigo.textContent = "El código (nombre) debe tener al menos 3 caracteres.";
                isValid = false;
            } else { errorCodigo.textContent = ""; }

            const precio = parseFloat(document.getElementById("precio").value);
            const errorPrecio = document.getElementById("errorPrecio");
            if (precio < 0) {
                errorPrecio.textContent = "El valor del producto no puede ser negativo.";
                isValid = false;
            } else { errorPrecio.textContent = ""; }

            if (isValid) {
                const stock = parseInt(document.getElementById("stock").value);
                const stockCritico = parseInt(document.getElementById("stockCritico")?.value || 5);
                
                let productos = JSON.parse(localStorage.getItem('productosTecnoRosita')) || [];
                
                // Generar un ID único basado en el tamaño actual
                let nuevoId = productos.length > 0 ? Math.max(...productos.map(p => Number(p.id) || 0)) + 1 : 1;
                
                
                productos.push({ 
                    id: nuevoId,
                    sku: "PROD-NUEVO-" + nuevoId,
                    name: codigo,  
                    category: "Componentes", 
                    price: precio, 
                    originalPrice: precio + (precio * 0.2), 
                    stock: stock, 
                    stockCritico: stockCritico,
                    icon: "gpu", 
                    rating: 5.0,
                    description: "Producto agregado recientemente desde el panel de administración."
                });
                
                localStorage.setItem('productosTecnoRosita', JSON.stringify(productos));

                if (stockCritico >= 0 && stock <= stockCritico) {
                    alert("ALERTA: El stock ingresado es igual o inferior al nivel crítico. Producto guardado.");
                } else {
                    alert("Producto registrado correctamente en el catálogo local.");
                }
                
                window.location.href = "home-admin.html";
            }
        });
    }

    const tablaProductos = document.getElementById('tabla-productos-body');
    if (tablaProductos) {
        let productos = JSON.parse(localStorage.getItem('productosTecnoRosita')) || [];
        
        tablaProductos.innerHTML = '';
        productos.forEach((prod, index) => {
            
            let stockVal = prod.stock || 0;
            let estadoStock = stockVal <= (prod.stockCritico || 5) 
                ? '<span class="badge badge--warning">Stock Crítico</span>' 
                : '<span class="badge badge--discount" style="background-color: var(--success);">Normal</span>';
            
            let codigoFormateado = prod.sku || "PRD" + String(index + 1).padStart(3, '0');
            
            tablaProductos.innerHTML += `
                <tr>
                    <td>${codigoFormateado}</td>
                    <td><strong>${prod.name || 'Sin Nombre'}</strong></td>
                    <td>${stockVal} ${estadoStock}</td>
                    <td>$${(prod.price || 0).toLocaleString('es-CL')}</td>
                </tr>
            `;
        });
    }
});