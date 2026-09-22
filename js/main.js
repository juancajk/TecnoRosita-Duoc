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
                    alert("¡Inicio de sesión exitoso! Bienvenido a TecnoRosita.");
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
                errorCodigo.textContent = "El código debe tener al menos 3 caracteres.";
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
                const stockCritico = parseInt(document.getElementById("stockCritico").value);
                
                let productos = JSON.parse(localStorage.getItem('productosTecnoRosita')) || [];
                
                productos.push({ nombre: codigo, precio: precio, stock: stock });
                
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
        let productos = JSON.parse(localStorage.getItem('productosTecnoRosita'));
        
        if (!productos || productos.length === 0) {
            const inventarioTecnoRosita = [
                { id: 1, marca: "LG", nombre: 'Monitor UltraGear OLED 27" 240Hz', precioN: 899990 },
                { id: 2, marca: "CORSAIR", nombre: "RAM Vengeance RGB Pro 32GB DDR5", precioN: 120990 },
                { id: 3, marca: "VERTAGEAR", nombre: "Silla Gamer Racing Series SL5000 RGB", precioN: 399990 },
                { id: 4, marca: "ASUS", nombre: "PC ROG Strix (RTX 4090, Intel i9)", precioN: 4500990 },
                { id: 5, marca: "HYPERX", nombre: "Audífonos Cloud III Wireless", precioN: 149990 },
                { id: 6, marca: "LOGITECH", nombre: "Mouse G502 Hero Inalámbrico", precioN: 99990 },
                { id: 7, marca: "RAZER", nombre: "Teclado Mecánico Huntsman V2", precioN: 210000 },
                { id: 8, marca: "AMD", nombre: "Procesador Ryzen 9 7950X3D", precioN: 750990 },
                { id: 9, marca: "NZXT", nombre: "Gabinete H9 Flow Dual-Chamber", precioN: 189990 },
                { id: 10, marca: "ASUS", nombre: "Notebook ROG Zephyrus G14", precioN: 1899990 },
                { id: 11, marca: "MSI", nombre: "Placa Madre MPG Z790 Carbon WIFI", precioN: 349990 },
                { id: 12, marca: "ELGATO", nombre: "Stream Deck MK.2", precioN: 159990 },
                { id: 13, marca: "SAMSUNG", nombre: "SSD 990 PRO NVMe M.2 2TB", precioN: 249990 },
                { id: 14, marca: "STEELSERIES", nombre: "Mousepad QcK Prism Cloth 3XL", precioN: 99990 },
                { id: 15, marca: "NVIDIA", nombre: "Tarjeta Gráfica RTX 4080 Super", precioN: 1499990 },
                { id: 16, marca: "NZXT", nombre: "Refrigeración Líquida Kraken Elite 360", precioN: 289990 },
                { id: 17, marca: "SONY", nombre: "Mando DualSense Edge", precioN: 219990 }
            ];

            productos = inventarioTecnoRosita.map(item => ({
                nombre: item.marca + " " + item.nombre,
                precio: item.precioN,
                stock: item.id % 4 === 0 ? 3 : 15 
            }));

            localStorage.setItem('productosTecnoRosita', JSON.stringify(productos));
        }

        tablaProductos.innerHTML = '';
        productos.forEach((prod, index) => {
            let estadoStock = prod.stock <= 5 ? '<span class="alerta-stock" style="color:#dc2626; font-weight:bold;">Stock Crítico</span>' : '<span style="color:#0d9488; font-weight:bold;">Normal</span>';
            let codigoFormateado = "PRD" + String(index + 1).padStart(3, '0');
            
            tablaProductos.innerHTML += `
                <tr>
                    <td>${codigoFormateado}</td>
                    <td>${prod.nombre}</td>
                    <td>${prod.stock} (${estadoStock})</td>
                    <td>$${prod.precio.toLocaleString('es-CL')}</td>
                </tr>
            `;
        });
    }
});