document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = form.querySelector("input[type='text']");
    const passwordInput = form.querySelector("input[type='password']");
    const errorContainer = document.createElement("div");

    errorContainer.style.color = "red";
    errorContainer.style.marginTop = "10px";
    form.appendChild(errorContainer);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario si hay errores.
        errorContainer.innerHTML = ""; // Limpia mensajes previos.

        let errors = [];

        // Validar email.
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            errors.push("El correo electrónico es obligatorio.");
        } else if (!emailRegex.test(email)) {
            errors.push("Por favor, ingresa un correo electrónico válido.");
        }

        // Validar contraseña.
        const password = passwordInput.value.trim();
        if (!password) {
            errors.push("La contraseña es obligatoria.");
        } else if (password.length < 6) {
            errors.push("La contraseña debe tener al menos 6 caracteres.");
        }

        // Mostrar errores o redirigir.
        if (errors.length > 0) {
            errorContainer.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
        } else {
            errorContainer.innerHTML = "<p style='color: green;'>Inicio de sesión exitoso. Redirigiendo...</p>";
            setTimeout(() => {
                window.location.href = "../index.html"; // Redirige al archivo index.html
            }, 1500); // Agrega un pequeño retraso para mostrar el mensaje.
        }
    });
});
