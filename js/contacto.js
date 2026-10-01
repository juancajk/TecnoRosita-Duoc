/* ============================================================
   TECNOROSITA — contacto.js
   Validación del formulario de Contacto usando JavaScript puro.

   Reglas de negocio (definidas en la ERS / requerimientos del
   cliente para esta vista):
     - Nombre:   requerido, máximo 100 caracteres.
     - Correo:   requerido, máximo 100 caracteres, solo se
                 aceptan dominios @duoc.cl, @profesor.duoc.cl
                 y @gmail.com.
     - Mensaje:  requerido, máximo 500 caracteres.
   Los mensajes de error se muestran en color rojo, en el
   contexto del campo (justo debajo de él), y se actualizan en
   tiempo real (evento "input") además de validarse al enviar.
   ============================================================ */

const EMAIL_DOMAIN_REGEX = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

const contactRules = {
  nombre: {
    required: true,
    maxLength: 100,
    messages: {
      required: "Este campo es obligatorio. Cuéntanos tu nombre completo.",
      maxLength: "El nombre no puede superar los 100 caracteres."
    }
  },
  correo: {
    required: true,
    maxLength: 100,
    pattern: EMAIL_DOMAIN_REGEX,
    messages: {
      required: "Ingresa un correo de contacto para poder responderte.",
      maxLength: "El correo no puede superar los 100 caracteres.",
      pattern: "Solo se aceptan correos @duoc.cl, @profesor.duoc.cl o @gmail.com."
    }
  },
  mensaje: {
    required: true,
    maxLength: 500,
    messages: {
      required: "Cuéntanos en qué podemos ayudarte.",
      maxLength: "El mensaje no puede superar los 500 caracteres."
    }
  }
};

function validateField(name, value) {
  const rule = contactRules[name];
  if (!rule) return null;

  if (rule.required && value.trim() === "") return rule.messages.required;
  if (rule.maxLength && value.length > rule.maxLength) return rule.messages.maxLength;
  if (rule.pattern && !rule.pattern.test(value.trim())) return rule.messages.pattern;
  return null;
}

function showFieldError(field, message) {
  const errorEl = document.getElementById(`error-${field.id}`);
  if (message) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.hidden = false;
    }
  } else {
    field.classList.remove("is-invalid");
    field.classList.add("is-valid");
    if (errorEl) {
      errorEl.textContent = "";
      errorEl.hidden = true;
    }
  }
}

function updateCharCounter(field) {
  const counter = document.getElementById(`count-${field.id}`);
  const rule = contactRules[field.name];
  if (counter && rule?.maxLength) {
    counter.textContent = `${field.value.length} / ${rule.maxLength}`;
    counter.classList.toggle("is-over", field.value.length > rule.maxLength);
  }
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const fields = Array.from(form.querySelectorAll("[data-validate]"));

  fields.forEach((field) => {
    updateCharCounter(field);
    field.addEventListener("input", () => {
      const message = validateField(field.name, field.value);
      showFieldError(field, message);
      updateCharCounter(field);
    });
    field.addEventListener("blur", () => {
      const message = validateField(field.name, field.value);
      showFieldError(field, message);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    fields.forEach((field) => {
      const message = validateField(field.name, field.value);
      showFieldError(field, message);
      if (message) isValid = false;
    });

    const successPanel = document.getElementById("contactSuccess");

    if (isValid) {
      form.hidden = true;
      if (successPanel) successPanel.hidden = false;
      showToast("¡Mensaje enviado! Te contactaremos pronto.", "success");
    } else {
      showToast("Revisa los campos marcados en rojo.", "error");
      form.querySelector(".is-invalid")?.focus();
    }
  });

  document.getElementById("sendAnotherBtn")?.addEventListener("click", () => {
    form.reset();
    fields.forEach((field) => {
      field.classList.remove("is-valid", "is-invalid");
      updateCharCounter(field);
    });
    form.hidden = false;
    document.getElementById("contactSuccess").hidden = true;
  });
}

document.addEventListener("DOMContentLoaded", initContactForm);
