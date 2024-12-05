document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!usuario || !password) {
        alert("Por favor, llena ambos campos.");
    } else {
        alert("Inicio de sesión exitoso.");
        // Puedes añadir lógica para redirigir o enviar datos.
    }
});