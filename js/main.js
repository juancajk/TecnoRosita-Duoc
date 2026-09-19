document.addEventListener("DOMContentLoaded", function() {

    
    const runInput = document.getElementById("run");
    if (runInput) {
        runInput.addEventListener("input", function() {
            this.value = this.value.toUpperCase(); 
        });
    }

    // 1. SELECTS DINÁMICOS: Regiones y Comunas
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

    // 2. VALIDACIONES: Login
    const formLogin = document.getElementById("formLogin");
    if (formLogin) {
        formLogin.addEventListener("submit", function(e) {
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

            
            if (!isValid) {
                e.preventDefault(); 
            } else {
                e.preventDefault(); 
                alert("¡Inicio de sesión exitoso! Bienvenido a TecnoRosita.");
                window.location.href = "home-admin.html"; 
            }
        });
    }

    // 3. VALIDACIONES: Registro
    const formRegistro = document.getElementById("formRegistro");
    if (formRegistro) {
        formRegistro.addEventListener("submit", function(e) {
            let isValid = true;
            
            // Validar RUN
            const errorRun = document.getElementById("errorRun");
            const runRegex = /^[0-9K]{7,9}$/; // Acepta solo mayúscula gracias a la Mejora 1
            if (!runRegex.test(runInput.value)) {
                errorRun.textContent = "Ingrese 7 a 9 caracteres, sin puntos ni guion.";
                isValid = false;
            } else { errorRun.textContent = ""; }

            // Validar Correo
            const correoInput = document.getElementById("correo").value;
            const errorCorreo = document.getElementById("errorCorreo");
            if (!regexCorreo.test(correoInput)) {
                errorCorreo.textContent = "Dominio inválido. Use @duoc.cl, @profesor.duoc.cl o @gmail.com.";
                isValid = false;
            } else { errorCorreo.textContent = ""; }

            // Validar Contraseña
            const passInput = document.getElementById("password").value;
            const errorPass = document.getElementById("errorPass");
            if (passInput.length < 4 || passInput.length > 10) {
                errorPass.textContent = "La contraseña debe contener entre 4 y 10 caracteres.";
                isValid = false;
            } else { errorPass.textContent = ""; }

            
            if (!isValid) {
                e.preventDefault();
            } else {
                e.preventDefault();
                alert("¡Registro completado! Ahora puedes iniciar sesión.");
                window.location.href = "login.html"; 
            }
        });
    }

    // 4. VALIDACIONES: Nuevo Producto
    const formProducto = document.getElementById("formProducto");
    if (formProducto) {
        formProducto.addEventListener("submit", function(e) {
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

            if (!isValid) {
                e.preventDefault();
            } else {
                e.preventDefault();
                const stock = parseInt(document.getElementById("stock").value);
                const stockCritico = parseInt(document.getElementById("stockCritico").value);
                
                
                if (stockCritico >= 0 && stock <= stockCritico) {
                    alert("ALERTA: El stock ingresado es igual o inferior al nivel crítico definido.");
                } else {
                    alert("Producto registrado correctamente en el catálogo.");
                }
            }
        });
    }
});